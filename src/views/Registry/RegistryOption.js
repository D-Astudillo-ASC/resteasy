import React from "react"
import styles from './Registry.css';
import {
  Row,
  Col,
  Container,
} from "react-bootstrap";



export default function RegistryOption(props) {
    return (
      <div style={{width: "250", marginRight: "20px", marginLeft: "20px"}}>
          <div className='container'>
            <img src={props.img} className='img-style' />
            <div className="overlay-text">{props.title}</div>
          </div>
          
          <div className='block-text'>
            <p>{props.text}</p>
          </div>
      </div>
    )
}