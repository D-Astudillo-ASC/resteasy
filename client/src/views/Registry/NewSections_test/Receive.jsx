import React, {useState} from 'react'
import { FiPackage } from "react-icons/fi";
import "./Tabs.css"
import {
    Button,
    Form,
    Container,
    Row,
    Col,
    FormControl
  } from "react-bootstrap";
import { Tabs, Radio } from 'antd';
const { TabPane } = Tabs;

export default function Select() {
    return (
        <div>
            <Container>
                <Row className="discover-description">
                    <Col md="9" className="d-flex justify-content-right">
                        <div>
                            <span className="card-title">Receive</span><span className="card-description"> the registry items others have generously chosen to give or donate.</span>
                        </div>
                    </Col>
                    <Col md="3" className="d-flex justify-content-center">
                        <div className="pointer">
                            <FiPackage color="grey" size={195}/>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                    <div className="fullfill">
                        Select a category for fullfillment details:
                    </div>
                    </Col>
                </Row>
                <Row className="catagories">
                    <Col md="12">
                        <Tabs defaultActiveKey="1" type="card" size="small">
                            <TabPane tab="Sympathy Items" key="1">
                            <span className="receive-fullfill">Sympathy items will be sent to you.</span>
                            </TabPane>
                            <TabPane tab="Non-Profit Donations" key="2">
                            <span className="receive-fullfill">Non-Profit donations will automatically be transferred to the recipient or organization.</span>
                            </TabPane>
                            <TabPane tab="Commemorative Items" key="3">
                                <span className="receive-fullfill">For commemorative items, you must manually choose to submit the order once they are partially or fully funded.<br/>You will pay any balance that is not fully funded.<br/>Once ordered, our partner vendor will follow up with details on fulfillment.</span>
                            </TabPane>
                        </Tabs>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}