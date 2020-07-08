import React from "react";
import {Button} from "antd";

export default class Q0 extends React.Component {
    render() {
        return (
            <div style={{width: "100%", textAlign: "center"}}>
                <div style={{fontSize: "2em", marginBottom: "0.5em"}}>
                    First we'll ask you a few questions to help get you started
                </div>
                <div style={{display: "flex", justifyContent: "center"}}>
                    <Button type="primary" onClick={this.props.next}>Next</Button>
                </div>
            </div>);
    }
}
