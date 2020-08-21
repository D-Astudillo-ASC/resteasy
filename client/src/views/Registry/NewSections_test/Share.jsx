import React from 'react'
import { FiShare } from "react-icons/fi";
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
                            <span className="card-title">Share</span><span className="card-description"> the link to your Memory.</span>
                            <div className="card-subheader">
                                When <b style={{fontSize:24}}>contributors add memories</b>, they’ll also have the option of <b style={{fontSize:24}}>donating</b> to one or more of your registry items.
                            </div>
                        </div>
                    </Col>
                    <Col md="3" className="d-flex justify-content-center">
                        <div className="pointer">
                            <FiShare color="grey" size={195}/>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}