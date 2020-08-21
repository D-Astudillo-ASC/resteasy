import React from 'react';
import './Carousel.css';
import { Parallax, Background } from "react-parallax";
import "../../../styles/styles.css"

import {
    Button,
    Form,
    Container,
    Row,
    Col,
  } from "react-bootstrap";


const image1 = require("../../../assets/img/away-3668344_1920_cropped.jpg")

export default function Carousel() {

    return (
        <div>
            <Container fluid={true}>
                    <Row className="justify-content-md-center">
                        <Col style={{ "paddingLeft": 0, "paddingRight": 0 }}>
                            <div className="parallax">
                                    <Container>
                                        <Row>
                                            <Col>
                                                <div className="header">We are sorry you are here, <br/> but happy you found us!</div>
                                            </Col>
                                        </Row>
                                        <Row className="middle">
                                            <Col sm="0" md="5">
                                                <div ></div>
                                            </Col>
                                            <Col sm="12" md="7" className="line" className="vertical-line">
                                                <Row>
                                                    <Col>
                                                        Tell their story.
                                                    </Col>
                                                </Row>
                                                <Row >
                                                    <Col>
                                                        Fund their resting place.
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col>
                                                        Commemorate and celebrate life with RestEasy.
                                                    </Col>
                                                </Row>
                                            </Col>
                                        </Row>
                                        <Row className="button-row">
                                            <Col sm="4">
                                                <Button className="button-links" >Create <br/> <span className="sub-btn">A Digital Memory</span></Button>
                                            </Col>
                                            <Col sm="4">
                                                <Button className="button-links">Register <br/> <span className="sub-btn">For What You Need</span></Button>
                                            </Col >
                                            <Col sm="4">
                                                <Button className="button-links">Find <br/> <span className="sub-btn">Advice and Resources</span></Button>
                                            </Col>
                                        
                                        </Row>
                                    
                                    </Container>
                                    
                                </div>

                            <div className="section">

                            </div>
                        
                        </Col>
                    </Row>
            </Container>

        </div>
    )
}
