import React from "react";
import {Button, Card, Typography} from "antd";
import {Form, Container, Row, Col} from "react-bootstrap";
import ReactJoyride from 'react-joyride';
import NextStep from "./NextStep";
import steps from "./tourSteps";
import { InfoCircle } from 'react-bootstrap-icons';

const giftBox = require("../../../assets/img/nextstep_gift.PNG")
const handHold = require("../../../assets/img/nextstep_hands.PNG")
const cashIcon = require("../../../assets/img/nextstep_cash.PNG")

export default class Q10 extends React.Component {
    constructor() {
        super();
        this.state = {
            name: localStorage.getItem('first_name'),
            // steps: [
            //     {
            //         target: ".joyride-test",
            //         content: "This is your message to your user"
            //     },
            //     {
            //         target: ".joyride-test-2",
            //         content: "This is your second message to your user"
            //     }
            // ]
        }
    }
    // state = {
    //     name: localStorage.getItem('first_name')
        
    // };

    onNameChange = (name) => {
        this.setState({
            name: name
        })
    };

    render() {
        // console.log(this.state.steps.content);
        // console.log(this.state.name);
        // console.log(this.state.steps);
        const buttonStyle = {
            width: "150px",
            height: "50px",
            borderRadius: "10px",
            margin: "5px",
            textAlign: "center",
            backgroundColor: "#E2F4B8",
            display: "inline-block"
        }

        const smallButtonStyle = {
            height: "50px",
            borderRadius: "10px",
            margin: "5px",
            textAlign: "center",
            display: "inline-block",
            maxWidth: "150px",
            backgroundColor: "#8FC36B",
            border: "1px solid #21231F",
            //box-sizing: border-box;       
        }

        return (
            <div style={{width: "100%", textAlign: "center", marginTop: "0px"}}>
                <div style={{fontSize: "1.5em", marginBottom: "0.5em", fontWeight: "bold"}}>
                    Registry Overview
                </div>



                <div>
                    <ReactJoyride
                        steps={steps}
                        run={this.state.run}
                        continuous
                        showProgress
                        showSkipButton
                        styles={{
                            options: {
                                arrowColor: "rgba(60, 102, 45, 0.75)",
                                backgroundColor: "rgba(60, 102, 45, 0.75)",
                                overlayColor: "rgba(196, 196, 196, 0.85)",
                                textColor: "#FFFFFF",
                                primaryColor: "#B4E740"
                            }
                        }}
                    />
                      <div style={{width: "100%", margin: "1px", justifyContent: "center"}} className="step-one">
                        <Button style={smallButtonStyle}>Search All</Button>
                        <Button style={smallButtonStyle}>Cremation Products</Button>
                        <Button style={smallButtonStyle}>Comfort and Memory Items</Button>
                        <Button style={smallButtonStyle}>Unique Resting Places</Button>
                        <Button style={smallButtonStyle}>Experiences</Button>
                        <Button style={smallButtonStyle}>Charity and Donations</Button>
                        <Button style={smallButtonStyle}>Cash Funds</Button>
                        <Button style={smallButtonStyle}>Traditional Funeral Arrangements</Button>
                        <Button style={smallButtonStyle}>Sympathy Gifts</Button>
                        
                    </div>
                    <br/>
                    <div style={{width: "100%", margin: "1px", justifyContent: "center"}}>
                        <Button className= "step-two" style={buttonStyle}>Overview</Button>
                        <Button className= "step-three" style={buttonStyle}>Manage Registry</Button>
                        <Button className= "step-four" style={buttonStyle}>Support Tracker</Button>
                        <Button className= "step-five" style={buttonStyle}>I'm not sure where <br/> to start</Button>
                        <div style={{display: "inline-block", width: "150px", margin: "5px"}}></div>
                        <Button className= "step-six" style={buttonStyle}>Preview</Button>
                        
                    </div>
                    <br/>

                    <div style={{ marginLeft: "6%", marginRight: "6%", padding: "1% 4%" }}>
                        <div>
                            <div style={{ float: "left", fontSize: "1.5em", marginBottom: "0.5em" }}>Your Next Steps </div>
                            <br /><br />
                            <div style={{ textAlign: "left" }}>
                                You can add any or all of the following to kick start your registry. Items you select will be displayed at the bottom
                                of your Digital Memory for friends and family to contribute to
                        </div>
                        </div>
                        <br />
                        <Container fluid={true}>
                            <Row className="justify-content-md-center" style={{ marginLeft: "30px" }}>
                                <Col md="4" className="joyride-test-2">
                                    <NextStep
                                        imgSrc={giftBox}
                                        headerText={"Add a commemoration gift"}
                                        mainText={"to preserve their memory in a way that is as unique as they are"}
                                    />
                                </Col>

                                <Col md="4" >
                                    <NextStep
                                        imgSrc={handHold}
                                        headerText={"Direct donations"}
                                        mainText={"towards causes they are about to make a difference in their name"}
                                    />
                                </Col>

                                <Col md="4" >
                                    <NextStep
                                        imgSrc={cashIcon}
                                        headerText={"Create a cash fund"}
                                        mainText={"to support your needs (like paying off medical bills"}
                                    />
                                </Col>
                            </Row>
                        </Container>
                    </div>
                 
                </div>
                <br/>
                <div style={{display: "flex", justifyContent: "center"}}>
                    <Button type="primary" onClick={this.props.prev} style={{marginRight: "10px", borderRadius: "10px"}}>Previous</Button>
                    <Button type="primary" onClick={this.props.cashfund} style={{marginLeft: "10px", borderRadius: "10px"}}>CashFund</Button>
                    <Button type="primary" onClick={this.props.next} style={{marginLeft: "10px", borderRadius: "10px"}}>Continue</Button>
                </div>
            </div>);
    }
}
