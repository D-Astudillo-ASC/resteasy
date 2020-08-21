import React from 'react';
import {Button, Form, Container, Row, Col} from "react-bootstrap";
import PageWrapper from "../../PageWrapper"
import "../../styles/styles.css"
import "./WhatToDoNow.css"

export default function LoginForm() {
    return (
        <PageWrapper content={
            <div>
                <Container fluid={true} className="header-banner">
                    <Row className="justify-content-center">
                        <Col className="d-flex justify-content-center" style={{ "paddingLeft": 0, "paddingRight": 0 }}>
                            <div className="sub-header-top">
                                What To Do Now?
                            </div>
                        </Col>
                    </Row>
                </Container>
                <br />
                <Container fluid={true}>
                    <Row className="justify-content-md-center">
                        <Col md="2" />
                        <Col md="8" style={{textAlign: "justify"}}>
                            If you lost someone dear to you, please know how sorry we are, and understand what a tough time you are going through.
                            In this time of pain, we know firsthand how confusing it can be to know what to do next.
                            So we tried to make it a bit easier by outlining some simple steps below

                            <br />
                            <br />

                            <span className="emphasis-text color1-text"> Try taking a few deep breaths. </span>
                            Breathing can have a calming effect, and can help clear your mind.
                            Nothing we can say will relieve the immediate pain you’re feeling,
                            but please believe us when we say you can heal from this with time.

                            <br />
                            <br />

                            <span className="emphasis-text color1-text"> Call someone. </span>
                            Is there immediate family that should be notified, or that can help you navigate the next few days?
                            Give them a call and ask for support.

                            <br />
                            <br />

                            <span className="emphasis-text color1-text"> Think about their wishes. </span>
                            Is there something in particular they wanted for their service? It could be written in their will
                            or maybe they just mentioned it in passing.
                            Maybe it’s something the family is used to doing, or maybe it’s something religious.

                            <br />
                            <br />

                            If not, and you’re unsure of what to do, it can help to think about what your loved one was like.
                            Were they free spirits, or more set in their ways?
                            Did they love the ocean or beach? Were they big hikers or nature-lovers?
                            Were they artistic, musical, or love fashion? Were they a social butterfly, or did they like to keep to themselves?
                            Did they have a mission or charitable cause they were passionate about?

                            <br />
                            <br />

                            Remembering your loved one for who they were in life can help clear up what they might want after passing.
                            For ideas or inspiration,
                            browse our registry <a className="color1-text underline-text" href="/registry">here</a>.

                            <br />
                            <br />

                            <span className="emphasis-text color1-text"> Spread the word. </span>
                            In the time following a loss, often a therapeudic and productive thing to do is collect memories of your loved one.
                            These could be stories, photos, videos, articles, quotes –
                            anything that would help memorialize who the person was in life.
                            This is also the easiest way to spread the word about the loss,
                            and post the details about any sort of service that you choose to hold.

                            <br />
                            <br />

                            Although not your only option,
                            we think a <a className="color1-text underline-text" href="/templatedigitalmemory">Digital Memory</a> is
                            a great way to accomplish all this – that’s why we built it.
                            <Row className="justify-content-md-center">
                                <Col md="1" style={{textAlign: "right"}}> 1) </Col>
                                <Col md="11">
                                    <span className="emphasis-text color1-text"> Create </span>
                                    a page for your loved one. It will live forever unless you ask us to take it down.
                                </Col>
                            </Row>
                            <Row className="justify-content-md-center">
                                <Col md="1" style={{textAlign: "right"}}> 2) </Col>
                                <Col md="11">
                                    <span className="emphasis-text color1-text"> Personalize </span>
                                    the formatting, structure, style and content of your Memory.
                                </Col>
                            </Row>
                            <Row className="justify-content-md-center">
                                <Col md="1" style={{textAlign: "right"}}> 3) </Col>
                                <Col md="11">
                                    <span className="emphasis-text color1-text"> Share </span>
                                    a short link to spread the word.
                                </Col>
                            </Row>
                            <Row className="justify-content-md-center">
                                <Col md="1" style={{textAlign: "right"}}> 4) </Col>
                                <Col md="11">
                                    <span className="emphasis-text color1-text"> Collect tributes </span>
                                    from those who received the link. This way, you’ll have all your memories of your loved one in one place.
                                </Col>
                            </Row>

                            <br />
                            <br />

                            Learn more and create a Memory in as little as
                            five minutes <a className="color1-text underline-text" href="">here</a>.

                            <br />
                            <br />

                            <span className="emphasis-text color1-text"> Commemorate. </span>
                            Once you’ve spread the word, think about a personal way to commemorate
                            as well as what would help you get through this time of grief.
                            When people hear the news, they’ll want to call you or send you something.
                            Usually it’s flowers, but in our experience endless flowers isn’t always soothing or productive.

                            <br />
                            <br />

                            You can use our Registry feature to browse Sympathy, Commemorative, or Non-Profit items and mark those items you could actually use.
                            When you send the Memory link, after contributors share their stories,
                            they will also have the option to send or donate to those items you selected.
                            We think this is a great way to redirect sympathetic efforts to something more productive or useful
                            for the grieving and commemoration process – again, this is why we built it.

                            <br />
                            <br />

                            <span className="emphasis-text color1-text"> Some other things you’ll need. </span>
                            It’s a long process when someone passes, and the administrative work is no exception.
                            Below is a list of other things you’ll need to get done,
                            that we wish someone had told us when we went through it:
                            <br />
                            TBD

                            <br />
                            <br />
                        </Col>
                        <Col md="2" />
                    </Row>
                </Container>
            </div>
        }/>
    );
};
