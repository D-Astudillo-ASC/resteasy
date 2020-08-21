import React from 'react';
import {Divider, notification, Layout} from 'antd';
import { withRouter, Redirect } from "react-router-dom";

import "../../styles/styles.css"
import "./NewLanding.css"

import Banner from "./Sections/Banner";
import HowItWorks from "./Sections/HowItWorks";
import Create from "./Sections/Create"
import Register from "./Sections/Register"
import Resources from "./Sections/Resources"
import CreateMemorySection from "./Sections/CreateMemorySection"
import CreateRegistrySection from "./Sections/CreateRegistrySection"
import PageWrapper from "../../PageWrapper"
import {
    Button,
    Form,
    Container,
    Row,
    Col,
  } from "react-bootstrap";

  


function LandingDivider(){
    return( <Divider style={{
        minWidth: "1em",
        marginLeft: "10%",
        width: "80%",
        height: "5px",
    }}/> )
}

class NewLanding extends React.Component {
    constructor(props){
        super(props)
        this.state = {
        }

        this.howItWorksRef = React.createRef()
    }

    componentDidMount() {
        notification.info({
            message: 'Beta Mode',
            description:
              "RestEasy is currently in Beta. Not all features are available now. Check back soon for our official launch.",
            placement: "topRight",
            duration: 8,
            top: 80,
            className: "notification-beta"
        });
     }

     
    

    render() {
        return (
            <PageWrapper content={
                <div style={{backgroundColor: "white"}}>
                    <Banner howItWorksRef = {this.howItWorksRef} />
                    
                    <div ref={this.howItWorksRef} className="section"> <HowItWorks /> </div>
                    <div className="section"> <CreateMemorySection /> </div>
                    <div className="section"> <CreateRegistrySection /></div>
                    <div> <Resources /> </div>
                    <div id="create-memory">
                        <a href="/my/create">
                            <button className="button-both">Build a Digital Memory</button>
                        </a>
                        
                    </div>
                    
                </div>
            }/>
        );
    }
}

export default NewLanding;
