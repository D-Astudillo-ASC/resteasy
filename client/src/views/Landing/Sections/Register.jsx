import React from 'react';
//import {Card, Col, Row} from "antd";
import {Button, Form, Container, Row, Col} from "react-bootstrap";
import Step from "./LandingRegistry.js"
import "../../../styles/stylesWithButtons.css"
const leftImg = require("../../../assets/img/create_a_registry.PNG")

function RegisterHeader() {
    const headerStyle = {
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: "45px",
        lineHeight: "67px",
        textAlign: "center",
        color: " #5E624E",
        marginBottom: "30px"
    }
    return (

        <div className="centered-text" style={headerStyle}>
            Register for What You Need
        </div>
    )
}

function RegisterDescriptions() {
    return (
        <div className="centered-text">
            <Container fluid={true}>
                <Row>
                <Col md="4" style={{padding: "0px"}}>
                    <Step 
                        backgroundImg={leftImg}
                        header = {'Create a Registry'}
                        mainText= {'Harness the power of your community and direct support to the things that matter to you and to them.'}
                    />
                </Col>

                <Col md="4" style={{padding: "0px"}}>
                <Step 
                        backgroundImg={leftImg}
                        header = {'Find a Registry'}
                        mainText= {'Is someone you care about in mourning? Contributing to their registry guarantees that your support goes toward something that truly makes a difference.'}
                    />
                </Col>

                <Col md="4" style={{padding: "0px"}}>
                <Step 
                        backgroundImg={leftImg}
                        header = {'Browse Creative Commemoration'}
                        mainText= {'Take a look at some unique ways to commemorate your loved one.'}
                        subText={ 'Turn their ashes into diamonds or send their body to space to rest with the stars.'}
                    />
                </Col>
              
                </Row>
            </Container>
        </div>
    )
}


class Register extends React.Component {
    render() {
        return (
            <div style={{marginTop: "-50px", paddingTop: "60px"}}>
                <div>
                    <br />
                    <RegisterHeader />
                    <br />
                    <RegisterDescriptions />

                </div>
            </div>
        )
    }
}

export default Register;
