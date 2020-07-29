import React from 'react';
import {Button, Form, Container, Row, Col} from "react-bootstrap";
import PageWrapper from "../../PageWrapper"
import "../../styles/styles.css"
import template2Layout from './layout2.js'
import ProcessedLayout2 from './Template2Components/ProcessedLayout2.js'

export default function LoginForm() {
    return (
        <PageWrapper content={
            <div>
                <div style={{height: "100px", backgroundColor:"grey"}} />
                <br />
                <h1 className="centered-text emphasis-text"> In loving memory of [name] </h1>
                <h3 className="centered-text"> date - date </h3>
                <br />
                <ProcessedLayout2 templateLayout={template2Layout} />
                <br />
            </div>
        }/>
    );
};
