import React from 'react';
import {Button, Form, Container, Row, Col} from "react-bootstrap";
import PageWrapper from "../../PageWrapper"

export default function LoginForm() {
    return (
        <PageWrapper content={
            <div>
                <br />
                <h1 className="emphasis-text centered-text" style={{color: "var(--Color1)"}}> Our Story </h1>
                <br />
                <Container fluid={true}>
                    <Row className="justify-content-md-center">
                        <Col md="2" />
                        <Col md="8" style={{textAlign: "justify"}}>
                            We’ve been there. When the founders of RestEasy experienced their own personal losses,
                            they each noted serious flaws in the memorial process, starting with “What do I do now?”
                            We felt funneled into the same conveyor belt of decisions that the family before us experienced.
                            Traditional obituaries felt impersonal, like we were filling in the blanks of something already composed.
                            Spreading the word was hard, collecting tributes harder. Coffins were expensive.
                            Burial plots were scarce. Flowers were pleasant yet became overwhelming and unproductive.
                            <br />
                            <br />
                            We formed RestEasy with the conviction that there’s a better way to commemorate.
                            We believe that every person is unique, and that when they pass, they deserve a commemoration as unique as they are.
                            We want to help those mourning families who come after us to take control of their commemoration process –
                            collect every memory about their life, discover the world of possibilities for creative services,
                            and redirect sympathy gifts toward that something that truly honors your loved one, because they deserve it.
                        </Col>
                        <Col md="2" />
                    </Row>
                </Container>
            </div>
        }/>
    );
};
