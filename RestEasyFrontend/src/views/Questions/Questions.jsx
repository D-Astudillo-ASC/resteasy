import React, {createRef, lazy} from 'react';
import {Col, Popover, Row, Steps} from "antd";
import Slider from "@ant-design/react-slick";
import {QUESTIONS_CURRENT_STEP} from "../../constants";

const Q0 = lazy(() => import('./Sections/Q0'));
const PersonName = lazy(() => import('./Sections/PersonName'));
const PersonDate = lazy(() => import('./Sections/PersonDate'));
const PersonRelation = lazy(() => import('./Sections/PersonRelation'));
const Q4 = lazy(() => import('./Sections/Q4'));
const Q5 = lazy(() => import('./Sections/Q5'));
const ShareMedia = lazy(() => import('./Sections/ShareMedia'));
const AddSoundtrack = lazy(() => import('./Sections/AddSoundtrack'));
const SelectTemplate = lazy(() => import('./Sections/SelectTemplate'));
const RegistryItems = lazy(() => import('./Sections/RegistryItems'));
const MemorialPreview = lazy(() => import('./Sections/MemorialPreview'));
const Payment = lazy(() => import('./Sections/Payment'));
const Share = lazy(() => import('./Sections/Share'));


const description = [
    "Enter information about memorial",
    "Tell us how you'll design your page",
    "Preview your website",
    "Complete the payment",
    "Share the memorial with your loved ones",
];

const settings = {
    dots: false,
    arrows: false,
    infinite: false,
    autoplay: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: false,
    swipe: false,
    swipeToSlide: false,
    touchMove: false,
    draggable: false,
};

const customDot = (dot, {status, index}) => (
    <Popover content={<span>{description[index]}</span>}>
        {dot}
    </Popover>
);

class Questions extends React.Component {
    constructor(props) {
        super(props);
        this.state = {curr: parseInt(localStorage.getItem(QUESTIONS_CURRENT_STEP))||0};
        this.sliderRef = createRef();
    }

    getCurrProgress() {
        if (this.state.curr <= 6)
            return 0;
        else if (7 <= this.state.curr && this.state.curr <= 9)
            return 1;
        else if (this.state.curr === 10)
            return 2;
        else if (this.state.curr === 11)
            return 3;
        else
            return 4;
    }

    componentDidMount() {
        this.sliderRef.current.slickGoTo(this.state.curr);
    }

    next = () => {
        localStorage.setItem(QUESTIONS_CURRENT_STEP, this.state.curr+1);
        this.setState({
            curr: this.state.curr+1
        });
        this.sliderRef.current.slickNext();
    };

    prev = () => {
        localStorage.setItem(QUESTIONS_CURRENT_STEP, this.state.curr-1);
        this.setState({
            curr: this.state.curr-1
        });
        this.sliderRef.current.slickPrev();
    };

    homePage(){
        window.location.href = "/";
    }

    render() {
        return (
            <div id="qnConDiv">
                <Row id="customHeader">
                    <Col span={3} style={{display: "flex", alignItems:"center", justifyContent:"center"}}>
                        <div className="flexVCenter cursor" onClick={this.homePage}>
                            <img alt="company logo" className="logo" src="/logo64.png" />
                            <div className="l">RestEasy</div>
                        </div>
                    </Col>
                    <Col span={20}>
                        <Steps id="steps" progressDot={customDot} current={this.getCurrProgress()} style={{padding: ""}}>
                            <Steps.Step title="Info"/>
                            <Steps.Step title="Design"/>
                            <Steps.Step title="Preview"/>
                            <Steps.Step title="Pay"/>
                            <Steps.Step title="Share"/>
                        </Steps>
                    </Col>
                </Row>

                <Slider {...settings} className="qnSlider" ref={this.sliderRef}>
                    <Q0 next={this.next} />
                    <PersonName next={this.next.bind(this)} prev={this.prev.bind(this)} />
                    <PersonDate next={this.next.bind(this)} prev={this.prev.bind(this)}/>
                    <PersonRelation next={this.next.bind(this)} prev={this.prev.bind(this)}/>
                    <Q4 next={this.next.bind(this)} prev={this.prev.bind(this)}/>
                    <Q5 next={this.next.bind(this)} prev={this.prev.bind(this)}/>
                    <ShareMedia next={this.next.bind(this)} prev={this.prev.bind(this)}/>

                    {/* Design Begins: 7-9*/}
                    <AddSoundtrack next={this.next.bind(this)} prev={this.prev.bind(this)}/>
                    <SelectTemplate next={this.next.bind(this)} prev={this.prev.bind(this)}/>
                    <RegistryItems next={this.next.bind(this)} prev={this.prev.bind(this)}/>

                    {/* Preview: 10*/}
                    <MemorialPreview next={this.next.bind(this)} prev={this.prev.bind(this)}/>

                    {/* Pay: 11*/}
                    <Payment next={this.next.bind(this)} prev={this.prev.bind(this)}/>

                    {/* Share: 12  */}
                    <Share />
                </Slider>
            </div>
        );
    }
}

export default Questions;
