import React from 'react';
import Slider from "@ant-design/react-slick";
import {Col, Row} from "antd";

const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: false
};

const data = [
    {
        img: '/img/obituary1.jpg',
        url: '/#',
    },
    {
        img: '/img/obituary2.png',
        url: '/#',
    },
    {
        img: '/img/obituary3.png',
        url: '/#',
    },
];

class Samples extends React.Component {

    render() {
        return (
            <div id="rootSamples">
                <Row id="mrow">
                    <Col offset={4} span={8}>
                        <Slider {...settings} className="slider">{
                            data.map((item, i) =>
                                <div className="cardSamples" key={i}>
                                    <a href={item.url}>
                                        <img className="imgSamples" src={item.img} alt="samples"/>
                                    </a>
                                </div>)
                        }</Slider>
                    </Col>
                    <Col span={7}>
                        <div id="title">
                            Need Inspiration?
                        </div>
                        <div id="description">
                            <ul>
                                <li>Check out these sample websites</li>
                                <li>Choose from a dozen templates</li>
                                <li>In-browser edit the webpage</li>
                            </ul>
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Samples;
