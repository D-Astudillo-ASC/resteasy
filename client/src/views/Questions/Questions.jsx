import React, {lazy} from 'react';
import {Layout, Popover, Steps} from "antd";
import "./Questions.css"
import PageWrapper from "../../PageWrapper"
import {Container, Row, Col} from "react-bootstrap";
import axios from "axios";
import { REMOTE_HOST } from "../../constants.js"

const Q0 = lazy(() => import('./Sections/Q0')); //getting started
const Q1 = lazy(() => import('./Sections/Q1')); //name
const Q2 = lazy(() => import('./Sections/Q2')); //dates
const Q3 = lazy(() => import('./Sections/Q3')); //relation
const Q4 = lazy(() => import('./Sections/Q4')); //funeral service
const Q5 = lazy(() => import('./Sections/Q5')); //describe person
const Q6 = lazy(() => import('./Sections/Q6')); //share memories
const Q7 = lazy(() => import('./Sections/Q7')); //soundtrack
const Q8 = lazy(() => import('./Sections/Q8')); //template
const Q9 = lazy(() => import('./Sections/Q9')); //registry intro
const Q10 = lazy(() => import('./Sections/Q10')); //registry tour start
const Q10_5 = lazy(() => import('./Sections/Q10_5')); //registry tour start
const Q11 = lazy(() => import('./Sections/Q11')); //cash flow
const Q12 = lazy(() => import('./Sections/Q12')); //registry URL
const Q13 = lazy(() => import('./Sections/Q13')); //pay (slide 14 and 15 in ppt)




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
        else if (7 <= this.state.curr && this.state.curr <= 8)
            return 1;
        else if (9 <= this.state.curr && this.state.curr < 11)
            return 2;
        else if (this.state.curr === 11)
            return 3;
        else if (this.state.curr === 12)
            return 4;
        else if (this.state.curr === 13)
            return 5;
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
            return <Q10 cashfund={this.cashfund.bind(this)} prev={this.prev.bind(this)} next={this.next.bind(this)}/>;
        else if (this.state.curr === 10.5)
            return <Q10_5 cashfundBack={this.cashfundBack.bind(this)} cashfundNext={this.cashfundNext.bind(this)}/>;

        else if (this.state.curr === 11)
            return <Q11 next={this.next.bind(this)} prev={this.prev.bind(this)}/>;
        else if (this.state.curr === 12)
            return <Q12 next={this.next.bind(this)} prev={this.prev.bind(this)}/>;
        else if (this.state.curr === 13)
            return <Q13 prev={this.prev.bind(this)}/>;
    }

    componentDidMount(){
        const emptyLayout = []
        const jwt = localStorage.getItem("token");
        const config = {
            headers: {
                Authorization: `Bearer ${jwt}`,
            }
        }

        axios.post(REMOTE_HOST + "/aws/signS3_upload",{
            bucket : "resteasy-user-uploads",
            fileName : "layout2",
            fileType : "js"
        }, config)
        .then(response => {
            console.log("---------")
            console.log(response)
            var returnData = response.data
            var signedRequest = returnData.signedRequest;
            console.log("Recieved a signed request " + signedRequest);
        
            // Put the fileType in the headers for the upload
            var options = {
                    headers: {
                        'Content-Type': "js"
                    }
            };
            axios.put(signedRequest,emptyLayout,options)
            .then(result => {
                this.setState({success: true});
                
                // upon successful upload, add the file data into the userImages index in mongoDB
                axios.post(REMOTE_HOST + "/aws/addImgDB", {
                    memoryName: "testMemory",
                    imgID: "layout2.js"
                }, config)
                .then( result => {
                    console.log(result)
                }).catch(error => {
                    console.log("error " + JSON.stringify(error))
                })
            })
            .catch(error => {
                console.log("ERROR " + JSON.stringify(error));
            })
        })
        .catch(error => {
            console.log(JSON.stringify(error));
        })
    }
    next() {
        console.log(this.state.curr)
        const current = this.state.curr + 1;
        this.setState({
            curr: current
        });

        console.log(this.state.curr);
    }

    prev() {
        const current = this.state.curr - 1;
        this.setState({
            curr: current
        });
    }

    cashfund() {
        const current = this.state.curr + 0.5;
        this.setState({
            curr: current
        });

        console.log(this.state.curr);
    }

    cashfundBack() {
        const current = this.state.curr - 0.5;
        this.setState({
            curr: current
        });
    }

    cashfundNext() {
        const current = this.state.curr + 0.5;
        this.setState({
            curr: current
        });
    }

    

    render() {

        const headerSpace = (this.state.curr === 0 ? <Container fluid={true} style={{height: "30px"}}></Container>: <Container fluid={true} style={{height: "5px"}}></Container>)
        return (
            <PageWrapper content={
                <div>
                    {headerSpace}
                    {this.state.curr === 0 ? (
                        <div style={{textAlign: "center", marginTop: "80px"}}>
                            <h2 className="create-text" style = {{fontWeight: "700"}}>We're sorry you're here, but happy you found us</h2>
                            <br/>
                            <h4 className="create-text" style={{fontWeight: "400"}}> You've taken the first step to capture and preserve your favorite memories</h4>
                        </div>
                    ) : (
                            <div style={{height: "50px"}}></div>
                        )}

                    {/* <Container fluid={true} className="header-banner"></Container> */}
                    <Steps progressDot={customDot} current={this.getCurrProgress()} style={{ padding: "2.5% 5%", position: "relative" }}>
                        <Steps.Step title="Info" />
                        <Steps.Step title="Design" />
                        <Steps.Step title="Register" />
                        <Steps.Step title="Preview" />
                        <Steps.Step title="Pay" />
                        <Steps.Step title="Share" />
                    </Steps>

                    <div style={{marginLeft: "1%", marginRight: "1%", padding:"1% 4%"}}>
                        {this.getComponent()}
                    </div>
                </div>
            } />
        );
    }
}

export default Questions;
