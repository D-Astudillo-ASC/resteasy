import React from 'react'

import "./CreateRegistrySection.css"
import {
    Button,
    Form,
    Container,
    Row,
    Col,
  } from "react-bootstrap";

export default function CreateRegistrySection(){
    return(
        <div>
            <Container fluid={true}>
                <Row className="register-row">
                    <Col md="12">
                        <div className="register-header-text">
                            Register For What You Need
                        </div>
                    </Col>
                </Row>            
                <Row className="d-flex justify-content-center registry-options-row">
                    <Col className="registry-card" md="3">
                        <Row>
                            <Col md="12" className="d-flex justify-content-center">
                                <div>
                                    <h3>
                                        Create A Registry
                                    </h3>
                                </div>
                            </Col>
                        </Row>
                        <Row className="registry-descriptions">
                            <Col>
                                <div>
                                    Harness the power of your community and direct support to the things that matter to you and to them.
                                </div>
                            </Col>
                        </Row>
                    </Col>
                    <Col className="registry-card" md="3">
                        <Row>
                            <Col md="12" className="d-flex justify-content-center">
                                <div>
                                    <h3>
                                        Find A Registry
                                    </h3>
                                </div>
                            </Col>
                        </Row>
                        <Row className="registry-descriptions">
                            <Col>
                                <div>
                                    Is someone you care about in mourning? Contributing to their registry guarantees that your support goes toward something that truly makes a difference.
                                </div>
                            </Col>
                        </Row>
                    </Col>
                    <Col className="registry-card" md="3">
                        <Row >
                            <Col md="12" className="d-flex justify-content-center">
                                <div>
                                    <h3>
                                        Browse Creative Commemoration
                                    </h3>
                                </div>
                            </Col>
                        </Row>
                        <Row className="registry-descriptions">
                            <Col>
                                <div>
                                    Take a look at some unique ways to commemorate your loved one.<br/><i>Turn their ashes into diamonds or send their body to space to rest with the stars.</i>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}