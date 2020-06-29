import React from "react"
import {Button, Form, Container, Row, Col} from "react-bootstrap";
import "../../styles/styles.css"

export default function Footer() {
    return (
        <div style={{backgroundColor: "var(--Color5)"}}>
            <br />
            <Container fluid={true}>
                <Row className="justify-content-md-center">
                    <Col md="1" />
                    <Col md="2">
                        <img src={require('../../assets/img/logo.png')} style={{margin: "5px", maxWidth: "15%", maxHeight: "15%"}} />
                        <img src={require('../../assets/img/facebook.png')} style={{margin: "5px", maxWidth: "15%", maxHeight: "15%"}} />
                        <img src={require('../../assets/img/instagram.png')} style={{margin: "5px", maxWidth: "15%", maxHeight: "15%"}} />
                        <img src={require('../../assets/img/linkedin.png')} style={{margin: "5px", maxWidth: "15%", maxHeight: "15%"}} />
                    </Col>
                    <Col md="1" className="center">
                        <a href="/"> #resteasier </a>
                    </Col>
                    <Col md="8" />
                </Row>
                <Row className="justify-content-md-center">
                    <Col md="1" />
                    <Col md="2">
                        <a href="/"> About RestEasy </a>
                    </Col>
                    <Col md="9">
                        <a href="/"> Privacy Policy / Terms & Conditions </a>
                    </Col>
                </Row>
                <Row className="justify-content-md-center">
                    <Col md="1" />
                    <Col md="2">
                        <a href="/"> Our Story </a>
                    </Col>
                    <Col md="9">
                        <a href="/"> Press </a>
                    </Col>
                </Row>
                <Row className="justify-content-md-center">
                    <Col md="1" />
                    <Col md="10">
                        <div style={{textAlign: "right"}}> © 2020 RestEasy Technologies, Inc. </div>
                    </Col>
                    <Col md="1" />
                </Row>
            </Container>
            <br />
        </div>
    )
}
