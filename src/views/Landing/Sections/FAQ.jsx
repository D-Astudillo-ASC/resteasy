import React from 'react';
import {Collapse} from "antd";
import "../../../styles/stylesWithButtons.css"
import questions from "./FAQlist.js"

function FAQHeader(){
    return (
        <div className="centered-text">
            <h1 className="color1-text" style={{fontSize: "54px"}}> <b> Frequently Asked Questions </b> </h1>
            <h3 className="color2-text"> We’re here to answer your questions and try to make this tough time a little bit easier. </h3>
        </div>
    )
}

function CollapseList(){
    const questionsMapped = questions.map((question) => {
        return(
            <Collapse.Panel header={question.id + ". " + question.question} key={question.id}>
                <b className="color1-text"> {question.answer} </b>
            </Collapse.Panel>
        )
    })

    return(
        <Collapse style={{width: "60%", marginTop: "2em", marginBottom: "2em", marginLeft: "20%"}}>
            {questionsMapped}
        </Collapse>
    )
}

class FAQ extends React.Component {
    render() {
        console.log(questions)
        return (
            <div>
                <br />
                <FAQHeader />
                <CollapseList />
                <h5 className="centered-text"> Anything left unanswered? <a href="/">Chat us.</a> </h5>
                <br />
            </div>
        )
    }
}

export default FAQ;
