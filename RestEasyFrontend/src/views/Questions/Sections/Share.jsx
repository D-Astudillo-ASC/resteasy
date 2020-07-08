import React from "react";
import {Typography} from "antd";

const Share = () => {
    return (
        <div style={{display: "flex", flexDirection:"column", textAlign: "center", justifyContent: "center"}}>
            <div style={{fontSize: "x-large", marginBottom: "0.5rem"}}>
                Publish & Share
            </div>
            <Typography.Title copyable>
                {"https://resteasy2.herokuapp.com/registry/"+localStorage.getItem('memorial_url')}
            </Typography.Title>
            <div style={{fontWeight:"600", fontSize: "xx-large"}}>

            </div>
            <div style={{fontSize: "large", padding:"2% 25%"}}>
                Share this link with family and friends so that they
                can add their own memories and contribute
            </div>
        </div>
    );
};

export default Share;
