import React from 'react';
import PageWrapper from "../../PageWrapper"
import axios from "axios";
import "./Template2DigitalMemory.css"
import "../../styles/styles.css"
import ProcessedLayoutEditor from './Template2ComponentsEditor/ProcessedLayout2Editor.js'
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

    //Get the layout for this particular memory
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
                        this.setState({templateLayout: JSON.parse(data)})
                    })
            })
            .catch(error => {
                console.log("error")
            })
    }

    render(){
        return (
            <PageWrapper content={
                <DndProvider backend={HTML5Backend}>
                    <div style={{height: "100px", backgroundColor:"grey"}} />
                    <br />
                    <h1 className="centered-text emphasis-text"> Template Digital Memory Editor </h1>
                    <h3 className="centered-text"> Click on items to interact, or drag and drop to swap </h3>
                    <br />
                    <ProcessedLayoutEditor templateLayout={this.state.templateLayout} />
                    <br />
                </DndProvider>
            }/>
        )
    }
};
