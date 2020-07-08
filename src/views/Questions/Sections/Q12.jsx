import React from "react";
import {Typography, Button} from "antd";

export default class Q13 extends React.Component {
    render() {
        return (
            <div style={{width: "100%", textAlign: "center"}}>
                <div style={{fontSize: "2em", marginBottom: "0.5em"}}>
                    Publish & Share
                </div>
                <div style={{display: "flex", justifyContent: "center"}}>
                    <Typography.Title>
                        URL
                    </Typography.Title>
                </div>
                <div style={{textAlign: "center", fontSize: "1.5em", marginTop: "0.5em"}}>
                    Share this link with family and friends so that they
                    can add their own memories and contribute
                </div>
                <br />
                <div style={{display: "flex", justifyContent: "center"}}>
                    <Button type="primary" onClick={this.props.next}>Finish!</Button>
                </div>
            </div>);
    }
}
