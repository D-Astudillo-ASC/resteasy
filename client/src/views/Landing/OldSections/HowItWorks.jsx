import React from 'react';
import {Card, Col, Row} from "antd";

class HowItWorks extends React.Component {
    render() {
        return (
            <Row>
                <Col offset={4} span={4}>
                    <Card cover={<img alt="img" src="img/diamond.jpg"/>} bordered={false}>
                        <b>1. CUSTOMIZE</b>
                        <p>a digital experience</p>
                    </Card>
                </Col>
                <Col span={4}>
                    <Card cover={<img alt="img" src="img/diamond.jpg"/>} bordered={false}>
                        <b>2. DISCOVER</b>
                        <p>commemorative products and services</p>
                    </Card>
                </Col>
                <Col span={4}>
                    <Card cover={<img alt="img" src="img/diamond.jpg"/>} bordered={false}>
                        <b>3. REGISTER</b>
                        <p>for what you need</p>
                    </Card>
                </Col>
                <Col span={4}>
                    <Card cover={<img alt="img" src="img/diamond.jpg"/>} bordered={false}>
                        <b>4. SHARE</b>
                        <p>to collect memories from family and friends</p>
                    </Card>
                </Col>
            </Row>
        )
    }
}

export default HowItWorks;
