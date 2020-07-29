import React from "react";
import {Button, List, Card, Modal,notification, Upload, Divider, Input} from "antd";
import {Form, Container, Row, Col} from "react-bootstrap";
import CashFundOption from "./CashFundOption"
import Popup from './Popup'; 

const cashFundIcon = require("../../../assets/img/createCashFund.PNG")

export default class Q10_5 extends React.Component {

    constructor(props) {
        super(props);
        this.state = { showPopup: false };
    }

    togglePopup() {
        this.setState({
            showPopup: !this.state.showPopup
        });
    }  

    render() {
        return (
            <div style={{width: "100%"}}>
                <div style={{fontSize: "2em", marginBottom: "0.5em", textAlign: "center"}}>
                    Cash Funds
                </div>
                <Container fluid={true}>
                    <Row className="justify-content-md-center">
                        <Col md="4" className="col-4 d-flex justify-content-center">
                            <CashFundOption
                                imgSrc={cashFundIcon}
                                headerText={"Create your own cash fund"}
                                mainText={"How Cash Funds Work"}
                                togglePopup = {this.togglePopup.bind(this)}
                            />

                            {this.state.showPopup ?
                                <Popup
                                    text=''
                                    closePopup={this.togglePopup.bind(this)}
                                />
                                : null
                            }
                        </Col>

                        <Col md="4" className="col-4 d-flex justify-content-center">
                            <CashFundOption
                                imgSrc={cashFundIcon}
                                headerText={"Medical Bills"}
                                mainText={"Click here to add"}
                            />
                        </Col>

                        <Col className="col-4 d-flex justify-content-center">
                            <CashFundOption
                                imgSrc={cashFundIcon}
                                headerText={"College fund for surviving child(ren)"}
                                mainText={"Click here to add"}
                            />
                        </Col>
                    </Row>

                    <Row className="justify-content-md-center">
                        <Col md="4" className="col-4 d-flex justify-content-center">
                            <CashFundOption
                                imgSrc={cashFundIcon}
                                headerText={"Funeral Expenses"}
                                mainText={"Click here to add"}
                            />
                        </Col>

                        <Col md="4" className="col-4 d-flex justify-content-center">
                            <CashFundOption
                                imgSrc={cashFundIcon}
                                headerText={"Estate Management Fees"}
                                mainText={"Click here to add"}
                            />
                        </Col>

                        <Col className="col-4 d-flex justify-content-center">
                            <CashFundOption
                                imgSrc={cashFundIcon}
                                headerText={"Loan Payoff"}
                                mainText={"Click here to add"}
                            />
                        </Col>
                    </Row>
                </Container>
                <div style={{display: "flex", justifyContent: "center"}}>
                    <Button type="primary" onClick={this.props.cashfundBack} style={{borderRadius: "10px"}}>Back</Button>
                </div>
            </div>);
    }
}

