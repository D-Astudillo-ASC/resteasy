import React from 'react';
import {Button, Form, Container, Row, Col} from "react-bootstrap";
import { toast } from "react-toastify";
import LayoutRow from './LayoutRow.js'

export default class ProcessedLayout extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            templateLayout: props.templateLayout,
        }
    }

    render(){
        const LayoutRows = this.state.templateLayout.map((rowinfo) => {
            return <LayoutRow rowinfo={rowinfo.items} key={rowinfo.row} />
        })
        
        return(
            <Container fluid={true}>
                {LayoutRows}
            </Container>
        )
    }
}
