import React from 'react';
import {Col, Row, Button} from "antd";

class Banner extends React.Component {
    switchView(){
        // dont worry. the url is auth protected
        window.location.href = '/my/create';
    }

    render() {
        return (
            <div id="banner">
                <img alt="memorial registry" src="/img/background.jpg" id="bannerImg"/>
                <div id="contentCard">
                    <Col>
                        <Row className="mrow" id="text0">
                            Collect Their Memories. Fund Their Resting Place.
                        </Row>
                        <Row className="mrow" id="text1">
                            Create a digital memorial
                        </Row>
                        <Row className="mrow">
                            <Button size="large" type="primary" id="buildBtn" onClick={this.switchView}>Build Now</Button>
                        </Row>
                        <Row className="mrow">
                            <em id="text2">Just $20. One time. Forever.</em>
                        </Row>
                    </Col>
                </div>
            </div>
        )
    }
}

export default Banner;
