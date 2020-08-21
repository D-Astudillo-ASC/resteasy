import React from "react";
import {Button, Card, Typography} from "antd";
import {Form, Container, Row, Col} from "react-bootstrap";
import NextStep from "./NextStep"

const giftBox = require("../../../assets/img/nextstep_gift.PNG")
const handHold = require("../../../assets/img/nextstep_hands.PNG")
const cashIcon = require("../../../assets/img/nextstep_cash.PNG")

export default class Q9 extends React.Component {
    state = {
        name: localStorage.getItem('first_name')
        
    };

    setImage(){
        var templateNum = localStorage.getItem('template_no');
        console.log(templateNum);
        var templateSrc = "";
        switch (templateNum) {
            case "1":
                templateSrc = require("../../../assets/img/TemplateOneSample.PNG");
                break;
            default:
                templateSrc = "/img/diamond.jpg";
        }
        return templateSrc;
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
            display: "inline-block",
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
                    <div style={{fontSize: "20px"}}>
                        Your friends and family want to support you during this difficult time. Creating a registry will enable them to direct their support 
                        in ways that are meaningful and helpful to you.
                    </div>
                    <br/>
                    <div style={{width: "100%", margin: "1px", display: "flex", justifyContent: "center",  flexWrap: "wrap"}}>
                        <button style={buttonStyle}>Overview</button>
                        <button style={buttonStyle}>Manage Registry</button>
                        <button style={buttonStyle}>Support Tracker</button>
                        <button style={buttonStyle}>I'm not sure where to start</button>
                        <div style={{display: "inline-block", width: "150px", margin: "5px"}}></div>
                        <button style={buttonStyle}>Preview</button>
                        
                    </div>
                    <br/>

                    <div style={{marginLeft: "6%", marginRight: "6%", padding:"1% 4%"}}>
                        <div>
                            <div style={{ float: "left", fontSize: "1.5em", marginBottom: "0.5em" }}>Your Next Steps</div>
                            <br /><br />
                            <div style={{ textAlign: "left" }}>
                                You can add any or all of the following to kick start your registry. Items you select will be displayed at the bottom
                                of your Digital Memory for friends and family to contribute to
                        </div>
                        </div>
                        <br />
                       
                        <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}>

                            <NextStep
                                imgSrc={giftBox}
                                headerText={"Add a commemoration gift"}
                                mainText={"to preserve their memory in a way that is as unique as they are"}
                            />



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
