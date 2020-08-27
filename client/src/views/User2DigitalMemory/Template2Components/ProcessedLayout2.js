import React from 'react';
import {Button, Form, Container, Row, Col} from "react-bootstrap";
import { toast } from "react-toastify";
import Layout2Row from './Layout2Row.js'
import "../../../styles/stylesWithButtons.css"

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
                <Container flex="true">
                    <Row>
                        <Col className="d-flex justify-content-center">
                            <a href="/digitalmemoryeditor">
                                <button className="button-links"
                                    style={{ border: "none", borderRadius: 4, paddingLeft: 15, paddingRight: 15, paddingTop:5, paddingBottom:5}}
                                >
                                    Edit your digital memory
                                </button>
                            </a>
                        </Col>
                    </Row>
                </Container>
                <br />
                <br />
                <Container fluid={true}>
                    {Layout2Rows}
                </Container>
            </div>
        )
    }
}
