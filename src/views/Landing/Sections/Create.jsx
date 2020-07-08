import React from 'react';
//import {Card, Col, Row} from "antd";
import {Button, Form, Container, Row, Col} from "react-bootstrap";
import "../../../styles/stylesWithButtons.css"

function CreateHeader(){
    return (
        <div className="centered-text">
            <h1 className="color1-text" style={{fontSize: "54px"}}> <b> Create </b> </h1>
            <h3 className="color2-text"> a Forever Memory </h3>
        </div>
    )
}

function CreateText(){
    return (
        <div className="centered-text">
            <Container fluid={true}>
                <Row className="justify-content-md-center">
                    <Col md="2" />
                    <Col md="8">
                        Traditionally, condolence messages are captured in a Funeral Guest Book at a funeral service.
                        The book can only be written in and only by those who physically attend a funeral.
                        It can only be read by the individuals who have the book.
                    </Col>
                    <Col md="2" />
                </Row>
                <br />
                <Row className="justify-content-md-center centeredText">
                    <Col md="2" />
                    <Col md="8">
                        A Forever Memory allows everyone who loved your person to contribute not only stories and messages,
                        but photos, live videos, and music, and it can be viewed at any time
                        (birthdays, anniversaries, any Tuesday when you really miss them) by all who love them.
                    </Col>
                    <Col md="2" />
                </Row>
                <br />
                <Row className="justify-content-md-center centeredText">
                    <Col md="2" />
                    <Col md="8">
                        Sharing your Forever Memory also allows you to move outside the confines of a traditional obituary when announcing a death.
                        You can share more than just facts about their life and death –
                        it allows you to capture more of the essence of who they are and share a more personal, true story.
                    </Col>
                    <Col md="2" />
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
                    <Col md="2" />
                    <Col md="4">
                        <div style={{fontSize: "30px", width: "100%", height: "100%", padding: "60px", border: "solid"}}>
                            One time charge.
                            <br />
                            <br />
                            Remember forever.
                        </div>
                    </Col>
                    <Col md="4">
                        <Button className="button-links center" style={{fontSize: "25px", width: "100%", height: "100%", padding: "0px", border: "none"}}>
                            {'\u2192'} Build Your Forever Memory Now
                        </Button>
                    </Col>
                    <Col md="2" />
                </Row>
            </Container>
        </div>
    )
}

function CreateExtras(){
    return (
        <div className="centered-text">
            See the difference for yourself –
            check out <a href="/">samples</a> or <a href="/">reviews</a>.
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
                    <CreateAction />
                    <br />
                    <CreateExtras />
                    <br />
                </div>
            </div>
        )
    }
}

export default Create;
