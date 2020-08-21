import React from "react";
import {Button, Upload, notification} from "antd";
import InboxOutlined from "@ant-design/icons/lib/icons/InboxOutlined";
import {uploadMedia} from "../QuestionsAPI";
import axios from "axios";
import PictureWall from "../PictureWall"
import { json } from "body-parser";
import { REMOTE_HOST } from "../../../constants.js"
import "../Questions.css"

function renameFile(file) {
    var date = Date.now()
    console.log("date: " + date)

    var newName = date + "_" + file.name
    return new File([file], newName, {
        type: file.type,
        lastModified: file.lastModified,
    });
}

export default class Q6 extends React.Component {
    //fileImgs is the array of photo urls which are used to diaply the thumbnail
    //fileArr is used for the actual photos to be dumped into s3 bucket
    constructor(props){
        super(props);
        this.state = {
          success : false,
          url : "",
          fileName: "",
          fileImgs: [],
          fileArr: [],
          uploadMessage: ""
            
        }
    }
    

    handleChange = (ev) => {
        try{
            this.setState({ fileImgs: [...this.state.fileImgs, URL.createObjectURL(ev.target.files[0])], fileArr: [...this.state.fileArr, ev.target.files[0]], uploadMessage: "" })
        } catch(error) {
            this.setState({ fileImgs: [], fileArr: [], uploadMessage: "An error occured while uploading your photos. Please try again." })
        }
        
    }
    

    handleUpload = async(ev) => {
        this.setState({ uploadMessage: `Please wait for your images to finish uploading before proceeding to the next step. 
        
        We will notify you when the upload is complete, thank you for your patience!` })
        const files = this.state.fileArr;
        console.log(files);


        for(file of files) {
            var file = renameFile(file)

            var fileToAddDB = ""
    
            console.log("new file")
            console.log(file)
            // Split the filename to get the name and type
            let fileParts = file.name.split('.');
            let fileName = fileParts[0];
            let fileType = fileParts[1];
            
            console.log("Preparing the upload");
    
            const jwt = localStorage.getItem("token");
            const config = {
                headers: {
                    Authorization: `Bearer ${jwt}`,
                }
            }

            //--------------------------------------------//
            try {
                let response = await axios.post(REMOTE_HOST + "/aws/signS3_upload", {
                    bucket: "resteasy-user-uploads",
                    fileName: fileName,
                    fileType: fileType
                }, config)

                var returnData = response.data
                var signedRequest = returnData.signedRequest;
                var url = returnData.url;
                this.setState({ url: url })
                fileToAddDB = returnData.fileName
                console.log("Recieved a signed request " + signedRequest);
                console.log(fileToAddDB)

                // Put the fileType in the headers for the upload
                var options = {
                    headers: {
                        'Content-Type': fileType
                    }
                };

                try {
                    let result = await axios.put(signedRequest, file, options)
                    this.setState({ success: true });

                    // upon successful upload, add the file data into the userImages index in mongoDB
                    console.log("add to database: " + fileToAddDB)
                    try {
                        let addResult = await axios.post(REMOTE_HOST + "/aws/addImgDB", {
                            memoryName: "testMemory",
                            imgID: fileToAddDB
                        }, config)
                        
                    } catch(error) {
                        console.log("error " + JSON.stringify(error))
                        throw new Error(error)
                    }

                } catch(error) {
                    console.log("ERROR " + JSON.stringify(error));
                    throw new Error(error)

                }


            } catch (error) {
                console.log(JSON.stringify(error.response));
                throw new Error(error)

            }

        }
        document.getElementById("choose-file").value = null;
        this.setState({ fileImgs: [], fileArr: [], uploadMessage: "Image(s) uploaded! You can add more or go to the next step." })

    };


    render() {

        const navButton = {
            borderRadius: "10px",
            margin: "10px",
            width: "100px"
        }

        let imgArr = this.state.fileImgs
        const images = imgArr.map(image => {
            return <img key={image} src={image} style={{height: "60px", width: "60px", objectFit: "cover", margin: "10px"}} />
         });

        return (
            <div style={{width: "100%", textAlign: "center"}}>
                <div className="create-text" style={{fontSize: "1.5em", marginBottom: "0.5em"}}>
                    Share some of your favourite memories
                </div>

                <input onChange={this.handleChange} ref={(ref) => { this.uploadInput = ref; }} type="file" multiple={false} id="choose-file" style={{marginBottom: "20px"}}/>
                <br/>
                { this.state.uploadMessage }
                <div style={{display: "flex", justifyContent: "center"}}>
                    <br />
                    { images }
                </div>
                <br />
                <br />
                <button className="upload" onClick={this.handleUpload}>UPLOAD PHOTO(S)</button>
                <br/>
                <div style={{display: "flex", justifyContent: "center", marginTop: "1em"}}>
                    <Button type="primary" onClick={this.props.prev} style={navButton}>Previous</Button>
                    <Button type="primary" onClick={this.props.next} style={navButton}>Skip/Next</Button>
                </div>
            </div>);
    }
}
