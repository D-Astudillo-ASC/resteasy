import React, {lazy} from 'react';
import {Layout, Popover, Steps} from "antd";
import "./Questions.css"
import PageWrapper from "../../PageWrapper"

const Q0 = lazy(() => import('./Sections/Q0')); //getting started
const Q1 = lazy(() => import('./Sections/Q1')); //name
const Q2 = lazy(() => import('./Sections/Q2')); //dates
const Q3 = lazy(() => import('./Sections/Q3')); //relation
const Q4 = lazy(() => import('./Sections/Q4')); //funeral service
const Q5 = lazy(() => import('./Sections/Q5')); //describe person
const Q6 = lazy(() => import('./Sections/Q6')); //share memories
const Q7 = lazy(() => import('./Sections/Q7')); //soundtrack
const Q8 = lazy(() => import('./Sections/Q8')); //template
const Q9 = lazy(() => import('./Sections/Q9')); //registry flow
const Q10 = lazy(() => import('./Sections/Q10')); //preview
const Q11 = lazy(() => import('./Sections/Q11')); //pay (slide 14 and 15 in ppt)
const Q12 = lazy(() => import('./Sections/Q12')); //share


const description = [
    "Enter information about memorial",
    "Tell us how you'll design your page",
    "Preview what your page will look like",
    "Complete the payment",
    "Share the memorial with your loved ones",
];

const customDot = (dot, {status, index}) => (
    <Popover content={<span>{description[index]}</span>}>
        {dot}
    </Popover>
);

class Questions extends React.Component {
    constructor(props) {
        super(props);
        this.state = {curr: 0};
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
        else if (this.state.curr === 12)
            return 4;
    }

    getComponent() {
        if (this.state.curr === 0)
            return <Q0 next={this.next.bind(this)}/>;
        else if (this.state.curr === 1)
            return <Q1 next={this.next.bind(this)} prev={this.prev.bind(this)}/>;
        else if (this.state.curr === 2)
            return <Q2 next={this.next.bind(this)} prev={this.prev.bind(this)}/>;
        else if (this.state.curr === 3)
            return <Q3 next={this.next.bind(this)} prev={this.prev.bind(this)}/>;
        else if (this.state.curr === 4)
            return <Q4 next={this.next.bind(this)} prev={this.prev.bind(this)}/>;
        else if (this.state.curr === 5)
            return <Q5 next={this.next.bind(this)} prev={this.prev.bind(this)}/>;
        else if (this.state.curr === 6)
            return <Q6 next={this.next.bind(this)} prev={this.prev.bind(this)}/>;
        else if (this.state.curr === 7)
            return <Q7 next={this.next.bind(this)} prev={this.prev.bind(this)}/>;
        else if (this.state.curr === 8)
            return <Q8 next={this.next.bind(this)} prev={this.prev.bind(this)}/>;
        else if (this.state.curr === 9)
            return <Q9 next={this.next.bind(this)} prev={this.prev.bind(this)}/>;
        else if (this.state.curr === 10)
            return <Q10 next={this.next.bind(this)} prev={this.prev.bind(this)}/>;
        else if (this.state.curr === 11)
            return <Q11 next={this.next.bind(this)} prev={this.prev.bind(this)}/>;
        else if (this.state.curr === 12)
            return <Q12 />;
    }

    next() {
        const current = this.state.curr + 1;
        this.setState({
            curr: current
        });
    }

    prev() {
        const current = this.state.curr - 1;
        this.setState({
            curr: current
        });
    }

    render() {
        return (
            <PageWrapper content={
                <div>
                    <Steps progressDot={customDot} current={this.getCurrProgress()} style={{padding: "2.5% 10%"}}>
                        <Steps.Step title="Info"/>
                        <Steps.Step title="Design"/>
                        <Steps.Step title="Preview"/>
                        <Steps.Step title="Pay"/>
                        <Steps.Step title="Share"/>
                    </Steps>
                    <div style={{marginLeft: "10%", marginRight: "10%", padding:"2.5%"}}>
                        {this.getComponent()}
                    </div>
                </div>
            } />
        );
    }
}

export default Questions;
