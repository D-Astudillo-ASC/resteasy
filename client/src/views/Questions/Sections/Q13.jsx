import React from "react";
import {Typography, Button} from "antd";
import uuid from 'react-uuid'


export default class Q13 extends React.Component {
    
    state = {
        name: localStorage.getItem('first_name'),
        url: localStorage.getItem('first_name')+ (uuid()).toString(),
    };

    saveData = () => {
        localStorage.setItem("unique_url", this.state.url);
    };


    render() {

        const navButton = {
            borderRadius: "10px",
            margin: "20px",
            width: "100px"
        }

        const DM_url = "/digitalmemory/" + this.state.url
        return (
            <div style={{width: "100%", textAlign: "center"}}>
                <div className="create-text" style={{fontSize: "1.5em", marginBottom: "0.5em"}}>
                    Send the below URL to {this.state.name}’s friends and family so they can see the beautiful tribute you created. 

                </div>
                <div style={{display: "flex", justifyContent: "center"}}>
                    <Typography.Title>
                    <a href={DM_url} onClick={this.saveData}>{"https://resteasy.live/digitalmemory/"+ this.state.url}</a>
                    </Typography.Title>
                </div>
                <div className="create-text" style={{textAlign: "center", fontSize: "1.5em", marginTop: "0.5em"}}>
                    Share this link with family and friends so that they
                    can add their own memories and contribute
                </div>
                <br />
                <div style={{display: "flex", justifyContent: "center"}}>
                    <Button type="primary" style={navButton} onClick={this.saveData}><a href={DM_url}>Finish!</a></Button>
                </div>
            </div>);
    }

    
}
