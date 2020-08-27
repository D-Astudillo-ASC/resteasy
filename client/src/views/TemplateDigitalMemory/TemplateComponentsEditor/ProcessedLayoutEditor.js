import React from 'react';
import {Button, Form, Container, Row, Col} from "react-bootstrap";
import axios from "axios";
import LayoutRowEditor from './LayoutRowEditor.js'
import EditorPopup from './EditorPopup.js'
import { REMOTE_HOST } from "../../../constants.js"
import "../../../styles/stylesWithButtons.css"


export default class ProcessedLayoutEditor extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            templateLayout: props.templateLayout,
            popupIsOpen: false,
            popupCanMergeSwap : false,
            lastClickedRow: -1,
            lastClickedCol: -1,
            lastClickedImg: "",
            lastClickedLarge: false,
            lastDraggedRow: -1,
            lastDraggedCol: -1,
            lastDroppedRow: -1,
            lastDroppedCol: -1,
        }

        this.handleChangeTemplate = this.handleChangeTemplate.bind(this)
        this.swapTemplateItems = this.swapTemplateItems.bind(this)
        this.mergeTemplateItems = this.mergeTemplateItems.bind(this)
        this.togglePopupIsOpen = this.togglePopupIsOpen.bind(this)
        this.clearLastClicked = this.clearLastClicked.bind(this)
        this.sendClickedInfo = this.sendClickedInfo.bind(this)
        this.addRow = this.addRow.bind(this)
        this.resetTemplate = this.resetTemplate.bind(this)
        this.revertLastSavedTemplate = this.revertLastSavedTemplate.bind(this)
        this.deleteRow = this.deleteRow.bind(this)
        this.breakAndDeleteLarge = this.breakAndDeleteLarge.bind(this)
        this.breakInsert = this.breakInsert.bind(this)
        this.changeLastImg = this.changeLastImg.bind(this)
        this.isMergeable = this.isMergeable.bind(this)
        this.promptMerge = this.promptMerge.bind(this)
    }

    togglePopupIsOpen(){
        this.setState({popupIsOpen: !this.state.popupIsOpen})
    }

    sendClickedInfo(row, col, img){
        var large = (this.state.templateLayout[row]["items"][col]["height"] > 1 || this.state.templateLayout[row]["items"][col]["width"] > 1)
        this.setState({
            lastClickedRow: row,
            lastClickedCol: col,
            lastClickedImg: img,
            lastClickedLarge: large,
            popupCanMergeSwap: false,
        })
    }

    componentWillReceiveProps(nextProps){
        this.setState({templateLayout : nextProps.templateLayout})
    }

    handleChangeTemplate = async() => {
        const layout = this.state.templateLayout
        axios.post(
            REMOTE_HOST + "/templates/savetemplate",
            {layout}
        );
    }

    swapTemplateItems = (rowi = this.state.lastDraggedRow, coli = this.state.lastDraggedCol, rowj = this.state.lastDroppedRow, colj = this.state.lastDroppedCol) => {
        const tempimg = this.state.templateLayout[rowi]["items"][coli]["img"]
        var tempTemplateLayout = this.state.templateLayout

        tempTemplateLayout[rowi]["items"][coli]["img"] = this.state.templateLayout[rowj]["items"][colj]["img"]
        tempTemplateLayout[rowj]["items"][colj]["img"] = tempimg

        this.setState({
            templateLayout: tempTemplateLayout
        })
    }

    mergeTemplateItems = () => {
        var draggedHeight = this.state.templateLayout[this.state.lastDraggedRow]["items"][this.state.lastDraggedCol]["height"]
        var draggedWidth = this.state.templateLayout[this.state.lastDraggedRow]["items"][this.state.lastDraggedCol]["width"]
        var droppedHeight = this.state.templateLayout[this.state.lastDroppedRow]["items"][this.state.lastDroppedCol]["height"]
        var droppedWidth = this.state.templateLayout[this.state.lastDroppedRow]["items"][this.state.lastDroppedCol]["width"]
        var rowStart = Math.min(this.state.lastDraggedRow, this.state.lastDroppedRow)
        var rowEnd = Math.max(this.state.lastDraggedRow + draggedHeight - 1, this.state.lastDroppedRow + droppedHeight - 1)
        var colStart = Math.min(this.state.lastDraggedCol, this.state.lastDroppedCol)
        var colEnd = Math.max(this.state.lastDraggedCol + draggedWidth - 1, this.state.lastDroppedCol + droppedWidth - 1)
        var img = (this.state.templateLayout[this.state.lastDraggedRow]["items"][this.state.lastDraggedCol]["img"] ? this.state.templateLayout[this.state.lastDraggedRow]["items"][this.state.lastDraggedCol]["img"] : this.state.templateLayout[this.state.lastDroppedRow]["items"][this.state.lastDroppedCol]["img"])
        var i
        var j
        var tempTemplateLayout = this.state.templateLayout
        for(i = rowStart; i <= rowEnd; i++){
            for(j = colStart; j <= colEnd; j++){
                tempTemplateLayout[i]["items"][j]["img"] = ""
                tempTemplateLayout[i]["items"][j]["exists"] = (i == rowStart) ? false : true
                tempTemplateLayout[i]["items"][j]["under"] = [i-rowStart, j-colStart]
            }
        }
        tempTemplateLayout[rowStart]["items"][colStart]["img"] = img
        tempTemplateLayout[rowStart]["items"][colStart]["exists"] = true
        tempTemplateLayout[rowStart]["items"][colStart]["under"] = null
        tempTemplateLayout[rowStart]["items"][colStart]["height"] = rowEnd - rowStart + 1
        tempTemplateLayout[rowStart]["items"][colStart]["width"] = colEnd - colStart + 1
        this.setState({
            templateLayout: tempTemplateLayout,
            popupCanMergeSwap: false,
            lastClickedRow: rowStart,
            lastClickedCol: colStart,
            lastClickedImg: img,
        })
    }

    clearLastClicked = () => {
        this.changeLastImg("")
    }

    addRow = () => {
        var tempTemplateLayout = this.state.templateLayout
        tempTemplateLayout.push({
            row: tempTemplateLayout.length,
            items: [
                {col: 0, width: 1, height: 1, img: "", exists: true},
                {col: 1, width: 1, height: 1, img: "", exists: true},
                {col: 2, width: 1, height: 1, img: "", exists: true},
                {col: 3, width: 1, height: 1, img: "", exists: true},
                {col: 4, width: 1, height: 1, img: "", exists: true},
                {col: 5, width: 1, height: 1, img: "", exists: true},
            ]
        })
        this.setState({
            templateLayout: tempTemplateLayout
        })
    }

    revertLastSavedTemplate = () => {
        axios.get(REMOTE_HOST + "/templates/gettemplate")
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
        axios.get(REMOTE_HOST + "/templates/getresettemplate")
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
        var i
        for(i = 0; i < 6; i++){
            if(tempTemplateLayout[rownum]["items"][i]["under"] != null){
                var rowStart = rownum - tempTemplateLayout[rownum]["items"][i]["under"][0]
                var colStart = i - tempTemplateLayout[rownum]["items"][i]["under"][1]
                this.breakAndDeleteLarge(tempTemplateLayout, rowStart, colStart)
            }
            if(tempTemplateLayout[rownum]["items"][i]["height"] != 1 || tempTemplateLayout[rownum]["items"][i]["width"] != 1){
                this.breakAndDeleteLarge(tempTemplateLayout, rownum, i)
            }
        }

        tempTemplateLayout.splice(rownum, 1)
        for(i = 0; i < tempTemplateLayout.length; i++){
            tempTemplateLayout[i]["row"] = i
        }

        this.setState({
            templateLayout: tempTemplateLayout
        })
    }

    breakAndDeleteLarge = (tempTemplateLayout, rowStart, colStart) => {
        var rowEnd = rowStart + tempTemplateLayout[rowStart]["items"][colStart]["height"]
        var colEnd = colStart + tempTemplateLayout[rowStart]["items"][colStart]["width"]
        var j
        var k
        for(j = rowStart; j < rowEnd; j++){
            for(k = colStart; k < colEnd; k++){
                tempTemplateLayout[j]["items"][k]["img"] = ""
                tempTemplateLayout[j]["items"][k]["exists"] = true
                tempTemplateLayout[j]["items"][k]["height"] = 1
                tempTemplateLayout[j]["items"][k]["width"] = 1
                tempTemplateLayout[j]["items"][k]["under"] = null
            }
        }
    }

    breakInsert = () => {
        var tempTemplateLayout = this.state.templateLayout
        this.breakAndDeleteLarge(tempTemplateLayout, this.state.lastClickedRow, this.state.lastClickedCol)
        this.setState({
            templateLayout: tempTemplateLayout,
            lastClickedLarge: false,
        })
    }

    changeLastImg(img){
        var tempTemplateLayout = this.state.templateLayout
        tempTemplateLayout[this.state.lastClickedRow]["items"][this.state.lastClickedCol]["img"] = img
        this.setState({
            templateLayout: tempTemplateLayout,
            lastClickedImg: img,
        })
    }

    isMergeable(rowi, coli, rowj, colj){
        if(this.state.templateLayout[rowi]["items"][coli]["under"] != null){
            var underRow = this.state.templateLayout[rowi]["items"][coli]["under"][0]
            var underCol = this.state.templateLayout[rowi]["items"][coli]["under"][1]
            rowi -= underRow
            coli -= underCol
        }
        if(this.state.templateLayout[rowj]["items"][colj]["under"] != null){
            var underRow = this.state.templateLayout[rowj]["items"][colj]["under"][0]
            var underCol = this.state.templateLayout[rowj]["items"][colj]["under"][1]
            rowj -= underRow
            colj -= underCol
        }
        const imgi = this.state.templateLayout[rowi]["items"][coli]["img"]
        const imgj = this.state.templateLayout[rowj]["items"][colj]["img"]
        if(imgi != "" && imgj != ""){
            return false
        }
        var rowStart = Math.min(rowi, rowj)
        var colStart = Math.min(coli, colj)
        var rowEnd = Math.max(rowi + this.state.templateLayout[rowi]["items"][coli]["height"] - 1, rowj + this.state.templateLayout[rowj]["items"][colj]["height"] - 1)
        var colEnd = Math.max(coli + this.state.templateLayout[rowi]["items"][coli]["width"] - 1, colj + this.state.templateLayout[rowj]["items"][colj]["width"] - 1)
        var r
        var c
        for(r = rowStart; r <= rowEnd; r++){
            for(c = colStart; c <= colEnd; c++){
                if(this.state.templateLayout[r]["items"][c]["img"] != ""){
                    if(!(r == rowi && c == coli) && !(r == rowj && c == colj)){
                        return false
                    }
                }
                if(this.state.templateLayout[r]["items"][c]["under"] != null){
                    const rOver = r - this.state.templateLayout[r]["items"][c]["under"][0]
                    const cOver = c - this.state.templateLayout[r]["items"][c]["under"][1]
                    if(rOver < rowStart){
                        return false
                    }
                    if(cOver < colStart){
                        return false
                    }
                }
                var rHeight = this.state.templateLayout[r]["items"][c]["height"] + r - 1
                var cWidth = this.state.templateLayout[r]["items"][c]["width"] + c - 1
                if(rHeight > rowEnd){
                    return false;
                }
                if(cWidth > colEnd){
                    return false;
                }
            }
        }
        return true
    }

    promptMerge = (dragRow, dragCol, dropRow, dropCol) => {
        this.setState({
            popupIsOpen: true,
            popupCanMergeSwap: true,
            lastDraggedRow: dragRow,
            lastDraggedCol: dragCol,
            lastDroppedRow: dropRow,
            lastDroppedCol: dropCol,
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
                    isMergeable={this.isMergeable}
                    promptMerge={this.promptMerge}
                />
            )
        })

        return(
            <div>
                <a href="/templatedigitalmemory">
                <button
                        style={{ border: "none", borderRadius: 4, paddingLeft: 15, paddingRight: 15, paddingTop:5, paddingBottom:5}}
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
                    popupCanMergeSwap={this.state.popupCanMergeSwap}
                    togglePopupIsOpen={this.togglePopupIsOpen}
                    lastClickedImg={this.state.lastClickedImg}
                    lastClickedLarge={this.state.lastClickedLarge}
                    clearLastClicked={this.clearLastClicked}
                    changeLastImg={this.changeLastImg}
                    breakInsert={this.breakInsert}
                    swapTemplateItems={this.swapTemplateItems}
                    mergeTemplateItems={this.mergeTemplateItems}
                />
            </div>
        )
    }
}
