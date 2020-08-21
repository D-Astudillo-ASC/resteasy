import React from "react"
import styles from './Registry.css';
import {
  Row,
  Col,
  Container,
} from "react-bootstrap";



export default function RegistryDetail(props) {
    return (
      <div className = "reg-detail" style={{marginTop: "40px"}}>
            <img src={props.img} className="image-small"/>
            <span className="detail-text">

                    <span className="emphasis-text"> {props.boldText} </span>
                    {props.text}

            </span>
      </div>
    )
}