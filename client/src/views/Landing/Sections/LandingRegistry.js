import React from "react"
import "./Create.css"

import {
    Button,
    Form,
    Container,
    Row,
    Col,
  } from "react-bootstrap";


export default function LandingRegistry(props) {
    return (
        <div className="container" style={{backgroundImage: `url(${props.backgroundImg})`,width: "100%", height: "510px", backgroundSize: "cover"}}>

            <div className="registry-header">{props.header}</div> 

            <div className="main-text">{props.mainText}</div>
            <br />       
            <div className="sub-text" className="sub-text">{props.subText}</div>           
            
        </div>
    )
}