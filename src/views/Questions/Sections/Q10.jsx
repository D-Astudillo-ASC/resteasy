import React from "react";
import {Button, List, Card, Modal, Row, Col, notification, Upload, Divider, Input} from "antd";

export default class Q10 extends React.Component {
    render() {
        return (
            <div style={{width: "100%"}}>
                <div style={{fontSize: "2em", marginBottom: "0.5em", textAlign: "center"}}>
                    Your Registry URL:
                </div>
                <div style={{display: "flex", justifyContent: "space-between"}}>
                    <Button type="primary" onClick={this.props.prev}>Previous</Button>
                    <Button type="primary" onClick={this.props.next}>Continue</Button>
                </div>
            </div>);
    }
}

