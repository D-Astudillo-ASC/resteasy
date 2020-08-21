import React, {useState, useEffect} from "react"
import './NewRegistry.css';
import PageWrapper from "../../../PageWrapper"
import { ArrowRight } from 'react-bootstrap-icons';
import Discover from "./Discover"
import Select from "./Select"
import Share from "./Share"
import Receive from "./Receive"
import {
    Button,
    Form,
    Container,
    Row,
    Col,
    FormControl
  } from "react-bootstrap";

export default function NewRegistry(){

    const [name, setName] = useState("");
    const [current, setCurrent] = useState(1)

    async function handleSubmit(event) {
        console.log (name)
    }

    const handleOption = (num) => {
        setCurrent(num)
    } 
    const renderTab = () => {
        switch(current){
           case 1: return <Discover/>
           case 2: return <Select/>
           case 3: return <Share/>
           case 4: return <Receive/>
        }
     }

    return(
        <PageWrapper content={
            <div>
                <Container fluid>
                    <Row className="d-flex justify-content-md-center">
                        <Col style={{ "paddingLeft": 0, "paddingRight": 0 }}>
                            <div className="main-container">
                                <Container>
                                    <Row>
                                        <Col>
                                            <div className="sub-header-top">
                                                RestEasy
                                            </div>
                                            <div className="main-header">
                                                Registry
                                            </div>
                                            <div className="header-description">
                                                With a customized RestEasy registry you can redirect sympathetic gifts toward something more productive or meaningful.
                                            </div>
                                            <div className="get-started">
                                                Get Started Now:
                                            </div>
                                            <Form onSubmit={handleSubmit} inline className="loved-name">
                                                <FormControl className="loved-name-input"
                                                        type="text"
                                                        value={name}
                                                        placeholder="Loved Ones Name..."
                                                        onChange={e => setName(e.target.value)}
                                                />
                                                <Button className="btn-get-started" type="submit"><img src={require("../../../assets/icons/misc/arrow-right-o.png")}></img></Button>
                                            </Form>
                                        </Col>
                                    </Row>
                                </Container>
                            </div>
                        </Col>
                    </Row>
                    <Row className="d-flex justify-content-md-center">
                        <Col className="d-flex justify-content-center" style={{ "paddingLeft": 0, "paddingRight": 0 }}>
                            <div className="tagline">
                                <div className="commemoration">
                                    Commemoration is expensive.
                                </div>  
                                <br/>
                                <div>
                                    We are often conflicted between wanting the best for our loved ones and the high cost of the best. The RestEasy Registry feature is designed to
                                </div> 
                                <br/> 
                                <div className="eliminate">
                                    eliminate that conflict.
                                </div>
                            </div>
                        </Col>
                        
                    </Row>
                    <Row className="divider-howItWorks">
                        <Col className="d-flex justify-content-center" >
                            <div >
                                How It Works:
                            </div>
                        </Col>
                    </Row>
                    <Row className="option-row">
                        <Col className="d-flex justify-content-center" >
                            <div className={current==1 ? "active option":"option"} onClick={e => {handleOption(1)}}>Discover</div> <ArrowRight color="black" size="50px"/> 
                            <div className={current==2 ? "active option":"option"} onClick={e => {handleOption(2)}}>Select</div> <ArrowRight color="black" size="50px"/> 
                            <div className={current==3 ? "active option":"option"} onClick={e => {handleOption(3)}}>Share</div> <ArrowRight color="black" size="50px"/>
                            <div className={current==4 ? "active option":"option"} onClick={e => {handleOption(4)}}>Receive</div>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="d-flex justify-content-center" >
                            <div className="outer-box">
                                <div className="box">
                                    {renderTab()}
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="d-flex justify-content-center" >
                            <hr className="div-line">
                            </hr>
                        </Col>
                    </Row>
                    <Row>
                        <Col md="12" className="d-flex justify-content-center">
                            <div className="other-q">
                                <span className="bold" style={{fontSize: 32}}>Other questions?</span> Refer to our <a href="#" className="link">FAQ section</a>.<br/>
                                If you don’t find the answer you’re looking for,<br/>
                                email us at <a className="italic" href="mailto: resteasytechnologies@gmail.com">resteasytechnologies@gmail.com</a>
                            </div>
                            
                        </Col>
                    </Row>
                </Container>


            </div>
        }/>
        
    )
}