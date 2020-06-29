import React from 'react';
//import {Card, Col, Row} from "antd";
import {Button, Form, Container, Row, Col} from "react-bootstrap";
import "../../../styles/stylesWithButtons.css"

function RegisterHeader(){
    return (
        <div className="centered-text">
            <h1 className="color1-text" style={{fontSize: "54px"}}> <b> Register </b> </h1>
            <h3 className="color2-text"> for what you need </h3>
        </div>
    )
}

function RegisterDescriptions(){
    return (
        <div className="centered-text">
            <Container fluid={true}>
                <Row className="justify-content-md-center">
                    <Col md="2" />
                    <Col md="8">
                        <Row className="justify-content-md-center">
                            <Col md="3" className="center" style={{border: "solid"}}>
                                <div style={{paddingTop: "20px", paddingBottom: "20px"}}>
                                    Harness the power of your community and direct support to the things that matter to you and to them.
                                </div>
                            </Col>
                            <Col md="1" />
                            <Col md="3" className="center" style={{border: "solid"}}>
                                <div style={{paddingTop: "20px", paddingBottom: "20px"}}>
                                    Is someone you know going through a hard time?
                                    Contributing to their registry is one of the best things you can do in their time of need.
                                    It guarantees your support goes toward something that truly makes a difference.
                                </div>
                            </Col>
                            <Col md="1" />
                            <Col md="3" className="center" style={{border: "solid"}}>
                                <div style={{paddingTop: "20px", paddingBottom: "20px"}}>
                                    Want to see some of the unique and interesting options to commemorate your loved one?
                                    <br />
                                    <br />
                                    <div style={{lineHeight: "75%"}}>
                                    <small>
                                        Hint: You can send their body into space to rest with the stars,
                                        or have their ashes turned into jewelry so they are with you always
                                    </small>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                    <Col md="2" />
                </Row>
            </Container>
        </div>
    )
}

function RegisterButtons(){
    return (
        <div className="centered-text">
            <Container fluid={true}>
                <Row className="justify-content-md-center">
                    <Col md="2" />
                    <Col md="8">
                        <Row className="justify-content-md-center" >
                            <Col md="3" style={{padding: "0px"}}>
                                <Button className="button-links center" style={{fontSize: "30px", width: "100%", height: "100%"}}>
                                    Create a Registry
                                </Button>
                            </Col>
                            <Col md="1" />
                            <Col md="3" style={{padding: "0px"}}>
                                <Button className="button-links center" style={{fontSize: "30px", width: "100%", height: "100%"}}>
                                    Find a Registry
                                </Button>
                            </Col>
                            <Col md="1" />
                            <Col md="3" style={{padding: "0px"}}>
                                <Button className="button-links center" style={{fontSize: "30px", width: "100%", height: "100%"}}>
                                    Browse Creative Commemoration
                                </Button>
                            </Col>
                        </Row>
                    </Col>
                    <Col md="2" />
                </Row>
            </Container>
        </div>
    )
}

class Register extends React.Component {
    render() {
        return (
            <div>
                <br />
                <RegisterHeader />
                <br />
                <RegisterDescriptions />
                <br />
                <RegisterButtons />
                <br />
            </div>
        )
    }
}

export default Register;
