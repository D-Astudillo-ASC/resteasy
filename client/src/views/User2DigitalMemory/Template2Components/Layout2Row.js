import React from 'react';
import {Button, Form, Container, Row, Col} from "react-bootstrap";
import "../Template2DigitalMemory.css"
import "../../../styles/styles.css"
import axios from "axios";
import { REMOTE_HOST } from "../../../constants.js"

const imgStyle = {height: "100%", width: "100%", objectFit: "cover"}
const h = 600

class DisplayItem extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            img: ""
        }
    }

    //Get the image if it is an image
    componentDidMount(){
        if(this.props.item.type != "img"){
            return
        }
        console.log(this.props.item.img)
        let fileParts = this.props.item.img.split('.');
        let fileName = fileParts[0];
        let fileType = fileParts[1];
        const tokenId = JSON.parse(localStorage.getItem("user")).id
        const body = {
            id: tokenId,
            memoryName : fileName,
            userUploadBucket : "resteasy-user-uploads",
        }
        axios.post(REMOTE_HOST + "/aws/signS3_get", {body})
            .then(response => {
                this.setState({img: response.data})
            })
            .catch(error => {
                console.log("error")
            })
    }

    render(){
        if(this.props.item.type == "img"){
            return (
                <img src={this.state.img} style={imgStyle} />
            )
        }
        else if(this.props.item.type == "empty"){
            //We don't want anything here if user didn't put anything here.
            return (
                <div className="center" style={{height: "100%", width: "100%"}}>
                </div>
            )
        }
        else if(this.props.item.type == "text"){
            return (
                <div className="center" style={{height: "100%", width: "100%", backgroundColor: "#E2FCD3"}}>
                    {this.props.item.img}
                </div>
            )
        }
    }
}

export default function LayoutRow(props){
    var LayoutCols
    //Alternate orientation between rows
    if(props.rownum % 2){
        LayoutCols = (
            <Row className="justify-content-md-center" style={{height: h}}>
                <Col md="7" style={{height: h, padding: "0px"}}>
                    <div style={{height: "70%", padding: "10px"}}>
                        <DisplayItem item={props.rowinfo[1]} />
                    </div>
                    <div style={{height: "30%", padding: "10px"}}>
                        <DisplayItem item={props.rowinfo[2]} />
                    </div>
                </Col>
                <Col md="5" style={{height: h, padding: "10px"}}>
                    <DisplayItem item={props.rowinfo[0]} />
                </Col>
            </Row>
        )
    }
    else{
        LayoutCols = (
            <Row className="justify-content-md-center" style={{height: h}}>
                <Col md="5" style={{height: h, padding: "10px"}}>
                    <DisplayItem item={props.rowinfo[0]} />
                </Col>
                <Col md="7" style={{height: h, padding: "0px"}}>
                    <div style={{height: "70%", padding: "10px"}}>
                        <DisplayItem item={props.rowinfo[1]} />
                    </div>
                    <div style={{height: "30%", padding: "10px"}}>
                        <DisplayItem item={props.rowinfo[2]} />
                    </div>
                </Col>
            </Row>
        )
    }

    return(
        <Row className="justify-content-md-center">
            <Col md="2" />
            <Col md="8">
                {LayoutCols}
            </Col>
            <Col md="2" />
        </Row>
    )
}
