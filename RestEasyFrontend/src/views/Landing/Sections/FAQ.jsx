import React from 'react';
import {Col, Row} from "antd";

class FAQ extends React.Component {
    render() {
        return (
            <div id="rootFAQ">
                <div id="title">
                    Frequently Asked Questions
                </div>
                <Row className="mrow">
                    <Col offset={2} span={9}>
                        <div className="question">
                            What is RestEasy?
                        </div>
                        <div className="answer">
                            RestEasy is a memorial registry service.
                            We know how it feels when we lose someone.
                            In such times we make things a little easy.
                            With our registry, you can plan a memorial -
                            design a page, invite family and friends,
                            share memories, ask for help and much more.
                        </div>
                    </Col>
                    <Col offset={2} span={9}>
                        <div className="question">
                            How much does it cost?
                        </div>
                        <div className="answer">
                            RestEasy provides a platform that helps you design
                            a comprehensive memorial/obituary website - all for one
                            time registration fee of $20. Like any online retailer,
                            we take a small surcharge on payments of the products
                            included in the memorial.
                        </div>
                    </Col>
                </Row>
                <Row className="mrow">
                    <Col offset={2} span={9}>
                        <div className="question">
                            How does it work?
                        </div>
                        <div className="answer">
                            We ask you a few questions. Using the details, we
                            suggest some memorial pages which you can edit or
                            use directly. You can add products from our
                            registry or create funds for planning the memorial.
                            You can share the page with family & friends to
                            collect memories.
                        </div>
                    </Col>
                    <Col offset={2} span={9}>
                        <div className="question">
                            How to get started?
                        </div>
                        <div className="answer">
                            You can setup a website in no time.
                            First register on the website.
                            Head to the section to create a memorial.
                            Answer the questions, select from or
                            design the page, add items from registry and
                            let us handle the rest.
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default FAQ;
