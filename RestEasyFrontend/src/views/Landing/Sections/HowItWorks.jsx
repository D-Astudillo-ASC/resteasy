import React from 'react';
import {Avatar, Card, Col, Row} from "antd";
import ToolTwoTone from "@ant-design/icons/lib/icons/ToolTwoTone";
import BookTwoTone from "@ant-design/icons/lib/icons/BookTwoTone";
import SecurityScanTwoTone from "@ant-design/icons/lib/icons/SecurityScanTwoTone";
import MobileTwoTone from "@ant-design/icons/lib/icons/MobileTwoTone";

class HowItWorks extends React.Component {
    render() {
        return (
            <div id="howRoot">
                <div id="title">
                    Simple steps to create a memorial
                </div>
                <Row>
                    <Col span={4} offset={2}>
                        <Card cover={<ToolTwoTone twoToneColor="#4cc247"  className="symbol"/>} className="cardHow">
                            <div className="step">
                                <Avatar style={{background:"#2a7512"}}>1</Avatar>
                            </div>
                            <div className="text">
                                <b>Customize </b> a digital experience
                            </div>
                        </Card>
                    </Col>
                    <Col span={4} offset={1}>
                        <Card cover={<SecurityScanTwoTone twoToneColor="#4cc247"  className="symbol"/>} className="cardHow">
                            <div className="step">
                                <Avatar style={{background:"#2a7512"}}>2</Avatar>
                            </div>
                            <div className="text">
                                <b>Discover </b> our products and services
                            </div>
                        </Card>
                    </Col>
                    <Col span={4} offset={1}>
                        <Card cover={<BookTwoTone twoToneColor="#4cc247"  className="symbol"/>} className="cardHow">
                            <div className="step">
                                <Avatar style={{background:"#2a7512"}}>3</Avatar>
                            </div>
                            <div className="text">
                                <b>Register </b>for what you need
                            </div>
                        </Card>
                    </Col>
                    <Col span={4} offset={1}>
                        <Card cover={<MobileTwoTone twoToneColor="#4cc247"  className="symbol"/>} className="cardHow">
                            <div className="step">
                                <Avatar style={{background:"#2a7512"}}>4</Avatar>
                            </div>
                            <div className="text">
                                <b>Share </b>to collect memories from others
                            </div>
                        </Card>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default HowItWorks;
