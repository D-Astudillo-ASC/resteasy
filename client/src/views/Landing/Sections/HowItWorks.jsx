import React, {} from 'react';
import "./HowItWorks.css"
import Step from "./HowItWorksStep"
import { Redirect } from "react-router-dom";

import {
    Button,
    Form,
    Container,
    Row,
    Col,
  } from "react-bootstrap";

const rightArrow = require("../../../assets/img/right_arrow_landing.PNG")

class HowItWorks extends React.Component {
    render() {
        return (
            <div>
                <Container>
                    <a id="howItWorksSection"/>
                    <Row className="justify-content-center">
                        <Col>
                            <div className="how-it-works">How It Works</div>
                        </Col>
                        
                        
                    </Row>
                    <Row className="justify-content-center boxes">
                        <Col>
                            <Step 
                                step={1} 
                                msg1={'Customize'} 
                                msg2={'a Digital Memory by adding photos, music, and stories'}
                                clipart = {require("../../../assets/icons/fontAwesome/layer-group-solid.svg")}
                            />
                        </Col>
                        <Col >
                        <Step 
                                step={2} 
                                msg1={'Discover'} 
                                msg2={'meaningful products and services'}
                                clipart = {require("../../../assets/icons/fontAwesome/globe-solid.svg")}
                            />
                        </Col>
                        <Col >
                            <Step 
                                step={3} 
                                msg1={'Register'} 
                                msg2={'for what you need'}
                                clipart = {require("../../../assets/icons/fontAwesome/shopping-bag-solid.svg")}
                            />
                        </Col>
                        <Col>
                            <Step
                                step={4}
                                msg1={'Share'}
                                msg2={'your Digital Memory with family and friends'}
                                clipart={require("../../../assets/icons/fontAwesome/share-alt-solid.svg")}
                            />
                        </Col>
                    </Row>

                    <Row>
                        <Col md="4" />
                        <Col md="4" className="get-started">
                            <a href="/my/create" style={{textDecoration: "none"}}>
                                <div className= "text-box" style={{ display: "flex", justifyContent: "center", marginLeft: "20px" }}>
                                    <div style={{ color: "#6F9753" }}>Get Started</div>
                                    <img className="arrow-right" src={rightArrow} />
                                </div>
                            </a>
                        </Col>

                        <Col md="4" />
                    </Row>
                </Container>

            </div>
        )
    }
}

export default HowItWorks;
