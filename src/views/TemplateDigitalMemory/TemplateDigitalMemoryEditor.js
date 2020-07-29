import React from 'react';
import PageWrapper from "../../PageWrapper"
import axios from "axios";
import "./TemplateDigitalMemory.css"
import "../../styles/styles.css"
import ProcessedLayoutEditor from './TemplateComponentsEditor/ProcessedLayoutEditor.js'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { REMOTE_HOST } from "../../constants.js"

export default class TemplateDigitalMemoryModularEditor extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            templateLayout: [],
        }

        this.componentDidMount = this.componentDidMount.bind(this)
    }

    componentDidMount(){
        axios.get(REMOTE_HOST + "/templates/gettemplate")
            .then((response) => {
                this.setState({
                    templateLayout: response["data"]
                })
            })
            .catch((error) => {
                console.log(error)
            })
    }

    render(){
        return (
            <PageWrapper content={
                <DndProvider backend={HTML5Backend}>
                    <div style={{height: "100px", backgroundColor:"grey"}} />
                    <br />
                    <h1 className="centered-text emphasis-text"> Template Digital Memory Editor </h1>
                    <h3 className="centered-text"> Click on items to interact, or drag and drop to swap/merge </h3>
                    <br />
                    <ProcessedLayoutEditor templateLayout={this.state.templateLayout} />
                    <br />
                </DndProvider>
            }/>
        )
    }
};
