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
        }
    }

    handleOnClick = (event) => {
        //.current is verification that your element has rendered
        if(this.props.howItWorksRef.current){
            this.props.howItWorksRef.current.scrollIntoView({ 
               behavior: "smooth", 
               block: "nearest"
            })
        }
    }

    render() {
        return (
            <div className="image-section">
                <Container fluid={true}>
                        <Row className="justify-content-md-center">
                                {/* <Col className="tree-col">
                                    <div>
                                        <img className="tree" src={require("../../../assets/img/1x/tree-white.png")}></img>
                                    </div>
                                </Col> */}
                                <Col className="header-section">
                                    <Row>
                                        <Col>
                                            <div className="header-text">
                                                We are sorry you are here,<br/>but happy you found us
                                            </div>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <div className="header-text-sub">
                                            Tell their story.<br/>
                                            Fund their resting place.<br/>
                                            Celebrate and Commemorate their life.
                                            </div>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <div className="btn-holder">
                                                <Button onClick={this.handleOnClick} className="button-learn-more">Learn More</Button>
                                            </div>
                                        </Col>
                                    </Row>
                                </Col>
                        </Row>
                </Container>
                
            </div>
        )
    }
}
