import React from "react";
import {Typography, Button} from "antd";

export default class Q13 extends React.Component {
    state = {
        name: localStorage.getItem('first_name'),
        url: localStorage.getItem('first_name')+ (Math.floor(Math.random() * 10000)).toString(),
    };


    render() {
        return (
            <div style={{width: "100%", textAlign: "center"}}>
                <div style={{fontSize: "1.5em", marginBottom: "0.5em"}}>
                    Send the below URL to {this.state.name}’s friends and family so they can see the beautiful tribute you created. 

                </div>
                <div style={{display: "flex", justifyContent: "center"}}>
                    <Typography.Title>
                    <a href="/templatedigitalmemory">{"https://resteasy2.herokuapp.com/registry/"+ this.state.url}</a>
                    </Typography.Title>
                </div>
                <div style={{textAlign: "center", fontSize: "1.5em", marginTop: "0.5em"}}>
                    Share this link with family and friends so that they
                    can add their own memories and contribute
                </div>
                <br />
                <div style={{display: "flex", justifyContent: "center"}}>
                    <Button type="primary" style={{borderRadius: "10px"}}><a href="/">Finish!</a></Button>
                </div>
            </div>);
    }

    
}
