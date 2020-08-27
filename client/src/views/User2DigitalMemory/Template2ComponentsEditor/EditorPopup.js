import React from 'react';
import Popup from "reactjs-popup"
import axios from "axios";
import { REMOTE_HOST } from "../../../constants.js"
import { Container, Row, Col } from 'react-bootstrap';
import 'antd/dist/antd.css';
import { Upload, Button, message, Divider, notification } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import "./EditorPopup.css"
import "../../../styles/styles.css"

function showUploads(toggleShowingUploads){
    const potentialNames = JSON.parse(localStorage.getItem("user")).digitalMemories.testMemory
    var photos = []
    for(var i = 0; i < potentialNames.length; i++){
        var ending = potentialNames[i].substr(potentialNames[i].length - 3)
        if(ending == "gif" || ending == "jpg" || ending == "png"){
            if(!photos.includes(potentialNames[i])){
                photos.push(potentialNames[i])
            }
        }
    }
    toggleShowingUploads(photos)
}

class GetPhoto extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            url: "",
        }
        
        let fileParts = props.name.split('.');
        let fileName = fileParts[0];
        let fileType = fileParts[1];
        var url
        const tokenId = JSON.parse(localStorage.getItem("user")).id
        const body = {
            id: tokenId,
            memoryName : fileName,
            userUploadBucket : "resteasy-user-uploads",
        }
        axios.post(REMOTE_HOST + "/aws/signS3_get", {body})
            .then(response => {
                this.setState({url: response.data})
            })
            .catch(error => {
                console.log("error")
            })
    }

    render(){
        return(
            <img
                key={this.props.k}
                onClick={() => this.props.selector(this.props.name)}
                src={this.state.url}
                style={{height: "100px", width: "100px", objectFit: "cover"}}
            />
        )
    }
}

class PhotoArray extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            processedPhotos: [],
        }

        for(var i = 0; i < props.photos.length; i++){
            var newProcessedPhotos = this.state.processedPhotos;
            var newPhoto = <GetPhoto key={i} selector={this.props.selector} name={props.photos[i]} />
            newProcessedPhotos.push(newPhoto)
            this.setState({processedPhotos: newProcessedPhotos})
        }
    }

    selector(p){
        this.props.selector(p)
    }

    render(){
        return(
            <div>
                {this.state.processedPhotos}
            </div>
        )
    }
}

//This is what we format inside the imported Popup class.
class CustomPopup extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            showingUploads: false,
            fileList: [],
            uploading: false,
            photos: {},
            selectedPhoto: "",
            text: this.props.lastClickedTxt,
        }

        this.toggleShowingUploads = this.toggleShowingUploads.bind(this)
        this.selectPhoto = this.selectPhoto.bind(this)
    }

    toggleShowingUploads(p){
        this.setState({
            showingUploads: !this.state.showingUploads,
            photos: p,
        })
    }

    selectPhoto(p){
        this.props.changeLastType("img", p)
        this.toggleShowingUploads([])
    }

    //when user uploads new image
    handleUpload = () => {
        console.log(this.state.fileList)
        var file = this.state.fileList[0]
        
        // console.log("new file")
        console.log(file)
        // Split the filename to get the name and type
        // !!! need to rethink logic. if file has multiple '.' then it won't parse correctly !!!
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
            console.log()
            var fileToAddDB = returnData.fileName
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
                console.log(result)
                this.setState({
                    success: true,
                    fileList: [],
                    uploading: false,});
                
                // upon successful upload, add the file data into the userImages index in mongoDB
                console.log("add to database: " + fileToAddDB)
                axios.post(REMOTE_HOST + "/aws/addImgDB", {
                    memoryName: "testMemory",
                    imgID: file
                }, config)
                .then( result => {
                    console.log(result)
                    this.props.changeLastType("img", fileToAddDB)
                    message.success('upload successfully.');
                }).catch(error => {
                    console.log("error " + JSON.stringify(error))
                    notification["error"]({
                        message: "Upload Failed",
                        description: "Your image did not upload correctly",
                        top: 90
                    });
                })
            })
            .catch(error => {
                this.setState({
                    uploading: false
                })
                notification["error"]({
                    message: "Upload Failed",
                    description: "Your image did not upload correctly",
                    top: 90
                });
                console.log("ERROR " + JSON.stringify(error));
            })
        })
        .catch(error => {
            console.log(JSON.stringify(error));
            notification["error"]({
                message: "Upload Failed",
                description: "Your image did not upload correctly",
                top: 90
            });
        })
    }

    render() {
        const { uploading, fileList } = this.state;
        const props = {
        onRemove: file => {
            console.log("removing element")
            this.setState(state => {
                const index = state.fileList.indexOf(file);
                return {
                    fileList: [],
                };
            });
        },
        beforeUpload: file => {
            this.setState(state => ({
            fileList: [file],
            }));
            return false;
        },
        fileList,
        };

        if(!this.state.showingUploads){
            return(
                <div>
                    <Container flex="true">
                        <Row>
                            <Col className="d-flex justify-content-center">
                                <h4>Upload an Image</h4>
                            </Col>
                        </Row>
                        <Row>
                            <Col className="d-flex justify-content-center">
                                <Upload 
                                    {...props}
                                    multiple={false}
                                >
                                    <Button>
                                        <UploadOutlined /> Select File
                                    </Button>
                                </Upload>
                            </Col>
                        </Row>
                        <Row>
                            <Col className="d-flex justify-content-center">
                                <Button
                                    type="primary"
                                    onClick={this.handleUpload}
                                    disabled={fileList.length === 0 || fileList.length > 1}
                                    loading={uploading}
                                    style={{ marginTop: 16 }}
                                >
                                    {uploading ? 'Uploading' : 'Start Upload'}
                                </Button>
                            </Col>
                        </Row>
                        <Divider />
                        <Row>
                            <Col className="d-flex justify-content-center">
                                <button className="button-links"
                                    style={{ border: "none", borderRadius: 0, paddingLeft: 15, paddingRight: 15, paddingTop:5, paddingBottom:5}}
                                    onClick={() => showUploads(this.toggleShowingUploads)}
                                >
                                    Use a previously uploaded image
                                </button>
                            </Col>
                        </Row>
                        <Divider />
                        <Row>
                            <Col className="d-flex justify-content-center">
                                <h4>Write a message</h4>
                            </Col>
                        </Row>
                        <Row>
                            <Col className="d-flex justify-content-center">
                                <input
                                    onChange={(event) => {this.setState({text: event.target.value})}}
                                    type="text"
                                    value={this.state.text} 
                                    style={{width: "50%", borderWidth: 1, backgroundColor:"rgba(255, 255, 255, 0.0)"}}

                                />
                                <button className="button-links"
                                    style={{ border: "none", borderRadius: 0, paddingLeft: 15, paddingRight: 15, paddingTop:5, paddingBottom:5}}
                                    onClick={() => {this.props.changeLastType("text", this.state.text)}}
                                >
                                    Use this memory
                                </button>
                            </Col>
                        </Row>
                        <Divider />
                        <Row>
                            <Col className="d-flex justify-content-center">
                                <a href="/digitalmemoryeditor">
                                    <button className="button-links"
                                        style={{borderColor: "#CC0000", borderStyle: "solid", borderRadius: 4, paddingLeft: 15, paddingRight: 15, paddingTop:5, paddingBottom:5, backgroundColor: "white", color: "#CC0000"}}
                                        onClick={() => {this.props.clearLastClicked()}}
                                    >
                                        Delete This Item
                                    </button>
                                </a>
                            </Col>
                        </Row>
                    </Container>
                </div>
            )
        }
        else{
            return(
                <div style={{height: "400px", overflow: "auto"}}>
                    <PhotoArray photos={this.state.photos} selector={this.selectPhoto} />
                    <button onClick={() => this.toggleShowingUploads([])}> Cancel </button>
                </div>
            )
        }
    }
}

export default function EditorPopup (props){
    return(
        <Popup
            open={(props.popupIsOpen)}
            onClose={() => {props.togglePopupIsOpen()}}
            style={{zIndex: "999999"}}
            contentStyle={{backgroundColor:"rgba(255, 255, 255, 0.96)", paddingBottom: 20, paddingTop: 20, borderRadius: 10}}
        >
            <CustomPopup
                clearLastClicked={props.clearLastClicked}
                changeLastType={props.changeLastType}
                lastClickedTxt={props.lastClickedTxt}
            />
        </Popup>
    )
}
