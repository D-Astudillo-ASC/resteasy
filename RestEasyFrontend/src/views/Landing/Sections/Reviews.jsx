import React from 'react';
import {Button, Card} from "antd";
import Slider from "@ant-design/react-slick";
import StarFilled from "@ant-design/icons/lib/icons/StarFilled";

const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    variableWidth: true
};

const data = [
    {
        name: 'Bruce',
        stars: 5,
        description_short: 'The best',
        description_long: 'This website takes the burden out of planning a memorial'
    },
    {
        name: 'Ellen',
        stars: 4,
        description_short: '100% recommended',
        description_long: 'Setting up a free website has never been easy'
    },
    {
        name: 'John',
        stars: 5,
        description_short: 'Great!',
        description_long: 'I had no idea how to begin/plan a memorial. Made easy!'
    },
    {
        name: 'Smith',
        stars: 3,
        description_short: 'Easy and simple',
        description_long: 'This site is good for beginners'
    }
];

class Reviews extends React.Component {

    getStars = (n) => {
        let stars = [];
        for(let i = 0; i<n; i++)
            stars.push(<StarFilled key={i} style={{color: "yellow"}}/>);

        return (<div>{stars}</div>);
    };

    render() {
        return (
            <div id="reviewRoot">
                <div id="title">Hear from our customers</div>
                <Slider {...settings} className="slider">
                    {data.map((item, i) =>
                        <Card className="cardSamples" hoverable key={i} title={
                            <div className="flexVCenter">
                                <Button className="mr-1" type="primary" shape="circle">{item.name[0]}</Button>
                                <div>
                                    {item.name}
                                    {this.getStars(item.stars)}
                                </div>
                            </div>
                        }>
                            <h4>
                                {item.description_short}
                            </h4>
                            <p>
                                {item.description_long}
                            </p>

                        </Card>
                    )}
                </Slider>
            </div>
        )
    }
}

export default Reviews;
