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
            lastDraggedRow: -1,
            lastDraggedInd: -1,
            lastDroppedRow: -1,
            lastDroppedInd: -1,
        }

        this.handleChangeTemplate = this.handleChangeTemplate.bind(this)
        this.swapTemplateItems = this.swapTemplateItems.bind(this)
        this.togglePopupIsOpen = this.togglePopupIsOpen.bind(this)
        this.clearLastClicked = this.clearLastClicked.bind(this)
        this.sendClickedInfo = this.sendClickedInfo.bind(this)
        this.addRow = this.addRow.bind(this)
        this.resetTemplate = this.resetTemplate.bind(this)
        this.revertLastSavedTemplate = this.revertLastSavedTemplate.bind(this)
        this.deleteRow = this.deleteRow.bind(this)
        this.changeLastType = this.changeLastType.bind(this)
    }

    togglePopupIsOpen(){
        this.setState({popupIsOpen: !this.state.popupIsOpen})
    }

    sendClickedInfo(row, ind, typ){
        this.setState({
            lastClickedRow: row,
            lastClickedInd: ind,
            lastClickedTyp: typ,
        })
    }

    componentWillReceiveProps(nextProps){
        this.setState({templateLayout : nextProps.templateLayout})
    }

    handleChangeTemplate = async() => {
        const layout = this.state.templateLayout
        axios.post(
            REMOTE_HOST + "/templates/savetemplate2",
            {layout}
        );
    }

    swapTemplateItems = (rowi = this.state.lastDraggedRow, indi = this.state.lastDraggedInd, rowj = this.state.lastDroppedRow, indj = this.state.lastDroppedInd) => {
        console.log(this.state.templateLayout[rowi]["items"][indi])
        console.log(this.state.templateLayout[rowj]["items"][indj])
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
        console.log(this.state.templateLayout[rowi]["items"][indi])
        console.log(this.state.templateLayout[rowj]["items"][indj])
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
        axios.get(REMOTE_HOST + "/templates/gettemplate2")
            .then((response) => {
                console.log(response)
                this.setState({
                    templateLayout: response["data"]
                })
            })
            .catch((error) => {
                console.log(error)
            })
    }

    resetTemplate = () => {
        axios.get(REMOTE_HOST + "/templates/getresettemplate2")
            .then((response) => {
                console.log(response)
                this.setState({
                    templateLayout: response["data"]
                })
            })
            .catch((error) => {
                console.log(error)
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
                    zIndex={"" + (this.state.templateLayout.length - rowinfo.row)}
                    deleteRow={this.deleteRow}
                />
            )
        })

        return(
            <div>
                <a href="/template2digitalmemory">
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
                <button
                    style={{width: "20%", marginLeft: "40%", marginRight: "40%"}}
                    onClick={() => {this.resetTemplate()}}
                >
                    RESET ORIGINAL TEMPLATE
                </button>
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
                    clearLastClicked={this.clearLastClicked}
                    changeLastType={this.changeLastType}
                    swapTemplateItems={this.swapTemplateItems}
                />
            </div>
        )
    }
}
