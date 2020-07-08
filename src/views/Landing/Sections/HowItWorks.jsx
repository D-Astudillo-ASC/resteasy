import React from 'react';
import "./HowItWorks.css"
import Step from "./HowItWorksStep"

import {
    Button,
    Form,
    Container,
    Row,
    Col,
  } from "react-bootstrap";

class HowItWorks extends React.Component {
    render() {
        return (
            <div>
                <Container>
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
                                msg2={'a digital experience'}
                                clipart = {require("../../../assets/icons/fontAwesome/layer-group-solid.svg")}
                            />
                        </Col>
                        <Col >
                        <Step 
                                step={2} 
                                msg1={'Discover'} 
                                msg2={'our products and services'}
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
                                msg2={'to collect memories from others'}
                                clipart = {require("../../../assets/icons/fontAwesome/share-alt-solid.svg")}
                            />
                        </Col>
                    </Row>
                </Container>
                
            </div>
        )
    }
}

export default HowItWorks;
