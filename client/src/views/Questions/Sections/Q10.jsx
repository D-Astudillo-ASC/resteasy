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
        }
    }

    onNameChange = (name) => {
        this.setState({
            name: name
        })
    };

    render() {
        const buttonStyle = {
            width: "150px",
            height: "50px",
            borderRadius: "10px",
            border: "1px solid #21231F",
            margin: "5px",
            textAlign: "center",
            backgroundColor: "#E2F4B8",
            display: "inline-block"
        }

        const smallButtonStyle = {
            borderRadius: "10px",
            margin: "5px",
            textAlign: "center",
            display: "inline-block",
            maxWidth: "150px",
            backgroundColor: "#8FC36B",
            border: "1px solid #21231F",
            wordWrap: "break-word",   
        }

        const shortButtonStyle = {
            height: "50px",
            borderRadius: "10px",
            margin: "5px",
            textAlign: "center",
            display: "inline-block",
            maxWidth: "150px",
            backgroundColor: "#8FC36B",
            border: "1px solid #21231F",
            wordWrap: "break-word",
     
        }

        const navButton = {
            borderRadius: "10px",
            margin: "10px",
            width: "100px"
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
                      <div style={{width: "100%", margin: "1px", display: "flex", justifyContent: "center", flexWrap: "wrap"}} className="step-one">
                        <button style={smallButtonStyle}>Search All</button>
                        <button style={smallButtonStyle}>Cremation Products</button>
                        <button style={smallButtonStyle}>Comfort and Memory Items</button>
                        <button style={smallButtonStyle}>Unique Resting Places</button>
                        <button style={smallButtonStyle}>Experiences</button>
                        <button style={smallButtonStyle}>Charity and Donations</button>
                        <button style={smallButtonStyle} onClick={this.props.cashfund}>Cash Funds</button>
                        <button style={smallButtonStyle}>Traditional Funeral Arrangements</button>
                        <button style={smallButtonStyle}>Sympathy Gifts</button>
                        
                    </div>
                    <br/>
                    <div style={{width: "100%", margin: "1px", display: "flex", justifyContent: "center", flexWrap: "wrap"}}>
                        <button className= "step-two" style={buttonStyle}>Overview</button>
                        <button className= "step-three" style={buttonStyle}>Manage Registry</button>
                        <button className= "step-four" style={buttonStyle}>Support Tracker</button>
                        <button className= "step-five" style={buttonStyle}>I'm not sure where <br/> to start</button>
                        <div style={{display: "inline-block", width: "150px", margin: "5px"}}></div>
                        <button className= "step-six" style={buttonStyle}>Preview</button>
                        
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
                        <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}>
                                <div md="4" className="joyride-test-2">
                                    <NextStep 
                                        imgSrc={giftBox}
                                        headerText={"Add a commemoration gift"}
                                        mainText={"to preserve their memory in a way that is as unique as they are"}
                                    />
                                </div>
                            
                                    <NextStep
                                        imgSrc={handHold}
                                        headerText={"Direct donations"}
                                        mainText={"towards causes they are about to make a difference in their name"}
                                    />
                           
                                
                             
                                    <NextStep
                                        imgSrc={cashIcon}
                                        headerText={"Create a cash fund"}
                                        mainText={"to support your needs (like paying off medical bills"}
                                    />
                             
                        </div>
                    </div>
                 
                </div>
                <br/>
                <div style={{display: "flex", justifyContent: "center"}}>
                    <Button type="primary" onClick={this.props.prev} style={navButton}>Previous</Button>
                    <Button type="primary" onClick={this.props.next} style={navButton}>Continue</Button>
                </div>
            </div>);
    }
}
