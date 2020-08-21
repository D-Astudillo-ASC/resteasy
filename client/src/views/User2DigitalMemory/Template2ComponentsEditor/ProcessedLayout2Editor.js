import React from 'react';
import {Button, Form, Container, Row, Col} from "react-bootstrap";
import axios from "axios";
import LayoutRowEditor from './Layout2RowEditor.js'
import EditorPopup from './EditorPopup.js'
import { REMOTE_HOST } from "../../../constants.js"

export default class ProcessedLayoutEditor extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            templateLayout: props.templateLayout,
            popupIsOpen: false,
            lastClickedRow: -1,
            lastClickedInd: -1,
            lastClickedTyp: "",
            lastClickedTxt: "",
            lastDraggedRow: -1,
            lastDraggedInd: -1,
            lastDroppedRow: -1,
            lastDroppedInd: -1,
        }

        this.handleChangeTemplate = this.handleChangeTemplate.bind(this)        //asks AWS to update layout stored in bucket. not automatic
        this.swapTemplateItems = this.swapTemplateItems.bind(this)
        this.togglePopupIsOpen = this.togglePopupIsOpen.bind(this)
        this.clearLastClicked = this.clearLastClicked.bind(this)                //deletes selected item, called from popup window
        this.sendClickedInfo = this.sendClickedInfo.bind(this)                  //updates state so popup shows correct info
        this.addRow = this.addRow.bind(this)
        this.revertLastSavedTemplate = this.revertLastSavedTemplate.bind(this)  //asks AWS for last saved layout, to restore
        this.deleteRow = this.deleteRow.bind(this)
        this.changeLastType = this.changeLastType.bind(this)                    //updates layout, change between image/text/etc
    }

    togglePopupIsOpen(){
        this.setState({popupIsOpen: !this.state.popupIsOpen})
    }

    sendClickedInfo(row, ind, typ){
        const txt = (typ == "text") ? this.state.templateLayout[row]["items"][ind]["img"] : ""
        this.setState({
            lastClickedRow: row,
            lastClickedInd: ind,
            lastClickedTyp: typ,
            lastClickedTxt: txt,
        })
    }

    componentWillReceiveProps(nextProps){
        this.setState({templateLayout : nextProps.templateLayout})
    }

    handleChangeTemplate = async() => {
        const jwt = localStorage.getItem("token");
        const config = {
            headers: {
                Authorization: `Bearer ${jwt}`,
            }
        }

        axios.post(REMOTE_HOST + "/aws/signS3_upload",{
            bucket : "resteasy-user-uploads",
            fileName : "layout2",
            fileType : "js"
        }, config)
        .then(response => {
            console.log("---------")
            console.log(response)
            var returnData = response.data
            var signedRequest = returnData.signedRequest;
            console.log("Recieved a signed request " + signedRequest);
        
            // Put the fileType in the headers for the upload
            var options = {
                    headers: {
                        'Content-Type': "js"
                    }
            };
            axios.put(signedRequest,this.state.templateLayout,options)
            .then(result => {
                this.setState({success: true});
                
                // upon successful upload, add the file data into the userImages index in mongoDB
                axios.post(REMOTE_HOST + "/aws/addImgDB", {
                    memoryName: "testMemory",
                    imgID: "layout2.js"
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
    }

    swapTemplateItems = (rowi = this.state.lastDraggedRow, indi = this.state.lastDraggedInd, rowj = this.state.lastDroppedRow, indj = this.state.lastDroppedInd) => {
        //console.log(this.state.templateLayout[rowi]["items"][indi])
        //console.log(this.state.templateLayout[rowj]["items"][indj])
        const tempItem = this.state.templateLayout[rowi]["items"][indi]
        const tempSize = this.state.templateLayout[rowj]["items"][indj]["size"]
        var tempTemplateLayout = this.state.templateLayout

        tempTemplateLayout[rowi]["items"][indi] = this.state.templateLayout[rowj]["items"][indj]
        tempTemplateLayout[rowi]["items"][indi]["index"] = indi
        tempTemplateLayout[rowi]["items"][indi]["size"] = tempItem["size"]
        tempTemplateLayout[rowj]["items"][indj] = tempItem
        tempTemplateLayout[rowj]["items"][indj]["index"] = indj
        tempTemplateLayout[rowj]["items"][indj]["size"] = tempSize

        this.setState({
            templateLayout: tempTemplateLayout
        })
        //console.log(this.state.templateLayout[rowi]["items"][indi])
        //console.log(this.state.templateLayout[rowj]["items"][indj])
    }

    clearLastClicked = () => {
        this.changeLastType("empty")
    }

    addRow = () => {
        var tempTemplateLayout = this.state.templateLayout
        tempTemplateLayout.push({
            row: tempTemplateLayout.length,
            items: [
                {ind: 0, size: "big", type: "empty"},
                {ind: 1, size: "med", type: "empty"},
                {ind: 2, size: "small", type: "empty"},
            ]
        })
        this.setState({
            templateLayout: tempTemplateLayout
        })
    }

    revertLastSavedTemplate = () => {
        const tokenId = JSON.parse(localStorage.getItem("user")).id
        const body = {
            id: tokenId,
            memoryName : "layout2",
            userUploadBucket : "resteasy-user-uploads",
        }
        axios.post(REMOTE_HOST + "/aws/signS3_get", {body})
            .then(response => {
                fetch(response.data)
                    .then(response2 => response2.text())
                    .then(data => {
                        this.setState({templateLayout: JSON.parse(data)})
                    })
            })
            .catch(error => {
                console.log("error")
            })
    }

    deleteRow = (rownum) => {
        var tempTemplateLayout = this.state.templateLayout
        tempTemplateLayout.splice(rownum, 1)

        var i
        for(i = 0; i < tempTemplateLayout.length; i++){
            tempTemplateLayout[i]["row"] = i
        }

        this.setState({
            templateLayout: tempTemplateLayout
        })
    }

    changeLastType(typ, img = null){
        var tempTemplateLayout = this.state.templateLayout
        tempTemplateLayout[this.state.lastClickedRow]["items"][this.state.lastClickedInd]["type"] = typ
        tempTemplateLayout[this.state.lastClickedRow]["items"][this.state.lastClickedInd]["img"] = img

        this.setState({
            templateLayout: tempTemplateLayout,
            lastClickedTyp: typ,
        })
    }

    render(){
        const LayoutRows = this.state.templateLayout.map((rowinfo) => {
            return(
                <LayoutRowEditor
                    rownum={rowinfo.row}
                    rowinfo={rowinfo.items}
                    key={rowinfo.row}
                    swapTemplateItems={this.swapTemplateItems}
                    togglePopupIsOpen={this.togglePopupIsOpen}
                    sendClickedInfo={this.sendClickedInfo}
                    deleteRow={this.deleteRow}
                />
            )
        })

        const DM_url = "/digitalmemory/" + localStorage.getItem("unique_url")

        return(
            <div>
                <a href={DM_url}>
                    <button
                        style={{width: "20%", marginLeft: "40%", marginRight: "40%"}}
                    >
                        View page
                    </button>
                </a>
                <br />
                <br />
                <button
                    style={{width: "20%", marginLeft: "40%", marginRight: "40%"}}
                    onClick={() => {this.handleChangeTemplate()}}
                >
                    Save current template
                </button>
                <br />
                <button
                    style={{width: "20%", marginLeft: "40%", marginRight: "40%"}}
                    onClick={() => {this.revertLastSavedTemplate()}}
                >
                    Revert last saved template
                </button>
                <br />
                <br />
                <Container fluid={true}>
                    {LayoutRows}
                </Container>
                <br />
                <button
                    style={{width: "20%", marginLeft: "40%", marginRight: "40%"}}
                    onClick={() => {this.addRow()}}
                >
                    Add row
                </button>
                <br />
                <EditorPopup
                    popupIsOpen={this.state.popupIsOpen}
                    togglePopupIsOpen={this.togglePopupIsOpen}
                    lastClickedTyp={this.state.lastClickedTyp}
                    lastClickedTxt={this.state.lastClickedTxt}
                    clearLastClicked={this.clearLastClicked}
                    changeLastType={this.changeLastType}
                    swapTemplateItems={this.swapTemplateItems}
                />
            </div>
        )
    }
}
