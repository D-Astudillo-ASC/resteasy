import React from 'react';
import {Card, Col, Row} from "antd";

class Samples extends React.Component {
    render() {
        return (
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center"}}>
                <b style={{fontSize: "2em"}}>Need Inspiration?</b>
                <Row style={{width: "100%"}}>
                    <Col offset={4} span={4}>
                        <Card bordered={false}>
                            <img alt="img" src="img/diamond.jpg" />
                        </Card>
                    </Col>
                    <Col offset={1} span={4}>
                        <Card bordered={false}>
                            <img alt="img" src="img/diamond.jpg" />
                        </Card>
                    </Col>
                    <Col offset={1} span={4}>
                        <Card bordered={false}>
                            <img alt="img" src="img/diamond.jpg" />
                        </Card>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Samples;
