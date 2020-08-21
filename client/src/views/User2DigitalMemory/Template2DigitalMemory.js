import React from 'react';
import {Button, Form, Container, Row, Col} from "react-bootstrap";
import PageWrapper from "../../PageWrapper"
import "../../styles/styles.css"
import axios from "axios";
import { REMOTE_HOST } from "./../../constants.js"
//import template2Layout from './layout2.js'
import ProcessedLayout2 from './Template2Components/ProcessedLayout2.js'

export default class LoginForm extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            templateLayout: [],
            firstname: "",
        }

        //Get the first name for this particular memory
        const tokenId = JSON.parse(localStorage.getItem("user")).id
        const body = {
            id: tokenId,
            memoryName : "firstname",
            userUploadBucket : "resteasy-user-uploads",
        }
        axios.post(REMOTE_HOST + "/aws/signS3_get", {body})
            .then(response => {
                fetch(response.data)
                    .then(response2 => response2.text())
                    .then(data => {
                        this.setState({firstname: data})
                    })
            })
            .catch(error => {
                console.log("error")
            })
    }

    //Get the layout for this particular memory
    //This is in a different file than the layout but
    //for some reason when I try to get both in the same function,
    //only one goes through, so I'm breaking it up here.
    componentDidMount(){
        const tokenId = JSON.parse(localStorage.getItem("user")).id
        const body = {
            id: tokenId,
            memoryName : "layout2",
            userUploadBucket : "resteasy-user-uploads",
        }
        axios.post(REMOTE_HOST + "/aws/signS3_get", {body})
            .then(response => {
                fetch(response.data)
                    .then(response2 => response2.text())
                    .then(data => {
                        console.log(data)
                        this.setState({templateLayout: JSON.parse(data)})
                    })
            })
            .catch(error => {
                console.log("error")
            })

    }

    render(){
        return(
            <PageWrapper content={
                <div>
                    {/* <div style={{height: "100px", backgroundColor:"grey"}} /> */}
                    <div style={{height: "50px"}} />
                    <br />
                    <h1 className="centered-text emphasis-text"> In loving memory of {this.state.firstname} </h1>
                    <h3 className="centered-text"> {localStorage.getItem("start_date")} - {localStorage.getItem("end_date")} </h3>
                    <br />
                    <ProcessedLayout2 templateLayout={this.state.templateLayout} />
                    <br />
                </div>
            }/>
        )
    }

};
