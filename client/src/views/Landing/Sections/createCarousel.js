import React from 'react';
import { Carousel } from 'react-responsive-carousel';
const image1 = require("../../../assets/img/non_profit_hands.jpg");
const image2 = require("../../../assets/img/coffee-5076225.jpg"); 
const image3 = require("../../../assets/img/sympathy_basket.jpg");
const image4 = require("../../../assets/img/cash_pile.jpg");

export default () => (
    <Carousel autoPlay >
        <div>
            <img alt="" src={image1} />
            {/* <p className="legend">Legend 1</p> */}
        </div>
        <div>
            <img alt="" src={image2}/>
            {/* <p className="legend">Legend 2</p> */}
        </div>
        <div>
            <img alt="" src={image3}/>
            {/* <p className="legend">Legend 3</p> */}
        </div>
        <div>
            <img alt="" src={image4}/>
            {/* <p className="legend">Legend 4</p> */}
        </div>
    </Carousel>
);
