import React from "react";
import {Button} from "antd";

const Q0 = (props) => {
    return (
        <div style={{width: "100%", height:"100%", textAlign: "center"}}>
            <div style={{fontSize: "2em", marginBottom: "0.5em"}}>
                First we'll ask you a few questions to help get you started
            </div>
            <div className="flexHCenter">
                <Button type="primary" className="myButton" onClick={props.next}>Next</Button>
            </div>
        </div>);
};

export default Q0;
