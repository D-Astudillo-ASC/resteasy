import React from 'react'
import { FiMousePointer } from "react-icons/fi";
import "./Tabs.css"
import {
    Button,
    Form,
    Container,
    Row,
    Col,
    FormControl
  } from "react-bootstrap";

export default function Select() {
    return (
        <div>
            <Container>
                <Row className="discover-description">
                    <Col md="9" className="d-flex justify-content-right">
                        <div>
                            <span className="card-title">Select</span><span className="card-description"> as many options as you think would help you.</span>
                            <div className="card-subheader">
                                Keep in mind, the <b style={{fontSize:24}}>more options you select</b>, the more <b style={{fontSize:24}}>disparate your donations might be</b>. The <b style={{fontSize:24}}>fewer you select</b>, the <b style={{fontSize:24}}>more focused</b> they will be, and the <b style={{fontSize:24}}>greater your chance of fully funding an item.</b>
                            </div>
                        </div>
                    </Col>
                    <Col md="3" className="d-flex justify-content-center">
                        <div className="pointer">
                            <FiMousePointer color="grey" size={195}/>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}