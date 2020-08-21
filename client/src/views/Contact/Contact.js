import React, {useState, useEffect} from "react"
import { Parallax, Background } from "react-parallax";
import "./Contact.css"
// import NavbarApp from "./NavbarApp"
import PageWrapper from '../../PageWrapper'
import {
    Button,
    Form,
    Container,
    Row,
    Col,
  } from "react-bootstrap";

import { notification } from 'antd';

const image1 = require("../../assets/img/ron-otsu-62_2KGyX13E-unsplash.jpg")
const image2 = require("../../assets/img/1600x900-anti-flash-white-solid-color-background.jpg")

const headerStyle = {
    position: "absolute",
    fontSize: "vw",
    padding: "15px",
    background: "rgba(255, 255, 255, 0.9)",
    top: "50%",
    left: "50%",
    borderRadius: "8px",
    "display": "block",
    "transform": "translate(-50%,-50%)",
    color: "black"
}

export default function Contact() {

    let pageHeader = React.createRef();

    // form data
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [jobTitle, setJobTitle] = useState("");
    const [organization, setOrganization] = useState("");
    const [website, setWebsite] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNum, setPhoneNum] = useState("");
    const [comments, setComments] = useState("");

    var formData = {
        'firstname': firstName,
        'lastName': lastName,
        'jobTitle': jobTitle,
        'organization': organization,
        'website': website,
        'email': email,
        'phoneNum': phoneNum,
        "comments": comments
    }
    function clearForm(){
        
        // setJobTitle('')
        // setOrganization('')
        // setWebsite('')
        // setEmail('')
        // setPhoneNum('')
        // setComments('')
    }


    async function submitForm(event, formData) {
        event.preventDefault();
        console.log("api called")
        // POST request using fetch with async/await
        const requestOptions = {
            method: 'POST',
            body: JSON.stringify(formData)
        };

        try{
            const response =  await fetch('https://zkv7ajqod9.execute-api.us-east-1.amazonaws.com/dev/contact-form', requestOptions);
            console.log("response: " + response)
            notification.success({
                message: 'Success!',
                description:
                  "Thank you for reaching out! We will be in touch shortly!",
                placement: "bottomRight",
            });
            setLastName('sdfsdfds')
            
        
        }catch(error){
            console.log("Error:")
            console.log(error)
            

            notification.error({
                message: 'Oops! There was an error!',
                description:
                  "For some reason, your message didn't go through. If this problem persists, please email us at: resteasytechnologies@gmail.com",
                placement: "bottomRight",
            });
            
        }
        
    }


    return (
        <PageWrapper content = {
            <div className="main">
                <Container fluid={true} className="header-banner">
                    <Row className="justify-content-center">
                        <Col className="d-flex justify-content-center" style={{ "paddingLeft": 0, "paddingRight": 0 }}>
                            <div className="sub-header-top">
                                Learn More About <br/> Becoming A Business Partner!
                            </div>
                        </Col>
                    </Row>
                </Container>
                <Container>
                    <Row className="justify-content-md-center">
                        <Col md="6">
                            <h3 className="join-header">Join the RestEasy Ecosystem</h3>
                            <div className="section-form">
                                <Form onSubmit={event => submitForm(event, formData)}>
                                    <Form.Row>
                                        <Col>
                                            <Form.Control type="text" required value={firstName} placeholder="First Name" onChange={e => setFirstName(e.target.value)} />
                                        </Col>
                                        <Col>
                                            <Form.Control required placeholder={lastName.length >= 0 ? "Last Name" : lastName} onChange={e => setLastName(e.target.value)} />
                                        </Col>
                                    </Form.Row>

                                    <Form.Group>
                                        <Form.Control required placeholder={jobTitle.length >= 0 ? "Job Title" : jobTitle} onChange={e => setJobTitle(e.target.value)} />
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Control required placeholder={organization.length >= 0 ? "Company / Organization" : organization} onChange={e => setOrganization(e.target.value)} />
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Control required placeholder={website.length >= 0 ? "Company Website" : website} onChange={e => setWebsite(e.target.value)} />
                                    </Form.Group>

                                    <Form.Row>
                                        <Col>
                                            <Form.Group controlId="formBasicEmail">
                                                <Form.Control required type="email" placeholder={email.length >= 0 ? "Email Address" : email} onChange={e => setEmail(e.target.value)} />
                                            </Form.Group>
                                        </Col>
                                        <Col>
                                            <Form.Control required placeholder={phoneNum.length >= 0 ? "Phone Number" : phoneNum} onChange={e => setPhoneNum(e.target.value)} />
                                        </Col>
                                    </Form.Row>

                                    <Form.Group controlId="exampleForm.ControlTextarea1">
                                        <Form.Control as="textarea" rows="3" placeholder={comments.length >= 0 ? "Questions or Comments" : comments} onChange={e => setComments(e.target.value)}/>
                                    </Form.Group>
                                    <div className="center">
                                        <Button className="center" variant="outline-success" type="submit">
                                            Submit
                                        </Button>
                                    </div>
                                </Form>
                            </div>
                        </Col>
                    </Row>
                    <Row className="justify-content-md-center">
                        <Col md="12" >
                            <div className="center in-touch">
                                <h2>We will be in touch soon!</h2>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        }/>
    );
}
