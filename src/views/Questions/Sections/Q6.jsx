import React from "react";
import {Button, Upload, notification} from "antd";
import InboxOutlined from "@ant-design/icons/lib/icons/InboxOutlined";
import {uploadMedia} from "../QuestionsAPI";
import axios from "axios";
import PictureWall from "../PictureWall"
import { json } from "body-parser";
import { REMOTE_HOST } from "../../../constants.js"

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

    constructor(props){
        super(props);
        this.state = {
          success : false,
          url : "",
          fileName: ""
        }
      }
    
    handleChange = (ev) => {
        this.setState({success: false, url : ""});
        
    }
    
    handleUpload = ev => {
        var file = this.uploadInput.files[0];

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

        axios.post(REMOTE_HOST + "/aws/signS3_upload",{
            bucket : "resteasy-user-uploads",
            fileName : fileName,
            fileType : fileType
        }, config)
        .then(response => {
            console.log("---------")
            console.log(response)
            var returnData = response.data
            var signedRequest = returnData.signedRequest;
            var url = returnData.url;
            this.setState({url: url})
            fileToAddDB = returnData.fileName
            console.log("Recieved a signed request " + signedRequest);
            console.log(fileToAddDB)
        
            // Put the fileType in the headers for the upload
            var options = {
                    headers: {
                        'Content-Type': fileType
                    }
            };
            axios.put(signedRequest,file,options)
            .then(result => {
                this.setState({success: true});
                
                // upon successful upload, add the file data into the userImages index in mongoDB
                console.log("add to database: " + fileToAddDB)
                axios.post("http://localhost:5000/aws/addImgDB", {
                    memoryName: "testMemory",
                    imgID: fileToAddDB
                }, config)
                .then( result => {
                    console.log(result)
                }).catch(error => {
                    console.log("error " + JSON.stringify(error))
                })
            })
            .catch(error => {
                console.log("ERROR " + JSON.stringify(error));
            })
        })
        .catch(error => {
            console.log(JSON.stringify(error));
        })


        // uploadMedia(file)
        //     .done(function(response) {
        //         if (response.success) {
        //             console.log('file uploaded');
        //         } else {
        //             notification.error({
        //                 message: 'Media upload failed',
        //                 description: response.message,
        //                 placement: 'bottomRight',
        //             });
        //         }
        //     })
        //     .fail((error) => {
        //         notification.error({
        //             message: 'Media upload failed',
        //             description: (error.responseJSON && error.responseJSON.message) ? error.responseJSON.message : "Something went wrong, Please try again later.",
        //             placement: 'bottomRight',
        //         });
        //     });
    };

    render() {
        return (
            <div style={{width: "100%", textAlign: "center"}}>
                <div style={{fontSize: "2em", marginBottom: "0.5em"}}>
                    Share some of your favourite memories
                </div>
                {/* <Upload.Dragger action={this.uploadFile} style={{margin:"auto", padding: "0.5em", width: "40em"}} multiple>
                    <p className="ant-upload-drag-icon">
                        <InboxOutlined />
                    </p>
                    <p className="ant-upload-text">Upload photos and videos</p>
                </Upload.Dragger> */}

                {/* <PictureWall /> */}

                <input onChange={this.handleChange} ref={(ref) => { this.uploadInput = ref; }} type="file"/>
                <button onClick={this.handleUpload}>UPLOAD</button>
                <br/>
                <div style={{display: "flex", justifyContent: "center", marginTop: "1em"}}>
                    <Button type="primary" onClick={this.props.prev} style={{marginRight: "10px", borderRadius: "10px"}}>Previous</Button>
                    <Button type="primary" onClick={this.props.next} style={{marginLeft: "10px", borderRadius: "10px"}}>Skip/Next</Button>
                </div>
            </div>);
    }
}
