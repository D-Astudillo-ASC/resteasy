import React from 'react'
import { GoSearch } from "react-icons/go";
import "./Tabs.css"
import {
    Button,
    Form,
    Container,
    Row,
    Col,
    FormControl
  } from "react-bootstrap";


export default function Discover() {
    return (
        <div>
            <Container fluid>
                <Row className="discover-description">
                    <Col md="9" className="d-flex justify-content-right">
                        <div>
                            <span className="card-title">Discover</span><span className="card-description"> a world of options by<br/>browsing our Registry for what would help<br/>commemorate them.</span>
                        </div>
                    </Col>
                    <Col md="3" className="d-flex justify-content-center">
                        <div className="magnify">
                            <GoSearch color="grey" size={175}/>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                    <div className="cat-search">
                        Sort by our major categories:
                    </div>
                    </Col>
                </Row>
                <Row className="catagories">
                    <Col md="3" className="d-flex justify-content-center">
                        <div>

                        </div>
                        <div className="card card1">
                            <div class="overlay">
                                <div class="text">What might help get you through this difficult time?<br/>Find comfort in our range of <span className="bold italic">sympathy gifts</span>.</div>
                            </div>
                            Sympathy
                        </div>
                    </Col>
                    <Col md="3" className="d-flex justify-content-center">
                        <div className="card card2">
                            <div class="overlay">
                                <div class="text">Was your loved one mission-driven?<br/>Find a charity that would <span className="bold italic">honor them</span>.</div>
                            </div>
                            Non-Profit
                        </div>
                    </Col>
                    <Col md="3" className="d-flex justify-content-center">
                        <div className="card card3">
                            <div class="overlay">
                                <div class="text">Did you know you can send ashes to the moon? Turn them into jewelry? Discover a range of <span className="bold italic">creative ways to commemorate</span>.</div>
                            </div>
                            Commemoration
                        </div>
                    </Col>
                    <Col md="3" className="d-flex justify-content-center">
                        <div className="card card4">
                            <div class="overlay">
                                <div class="text">Don’t see what you’re looking for in our Registry?<br/>Create your own goal and set up a cash fund to <span className="bold italic">collect donations</span>.</div>
                            </div>
                            Cash Fund
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}