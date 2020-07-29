import React from "react";
import {Button} from "antd";

export default class Q0 extends React.Component {
    render() {

        const buttonStyle = {
            width: "100px",
            height: "40px",
            fontSize: "17px",
            textAlign: "center",
            margin: "auto",
            borderRadius: "10px",

        }
        return (
            <div style={{width: "100%", textAlign: "center"}}>
                <div style={{fontSize: "23px", marginBottom: "0.5em"}}>
                    First we'll ask you a few questions to help get you started
                </div>
                <div style={{display: "flex", justifyContent: "center", padding: "2%"}}>
                    <Button type="primary" onClick={this.props.next} style={buttonStyle}>Next</Button>
                </div>

                <div style={{fontSize: "18px", marginBottom: "0.5em"}}>
                    You'll be able to edit or change anything you share in the next few steps
                </div>
            </div>);
    }
}
