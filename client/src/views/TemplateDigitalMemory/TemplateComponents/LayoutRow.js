import React from 'react';
import {Button, Form, Container, Row, Col} from "react-bootstrap";
import "../TemplateDigitalMemory.css"
import "../../../styles/styles.css"

export default function LayoutRow(props){
    const LayoutCols = props.rowinfo.map((item) => {
        //Converts each item in a row into the appropriate rectangle
        if(!item.exists){
            return(null)   
        }
        if(item.img == ''){
            return(
                <Col md={"" + (2 * item.width)} key={item.col} />
            )
        }
        const h = (200 + (220 * (item.height - 1)))
        if(item.img == 'nonimage'){
            return(
                <Col md={"" + (2 * item.width)} className="padded" key={item.col}>
                    <div className = "center" style={{zIndex: "-100", height: h, textAlign: "center", backgroundColor: "lightgrey"}}>
                        memories (text) shared go here
                    </div>
                </Col>
            )
        }
        console.log(item.img)
        return(
            <Col md={2 * item.width} className="padded" key={item.col}>
                <img
                    src={item.img}
                    style={{height: h, width: "100%", objectFit: "cover", position: "relative", zIndex: "100"}}
                />
            </Col>
        )
    })

    return(
        <Row className="justify-content-md-center">
            <Col md="1" />
            <Col md="10">
                <Row className="justify-content-md-center" style={{height: "220px"}}>
                    {LayoutCols}
                </Row>
            </Col>
            <Col md="1" />
        </Row>
    )
}
