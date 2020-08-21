import React from "react";
import {Button, List, Card, Modal,notification, Upload, Divider, Input} from "antd";
import {Form, Container, Row, Col} from "react-bootstrap";
import CashFundOption from "./CashFundOption"
import Popup from './Popup'; 
import CashFundInfoPopup from './CashFundInfoPopup'; 

const cashFundIcon = require("../../../assets/img/createCashFund.PNG")

export default class Q10_5 extends React.Component {

    constructor(props) {
        super(props);
        this.state = { showPopup: false };
        this.state = { showInfoPopup: false };
    }

    togglePopup() {
        this.setState({
            showPopup: !this.state.showPopup
        });
    }
    
    toggleInfoPopup() {
        this.setState({
            showInfoPopup: !this.state.showInfoPopup
        });
    }

    render() {
        return (
            <div style={{width: "100%"}}>
                <div style={{fontSize: "2em", marginBottom: "0.5em", textAlign: "center"}}>
                    Cash Funds
                </div>
                <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}>
                            <CashFundOption
                                imgSrc={cashFundIcon}
                                headerText={"Create your own cash fund"}
                                mainText={"How Cash Funds Work"}
                                secondaryText={"Create a custom Cash Fund"}
                                togglePopup = {this.toggleInfoPopup.bind(this)}
                                togglePopupTwo = {this.togglePopup.bind(this)}
                            />

                            {this.state.showInfoPopup ?
                                <CashFundInfoPopup
                                    text=''
                                    closePopup={this.toggleInfoPopup.bind(this)}
                                />
                                : null
                            }
                       

                        
                            <CashFundOption
                                imgSrc={cashFundIcon}
                                headerText={"Medical Bills"}
                                mainText={"Click here to add"}
                                togglePopup = {this.togglePopup.bind(this)}
                            />
                            {this.state.showPopup ?
                                <Popup
                                    text=''
                                    closePopup={this.togglePopup.bind(this)}
                                />
                                : null
                            }
                

                
                            <CashFundOption
                                imgSrc={cashFundIcon}
                                headerText={"College fund for surviving child(ren)"}
                                mainText={"Click here to add"}
                                togglePopup = {this.togglePopup.bind(this)}
                            />
                        </div>


                     <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}>

                            <CashFundOption
                                imgSrc={cashFundIcon}
                                headerText={"Funeral Expenses"}
                                mainText={"Click here to add"}
                                togglePopup = {this.togglePopup.bind(this)}
                            />



                            <CashFundOption
                                imgSrc={cashFundIcon}
                                headerText={"Estate Management Fees"}
                                mainText={"Click here to add"}
                                togglePopup = {this.togglePopup.bind(this)}
                            />



                            <CashFundOption
                                imgSrc={cashFundIcon}
                                headerText={"Loan Payoff"}
                                mainText={"Click here to add"}
                                togglePopup = {this.togglePopup.bind(this)}
                            />
                    </div>

                <div style={{display: "flex", justifyContent: "center"}}>
                    <Button type="primary" onClick={this.props.cashfundBack} style={{borderRadius: "10px", margin: "5px"}}>Back to Registry Overview</Button>
                    <Button type="primary" onClick={this.props.cashfundNext} style={{borderRadius: "10px", margin: "5px"}}>Next Step</Button>
                </div>
            </div>);
    }
}

