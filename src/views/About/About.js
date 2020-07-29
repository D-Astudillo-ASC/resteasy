import React from 'react';
import PageWrapper from "../../PageWrapper"
import "./About.css"
import {Button, Form, Container, Row, Col} from "react-bootstrap";

export default function LoginForm() {
    return (
        <PageWrapper content={
            <div>
                <Container fluid>
                    <Row className="d-flex justify-content-md-center">
                        <Col style={{ "paddingLeft": 0, "paddingRight": 0 }}>
                            <div className="main-container">
                                <Container>
                                    <Row>
                                        <Col>
                                            <div className="sub-header">
                                                We’ve been there.
                                            </div>
                                            <div className="header-description">
                                            When the founders of RestEasy experienced our own personal losses, we each noted serious flaws in the memorial process, starting with <span className="italic">“What do I do now?”</span>
                                            </div>
                                        </Col>
                                    </Row>
                                </Container>
                            </div>
                        </Col>
                    </Row>
                    <Row className=" d-flex justify-content-md-center">
                        <Col className="d-flex justify-content-center" style={{ "paddingLeft": 0, "paddingRight": 0 }}>
                            <div className="tagline">
                            We felt the need to collect and preserve memories. But digital obituaries felt stark and impersonal, and Facebook felt awkward and overwhelming.
                            <br/>
                            <br/>
                            We formed RestEasy with the conviction that <span className="italic bold black">there’s a better way to commemorate.</span>
                            <br/>
                            <br/>
                            We believe every person is unique and should be remembered in a unique way. 
We hope to empower those in mourning with the tools for meaningful and personalized commemoration – collect the memories that matter, discover the world of possibilities for creative commemoration, and redirect sympathy gifts toward the items that truly honor your loved one.
                            </div>
                        </Col>      
                    </Row>
                </Container>
                <Container fluid className="profiles">
                    <Row className="founder">
                        <Col md={{ span: 2, offset: 1 }} className="d-flex justify-content-center headshot" >
                            <img className="profile-img" src={require('../../assets/img/Caroline Headshot.png')} width="171" height="230"></img>
                        </Col>
                        <Col md={{ span: 8}} className="text-left d-flex description">
                            <div>
                                <div className="bold black">Caroline Capponi, CEO & Co-Founder</div>
                                <br/>
                                <div className="italic">
                                    When my fiancée died, I didn’t want to give him a traditional, morose funeral that was out of touch with his personality. I spent hours searching for a meaningful way to commemorate him. So many people loved and craved a connection with him even after his death, however, with his network scattered across the country and globe, there was no easy way to collect and share his stories.
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <Row className="founder">
                        <Col md={{ span: 2, offset: 1 }} className="d-flex justify-content-center headshot" >
                            <img className="profile-img" src={require('../../assets/img/Danilack Headshot.png')} width="171" height="230"></img>
                        </Col>
                        <Col md={{ span: 8}} className="text-left d-flex description">
                            <div>
                                <div className="bold black">Geoff Danilack, COO & Co-Founder</div>
                                <br/>
                                <div className="italic">
                                    When my brothers and I lost our father, we felt funneled into the same conveyor belt of decisions that the family before us experienced. Traditional obituaries felt impersonal, like we were filling in the blanks of something already composed. Spreading the word was hard, collecting tributes harder. Coffins were expensive. Burial plots were scarce.
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <Row className="founder">
                        <Col md={{ span: 2, offset: 1 }} className="d-flex justify-content-center headshot" >
                            <img className="profile-img" src={require('../../assets/img/kayla.png')} width="171" height="230"></img>
                        </Col>
                        <Col md={{ span: 8}} className="text-left d-flex description">
                            <div>
                                <div className="bold black">Kayla Phillips, CMO & Co-Founder</div>
                                <br/>
                                <div className="italic">
                                    When one of my friends passed away suddenly, I wished that there was more I could do to commemorate and pay my respects. I wanted to help her family in a meaningful way, but I felt uncomfortable approaching them about it during such an emotional and overwhelming time.
                                    </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
                    
                

            </div>
        }/>
    );
};
