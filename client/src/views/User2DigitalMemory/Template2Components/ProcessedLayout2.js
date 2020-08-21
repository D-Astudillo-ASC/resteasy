import React from 'react';
import {Button, Form, Container, Row, Col} from "react-bootstrap";
import { toast } from "react-toastify";
import Layout2Row from './Layout2Row.js'

export default class ProcessedLayout extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            templateLayout: props.templateLayout,
        }
    }

    componentWillReceiveProps(nextProps){
        this.setState({templateLayout : nextProps.templateLayout})
    }

    render(){
        const Layout2Rows = this.state.templateLayout.map((rowinfo) => {
            return <Layout2Row rowinfo={rowinfo.items} rownum={rowinfo.row} key={rowinfo.row} />
        })
        
        return(
            <div>
                <a href="/digitalmemoryeditor">
                    <button
                        style={{width: "20%", marginLeft: "40%", marginRight: "40%"}}
                    >
                        Edit your digital memory
                    </button>
                </a>
                <br />
                <br />
                <Container fluid={true}>
                    {Layout2Rows}
                </Container>
            </div>
        )
    }
}
