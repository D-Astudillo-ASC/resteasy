import React from 'react';
import Popup from "reactjs-popup"
import axios from "axios";
import { REMOTE_HOST } from "../../../constants.js"

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
    handleUpload = ev => {
        if(this.uploadInput.files.length == 0){
            return
        }
        var file = this.uploadInput.files[0];

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
                axios.post(REMOTE_HOST + "/aws/addImgDB", {
                    memoryName: "testMemory",
                    imgID: fileToAddDB
                }, config)
                .then( result => {
                    console.log(result)
                    this.props.changeLastType("img", fileToAddDB)
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
    }

    render() {
        if(!this.state.showingUploads){
            return(
                <div>
                    <button
                        onClick={() => {this.props.clearLastClicked()}}
                    >
                        Delete this.
                    </button>
                    <br />
                    <input ref={(ref) => { this.uploadInput = ref; }} type="file"/>
                    <button onClick={this.handleUpload}>Use this image</button>
                    <br />
                    <button onClick={() => showUploads(this.toggleShowingUploads)}>Use previously uploaded image</button>
                    <br />
                    <input
                        onChange={(event) => {this.setState({text: event.target.value})}}
                        type="text"
                        value={this.state.text} 
                        style={{width: "50%"}}
                    />
                    <button
                        onClick={() => {this.props.changeLastType("text", this.state.text)}}
                    >
                        Use this memory
                    </button>
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
        >
            <CustomPopup
                clearLastClicked={props.clearLastClicked}
                changeLastType={props.changeLastType}
                lastClickedTxt={props.lastClickedTxt}
            />
        </Popup>
    )
}
