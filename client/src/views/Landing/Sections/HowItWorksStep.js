import React from "react"
import './HowItWorksStep.css'

import {
    Button,
    Form,
    Container,
    Row,
    Col,
  } from "react-bootstrap";


export default function Step(props) {
    return (
        <div>
            <Container flex="true">
                <Row className="text-center">
                    <Col>
                        <div className="box">
                            <Container>
                                <Row>
                                    <Col>
                                        <div className="circle">
                                            <div className="number">
                                                {props.step}
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                                {/* <Row>
                                    <Col>
                                        <img className="icon-img" src={props.clipart} alt="icon" width="50" height="50"/>
                                        
                                    </Col>
                                </Row> */}
                                <Row>
                                    <Col>
                                        <b>{props.msg1}</b> {props.msg2}
                                    </Col>
                                </Row>
                            </Container>
                            
                        </div>
                    </Col>
                    
                    
                </Row>
            </Container>
            
        </div>
    )
}