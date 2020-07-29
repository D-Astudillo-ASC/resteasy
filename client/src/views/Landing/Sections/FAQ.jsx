import React from 'react';
import {Collapse} from "antd";
import "../../../styles/stylesWithButtons.css"
import genQuestions from "./GeneralFAQlist.js"
import dmQuestions from "./DMFAQlist.js"
import regQuestions from "./RegistryFAQlist.js"
import headers from "./FAQHeaders.js"

function FAQHeader(){
    return (
        <div className="centered-text">
            <h1 className="color1-text" style={{fontSize: "54px"}}> <b> Frequently Asked Questions </b> </h1>
            <h3 className="color2-text"> We’re here to answer your questions and try to make this tough time a little bit easier. </h3>
        </div>
    )
}

// function CollapseList(){
//     const questionsMapped = questions.map((question) => {
//         return(
//             <Collapse.Panel header={question.id + ". " + question.question} key={question.id}>
//                 <b className="color1-text"> {question.answer} </b>
//             </Collapse.Panel>
//         )
//     })

//     return(
//         <Collapse style={{width: "60%", marginTop: "2em", marginBottom: "2em", marginLeft: "20%"}}>
//             {questionsMapped}
//         </Collapse>
//     )
// }

function GenCollapseList(){
    const genQuestionsMapped = genQuestions.map((question) => {
        return(
            <Collapse.Panel style={{whiteSpace: "pre-line"}} header={question.id + ". " + question.question} key={question.id}>
                <b className="color1-text"> {question.answer} </b>
            </Collapse.Panel>
        )
    })

    return(
        <Collapse style={{width: "90%", margin: "auto"}}>
            {genQuestionsMapped}
        </Collapse>
    )
}

function DMCollapseList(){
    const dmQuestionsMapped = dmQuestions.map((question) => {
        return(
            <Collapse.Panel style={{whiteSpace: "pre-line"}} header={question.id + ". " + question.question} key={question.id}>
                <b className="color1-text"> {question.answer} </b>
            </Collapse.Panel>
        )
    })

    return(
        <Collapse style={{width: "90%", margin: "auto"}}>
            {dmQuestionsMapped}
        </Collapse>
    )
}

function RegistryCollapseList(){
    const regQuestionsMapped = regQuestions.map((question) => {
        return(
            <Collapse.Panel style={{whiteSpace: "pre-line"}} header={question.id + ". " + question.question} key={question.id}>
                <b className="color1-text"> {question.answer} </b>
            </Collapse.Panel>
        )
    })

    return(
        <Collapse style={{width: "90%", margin: "auto"}}>
            {regQuestionsMapped}
        </Collapse>
    )
}



class FAQ extends React.Component {
    render() {
        //console.log(questions)
        return (
            <div>
                <br />
                <FAQHeader />
                <Collapse style={{width: "60%", marginTop: "2em", marginBottom: "2em", marginLeft: "20%"}}>
                    <Collapse.Panel header="General" key="1">
                        <GenCollapseList />
                    </Collapse.Panel>
                    <Collapse.Panel header="Digital Memory" key="2">
                        <DMCollapseList />
                    </Collapse.Panel>
                    <Collapse.Panel header="Registry" key="3">
                        <RegistryCollapseList />
                    </Collapse.Panel>
                </Collapse>
                <h5 className="centered-text"> Anything left unanswered? <a href="/">Chat us.</a> </h5>
                <br />
            </div>
        )
    }
}

export default FAQ;
