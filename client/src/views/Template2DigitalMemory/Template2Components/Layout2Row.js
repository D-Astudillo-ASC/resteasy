import React from 'react';
import {Button, Form, Container, Row, Col} from "react-bootstrap";
import "../Template2DigitalMemory.css"
import "../../../styles/styles.css"

const imgStyle = {height: "100%", width: "100%", objectFit: "cover"}
const h = 600

//Display an individual rectangle item
function DisplayItem(props){
    console.log(props)
    if(props.item.type == "img"){
        return (
            <img src={props.item.img} style={imgStyle} />
        )
    }
    else if(props.item.type == "empty"){
        //This is just a placeholder
        return (
            <div className="center" style={{height: "100%", width: "100%", backgroundColor: "green"}}>
                Insert photo or memory here.
            </div>
        )
    }
    else{
        return (
            <div className="center" style={{height: "100%", width: "100%", backgroundColor: "#E2FCD3"}}>
                Creator or contributor memory.
            </div>
        )
    }
}

//Put together the three rectangles in a row
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
