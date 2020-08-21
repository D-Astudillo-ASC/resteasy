import React from 'react';
import {Button, Form, Container, Row, Col} from "react-bootstrap";
import "../TemplateDigitalMemory.css"
import "../../../styles/styles.css"
import EditableComponent from "./EditableComponent.js"

export default function LayoutRowEditor(props){
    const LayoutCols = props.rowinfo.map((item) => {
        if(!item.exists){
            return(null)   
        }
        const h = (200 + (220 * (item.height - 1)))
        if(item.img == 'nonimage'){
            return(
                <Col md={"" + (2 * item.width)} className="padded" key={item.col}>
                    <EditableComponent swapTemplateItems={props.swapTemplateItems} rownum={props.rownum} colnum={item.col} img={item.img} togglePopupIsOpen={props.togglePopupIsOpen} sendClickedInfo={props.sendClickedInfo} isMergeable={props.isMergeable} promptMerge={props.promptMerge}>
                        <div
                            className = "center"
                            style={{height: h, textAlign: "center", backgroundColor: "lightgrey"}}
                        >
                            memories (text) shared go here
                        </div>
                    </EditableComponent>
                </Col>
            )
        }
        if(item.img == ''){
            return(
                <Col md={"" + (2 * item.width)} className="padded" key={item.col}>
                    <EditableComponent swapTemplateItems={props.swapTemplateItems} rownum={props.rownum} colnum={item.col} img={item.img} togglePopupIsOpen={props.togglePopupIsOpen} sendClickedInfo={props.sendClickedInfo} isMergeable={props.isMergeable} promptMerge={props.promptMerge}>
                        <div
                            className = "center"
                            style={{height: h, textAlign: "center", backgroundColor: "lightgreen"}}
                        >
                            Insert memory or media here, or drag to merge with another item
                            {item.height != 1 || item.width != 1 ? ", or click to break up this section" : ""}
                        </div>
                    </EditableComponent>
                </Col>
            )
        }
        return(
            <Col md={2 * item.width} className="padded" key={item.col}>
                <EditableComponent swapTemplateItems={props.swapTemplateItems} rownum={props.rownum} colnum={item.col} height={h} style={{zIndex: 99999}} togglePopupIsOpen={props.togglePopupIsOpen} sendClickedInfo={props.sendClickedInfo} img={item.img} isMergeable={props.isMergeable} promptMerge={props.promptMerge}>
                    <img
                        src={item.img}
                        style={{height: h, width: "100%", objectFit: "cover"}}
                    />
                </EditableComponent>
            </Col>
        )
    })

    return(
        <Row className="justify-content-md-center" style={{zIndex: props.zIndex}}>
            <Col md="1" />
            <Col md="10" style={{zIndex: props.zIndex}}>
                <Row className="justify-content-md-center" style={{zIndex: props.zIndex}}>
                    {LayoutCols}
                </Row>
            </Col>
            <Col md="1">
                <button
                    style={{marginTop: "50%"}}
                    onClick={() => {
                        props.deleteRow(props.rownum)
                    }}
                >
                    Delete row
                </button>
            </Col>
        </Row>
    )
}
