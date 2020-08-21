import React from 'react';
//import {Card, Col, Row} from "antd";
import {Button, Form, Container, Row, Col} from "react-bootstrap";
import Carousel from './createCarousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import "../../../styles/stylesWithButtons.css"
import "./Create.css"

function CreateHeader(){
    const headerStyle = {
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: "45px",
        lineHeight: "67px",
        textAlign: "center",
        color:" #5E624E",
        marginBottom: "30px"
    }
    return (
        <div className="centered-text" style = {headerStyle}>
            Create a Digital Memory
        </div>
    )
}

function CreateText(){
    return (
        <div className="centered-text">
            <Container fluid={true}>
             
                <Row>
                    <Col md="6" className="left-text">
                        <Row>
                            <Col md="3" />
                            <Col md="9">
                                Create and customize a Digital Memory that celebrates the life of your loved one.
                            </Col>
                            {/* <Col md="1" /> */}
                        </Row>
                        <Row style={{ margin: "20px 0px" }}>
                        <Col md="3" />
                            <Col md="9">
                                <span>&#8226;</span>
                            </Col>
                            {/* <Col md="1" /> */}
                        </Row>

                        <Row>
                        <Col md="3" />
                            <Col md="9">
                                Choose from our templates and customization tools. Add photos, videos, music, and stories to make it truly unique and meaningful.
                            </Col>
                            {/* <Col md="1" /> */}

                        </Row>
                        <Row style={{ margin: "20px 0px" }}>
                        <Col md="3" />
                            <Col md="9">
                                <span>&#8226;</span>
                            </Col>
                            {/* <Col md="1" /> */}
                        </Row>
                        <Row>
                        <Col md="3" />
                            <Col md="9">
                                Publish and share with family and friends so they can add their memories.
                            </Col>
                            {/* <Col md="1" /> */}

                        </Row>
                        <Row style={{ margin: "20px 0px" }}>
                        <Col md="3" />
                            <Col md="9">
                                <span>&#8226;</span>
                            </Col>
                            {/* <Col md="1" /> */}
                        </Row>
                        <Row>
                        <Col md="3" />
                            <Col md="9">
                                Come back at any time - it'll always be here for you.
                            </Col>
                            {/* <Col md="1" /> */}

                        </Row>

                    </Col>

                    <Col md="6">
                        <Row>
                        <Col md="1"/>
                            <Col md="9">
                                <div className="carousel">
                                    <Carousel />
                                </div>
                            </Col>
                            {/* <Col md="2"/> */}
                            <Col md="2" />
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

function CreateAction(){
    return (
        <div className="centered-text">
            <Container fluid={true}>
                <Row>
                   
                    <Col md="3" />
                    <Col md="7" style={{ display: "flex", justifyContent: "center"}}>
                        <Button className="build-button" style={{ fontSize: "25px", width: "272px", height: "96px", padding: "0px", border: "none" }}>
                            Build Your Forever Memory Now
                        </Button>
                        <div style={{ textAlign: "left", fontSize: "20px", marginLeft: "20px", padding: "30px 0px"}}>
                            Curious? check out <a href="/templatedigitalmemory">sample</a> or <a href="/template2digitalmemory">sample2</a> or <a href="/">reviews</a>.
                        </div>

                    </Col>
                    <Col md="2" />

                </Row>
            </Container>
        </div>
    )
}

class Create extends React.Component {
    render() {
        return (
            <div style={{marginTop: "-50px", paddingTop: "60px"}}>
                <div style={{backgroundColor: "var(--Color4)"}}>
                    <br />
                    <CreateHeader style={{marginTop: "-50px", paddingTop: "50px"}} />
                    <br />
                    <CreateText />
                    <br />
                    <br />
                    <CreateAction />
                    <br />

                </div>
            </div>
        )
    }
}

export default Create;
