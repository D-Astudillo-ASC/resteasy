import React from 'react';
import './Banner.css';
import { Parallax, Background } from "react-parallax";

import {
    Button,
    Form,
    Container,
    Row,
    Col,
  } from "react-bootstrap";


export default class Carousel extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            createScroll: this.props.createScroll,
            registerScroll: this.props.registerScroll,
            resourcesScroll: this.props.resourcesScroll,
        }
    }

    render(){
    return (
        <div>
            <Container fluid={true}>
                    <Row className="justify-content-md-center">
                        <Col style={{ "paddingLeft": 0, "paddingRight": 0 }}>
                            <div className="image-section">
                                <Container>
                                    <Row>
                                        <Col>
                                            <div className="headerText">We are sorry you are here, <br/> but happy you found us!</div>
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
                                        <Col sm="4" className="text-center">
                                            <Button className="header-btn" onClick={this.state.createScroll}>CREATE<br/> <span className="sub-btn">A Digital Memory</span></Button>
                                        </Col>
                                        <Col sm="4" className="text-center">
                                            <Button className="header-btn" onClick={this.state.registerScroll}>REGISTER<br/> <span className="sub-btn">For What You Need</span></Button>
                                        </Col >
                                        <Col sm="4" className="text-center">
                                            <Button className="header-btn" onClick={this.state.resourcesScroll}>FIND<br/> <span className="sub-btn">Advice and Resources</span></Button>
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
}
