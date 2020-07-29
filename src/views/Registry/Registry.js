import React from 'react';
import {Button, Form, Container, Row, Col} from "react-bootstrap";
import { Link } from 'react-router-dom';
import { Parallax } from 'react-parallax'
import PageWrapper from "../../PageWrapper"
import "../../styles/styles.css"
import './Registry.css';
import RegistryOption from "./RegistryOption"
import RegistryDetail from "./RegistryDetail"

const image1 = require("../../assets/img/tree_with_light_crop.jpg")
const magGlass = require("../../assets/img/magnifying_glass.PNG")
const cursorImg = require("../../assets/img/cursor_green.PNG")
const shareImg = require("../../assets/img/share_green.PNG")
const boxImg = require("../../assets/img/box_green.PNG")
const basketImg = require("../../assets/img/sympathy_basket.jpg")
const nonprofImg = require("../../assets/img/non_profit_hands.jpg")
const jewelryImg = require("../../assets/img/commemoration_jewelry.jpg")
const cashImg = require("../../assets/img/cash_pile.jpg")

export default function LoginForm() {
    return (
        <PageWrapper content={
            <div>
                <Parallax bgImage={image1} strength={1000}>
                    <div className = "image-section">
                        <Container fluid={true} className = "header-img">
                            <Row className="justify-content-md-center">
                                <Col md="0.5" />
                                <Col md="3" className= "reg-style">
                                    Registry
                                </Col>
                                <Col md="4" />
                                <Col md="4" className= "redirect-style">
                                    Redirect sympathetic gifts toward something more productive or meaningful
                                </Col>
                                <Col md="0.5" />
                            </Row>
                        </Container>
                        
                    </div>
                </Parallax>
                
                <Container fluid={true}>
                    <Row className="justify-content-md-center intro-section">
                        <Col md="2.5" />
                        <Col md="7" >
                            Commemoration is expensive.
                            <br />
                            <br />
                            We are often conflicted between wanting the best for our loved ones and the high cost of the best.
                            The RestEasy Registry feature is designed to <br></br>
                            <div style={{fontWeight: "bold"}}>eliminate that conflict.</div>
                        </Col>
                        <Col md="2.5" />
                    </Row>

                    <Row className="justify-content-md-center how-it-works">
                    <Col md="2" />
                    <Col md="3">
                        <hr className="h-line"></hr>
                    </Col>
                    <Col md="2" style={{marginTop: -5}}> How it Works: </Col>
                    <Col md="3">
                        <hr className="h-line"></hr>
                    </Col>
                    <Col md="2" />

                    </Row>


                    <Row className="justify-content-md-center intro-section">
                        <Col md="2">
                            <div>
                                <img src= {magGlass} className="mag-glass"/>
                            </div> 
                        </Col>
                        <Col md="9" className="discover-text">
                        <span className="emphasis-text"> Discover </span>
                        a world of options by browsing the Registry for what would help commemorate them. 
                        <br />
                        <br />
                        Sort by our major categories:
                        </Col>
                        <Col md="1"/>
                    </Row>

                    <Row className="justify-content-md-center">
                        <Col md="1"/>
                        <Col md="2.5">
                            <RegistryOption 
                                img = {basketImg}
                                title = {'Sympathy'}
                                text = {'What might help get you through this difficult time? Find comfort in our range of sympathy gifts.'}
                            />
                        </Col>

                        <Col md="2.5">
                            <RegistryOption 
                                img = {nonprofImg}
                                title = {'Non-Profit'}
                                text = {'Was your loved one mission-driven? Find a charity that would honor them. '}
                            />
                        </Col>

                        <Col md="2.5">
                            <RegistryOption 
                                img = {jewelryImg}
                                title = {'Commemoration'}
                                text = {'Did you know you can send ashes to the moon? Turn them into jewelry? Discover a range of creative ways to commemorate.'}
                            />
                        </Col>

                        <Col md="2.5">
                            <RegistryOption 
                                img = {cashImg}
                                title = {'Cash Fund'}
                                text = {'Don\'t see what you\'re looking for in our Registry? Create your own goal and set up a cash fund to collect donations.'}
                            />
                        </Col>

                        <Col md="1"/>
                    </Row>

                    <Row className="justify-content-md-center intro-section">
                        <Col md="1"/>
                        <Col md="9" className="select-text">
                            <br/>
                        <span className="emphasis-text"> Select </span>
                        as many options as you think would help you. 
                        <br />
                        <br />
                        <div style={{fontSize: "23px"}}>
                        Keep in mind, the more options you select,
                        the more disparate your donations might be. The fewer you select, the more focused they will be,
                        and the greater your chance of fully funding an item.
                        </div>
                        </Col>
                        <Col md="2">
                            <div>
                                <img src= {cursorImg} className="cursor"/>
                            </div> 
                        </Col>
                    </Row>

                    <Row className="justify-content-md-center intro-section">
                        <Col md="2">
                            <div>
                                <img src= {shareImg} className="share-icon"/>
                            </div> 
                        </Col>
                        <Col md="9" className="share-text">
                        <span className="emphasis-text"> Share </span>
                        the link to your Memory. 
                        <br />
                        <br />
                        <div style={{fontSize: "23px"}}>
                        When contributors add memories, they’ll also have the option of donating to one or more of your registry items. 
                        </div>
                        </Col>
                        <Col md="1"/>
                    </Row>


                    <Row className="justify-content-md-center">
                        <Col md="1"/>
                        <Col md="9" className="receive-text">
                            <br/>
                        <span className="emphasis-text"> Receive </span>
                        the registry items others have generously chosen to give or donate.
                        
                        </Col>
                        <Col md="2">
                            <div>
                                <img src= {boxImg} className="green-box"/>
                            </div> 
                        </Col>
                    </Row>

                    <Row className="justify-content-center">
                    <Col md="3" />
                    <Col md="6">
                        <RegistryDetail 
                            img = {basketImg}
                            boldText = {'Sympathy Items'}
                            text = {'will be sent to you.'}
                        />
                    </Col>
                    <Col md="3" />
                    </Row>

                    <Row className="justify-content-center">
                    <Col md="3" />
                    <Col md="6">
                        <RegistryDetail 
                            img = {nonprofImg}
                            boldText = {'Non-Profit donations'}
                            text = {' will automatically be transferred to the recipient.'}
                        />
                    </Col>
                    <Col md="3" />
                    </Row>

                    <Row >
                    <Col md="3" />
                    <Col md="6">
                        <RegistryDetail 
                            img = {jewelryImg}
                            boldText = {'For commemorative items'}
                            text = {', you must manually choose to submit the order once they are partially or fully funded.'} 
                        />
                    </Col>
                    <Col md="3" />

                    </Row>

                    <Row >
                    <Col md="3" />
                    <Col md="6">
                        <div  style={{marginLeft:"140px", width: "550px", fontSize: "20px"}}>
                        You will pay any balance that is not fully funded. Once ordered, our partner vendor will follow up
                        with details on fulfullment.
                        </div>
                    </Col>
                    <Col md="3" />

                    </Row>

                    <br/>
                    <br/>
                    <Row className="justify-content-md-center">
                        <Col md="2" />
                        <Col md="8" style={{textAlign: "center", fontSize: "20px"}}>
                            <br/>
                            <br/>
                            <strong>Other questions?</strong> Refer to our <a href="/">FAQ section.</a> 
                            <br/>
                            <br/>
                            If you don’t find the answer you’re looking for there,
                            feel free to email us at <a className="color1-text underline-text" href="mailto:resteasytechnologies@gmail.com"> resteasytechnologies@gmail.com </a>

                            <br />
                            <br />
                        </Col>
                        <Col md="2" />
                    </Row>
                    <br />
                </Container>
            </div>
        }/>
    );
};
