import React from 'react';
//import {Card, Col, Row} from "antd";
import {Button, Form, Container, Row, Col} from "react-bootstrap";
import "../../../styles/stylesWithButtons.css"

function ResourcesHeader(){
    return (
        <div className="centered-text">
            <h1 className="color1-text" style={{fontSize: "54px"}}> <b> Find </b> </h1>
            <h3 className="color2-text"> advice and resources to help </h3>
        </div>
    )
}

function ResourcesText(){
    return (
        <div className="centered-text">
            <Container fluid={true}>
                <Row className="justify-content-md-center">
                    <Col md="2" />
                    <Col md="8" style={{border: "solid", padding: "20px"}}>
                        We’ve done the research so you don’t have to.
                        Check out our vetted list of resources that can help guide you through this life altering time.
                    </Col>
                    <Col md="2" />
                </Row>
            </Container>
        </div>
    )
}

function ResourcesAction(){
    return (
        <div className="centered-text">
            <Container fluid={true}>
                <Row className="justify-content-md-center">
                    <Col md="2" />
                    <Col md="8">
                        <Row className="justify-content-md-center ">
                            <Col md="1" />
                            <Col className="center" md="4">
                                <Button className="button-links center" style={{fontSize: "30px", width: "100%", height: "100%", fontSize: "20px"}}>
                                    I lost someone I love and I don’t know what to do next
                                </Button>
                            </Col>
                            <Col md="2" />
                            <Col className="center" md="4">
                                <Button className="button-links center" style={{fontSize: "30px", width: "100%", height: "100%", fontSize: "20px"}}>
                                    Someone I know and care about has lost someone they love and I don’t know how to help
                                </Button>
                            </Col>
                            <Col md="1" />
                        </Row>
                    </Col>
                    <Col md="2" />
                </Row>
            </Container>
        </div>
    )
}

class Resources extends React.Component {
    render() {
        return (
            <div style={{backgroundColor: "var(--Color4)"}}>
                <br />
                <ResourcesHeader />
                <br />
                <ResourcesText />
                <br />
                <br />
                <ResourcesAction />
                <br />
            </div>
        )
    }
}

export default Resources;
