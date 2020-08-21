var aws = require('aws-sdk');
const config = require('../config.json');
const { json } = require('body-parser');
var getUser = require("../users/user.service")
const db = require('../_helpers/db');
const User = db.User;

module.exports = {
    signS3_upload,
    addImgDB,
    signS3_get
};

// Configure aws with your accessKeyId and your secretAccessKey
async function configAWS(){
    aws.config.update({
        region: 'us-east-1', // Put your aws region here
        accessKeyId: config.AWSAccessKeyId,
        secretAccessKey: config.AWSSecretKey
    })
}

async function signS3_upload(req) {
    
    configAWS()

    // express-jwt appends sub (the user index in mongo) into req. use sub to get user details from mongo
    const userInfo = await getUser.getById(req.user.sub)

    const s3 = new aws.S3();  // Create a new instance of S3
    console.log("-----s3 created-----")

    const S3_BUCKET = req.body.bucket;
    const fileName = req.body.fileName;
    const fileType = req.body.fileType;

    // sending to the S3
    const s3Params = {
        Bucket: S3_BUCKET,
        Key: (userInfo._id)+"/"+fileName,
        Expires: 500,
        ContentType: fileType,
    };

    console.log(s3Params)

    // Get a signed URL to upload file
    var signedRequest = s3.getSignedUrl('putObject', s3Params)

    const returnData = {
        signedRequest: signedRequest,
        url: `https://${S3_BUCKET}.s3.amazonaws.com/${fileName}`,
        fileName: fileName + "." + fileType
    };

    return returnData;
}

async function addImgDB(req) {
    
    const id = req.user.sub
    const digitalMemoryID = req.body.memoryName
    console.log(digitalMemoryID)

    var user = await User.findById(id);
    var newUser = user
    console.log(user)

    // validate
    if (!user) throw 'User not found';

    var newMemoryList = {}

    if (newUser.digitalMemories) {
         newMemoryList = newUser.digitalMemories

        console.log(newMemoryList)
        if(!newMemoryList[digitalMemoryID]){
            console.log("create new memory")
            newMemoryList[digitalMemoryID] = [req.body.imgID]
            console.log(newMemoryList)

        }
        else{
            console.log("adding img to: " + JSON.stringify(newMemoryList))
            console.log(req.body.imgID)
            newMemoryList[digitalMemoryID].push(req.body.imgID)
        }
    }else{
        console.log("no digitalMemories in the db, creating it and adding the imgID")
        newMemoryList[digitalMemoryID] =  [req.body.imgID]
    }

    await User.update({_id :id },{$set : {digitalMemories: newMemoryList}})
    
    // confirm user was updated properly
    user = await User.findById(id);
    console.log(user)

    return user
}

async function signS3_get(req) {
    configAWS()

    const s3 = new aws.S3();  // Create a new instance of S3
    console.log("-----s3 created-----")

    // express-jwt appends sub (the user index in mongo) into req. use sub to get user details from mongo
    const id = req.body.id
    const S3_BUCKET = config.userUploadBucket;

    const user = await getUser.getById(id)
    const digitalMemoryID = req.body.memoryName

    /*
    if(user.digitalMemories[digitalMemoryID]){
        var imgLinks = user.digitalMemories[digitalMemoryID]

        var urlsSigned = []

        imgLinks.forEach((item, index) => {

            let fileParts = item.split('.');
            let fileName = fileParts[0];
            let fileType = fileParts[1];
    */
            const s3Params = {
                Bucket: S3_BUCKET,
    //            Key: user._id+"/"+fileName,
                Key: id+"/" + digitalMemoryID,
                Expires: 1800
            };
            console.log(s3Params)

            var signedRequest = s3.getSignedUrl('getObject', s3Params)
            return signedRequest

    /*
            urlsSigned.push(signedRequest)
        })
        return urlsSigned
    }
    else {
        console.log('there was an error')
    }
    */
}
