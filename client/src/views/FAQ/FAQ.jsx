import React from 'react';
import {Collapse} from "antd";
import {Container, Row, Col} from "react-bootstrap";
// import "../../../styles/stylesWithButtons.css"
import PageWrapper from "../../PageWrapper"
import genQuestions from "./GeneralFAQlist.js"
import dmQuestions from "./DMFAQlist.js"
import regQuestions from "./RegistryFAQlist.js"
import headers from "./FAQHeaders.js"
import "./FAQ.css"

function FAQHeader(){
    return (
        <div className="centered-text" style={{backgroundColor: "#8FC36B", display: "flex", justifyContent: "center", height: "150px"}}>   
            {/* <h1 className="color1-text" style={{fontSize: "54px"}}> <b> Frequently Asked Questions </b> </h1>
            <h3 className="color2-text"> We’re here to answer your questions and try to make this tough time a little bit easier. </h3> */}
            <hr className="line"></hr>
            <div className="header-text"> FAQ </div>
            <hr className="line"></hr>
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

// function GenCollapseList(){
//     const genQuestionsMapped = genQuestions.map((question) => {
//         return(
//             <Collapse.Panel style={{whiteSpace: "pre-line"}} header={question.id + ". " + question.question} key={question.id}>
//                 <b className="color1-text"> {question.answer} </b>
//             </Collapse.Panel>
//         )
//     })

//     return(
//         <Collapse style={{width: "90%", margin: "auto"}}>
//             {genQuestionsMapped}
//         </Collapse>
//     )
// }

function GeneralFAQ(){
    const genQuestionsMapped = genQuestions.map((question) => {
        return(
            <Collapse.Panel style={{whiteSpace: "pre-line", fontSize: "15px", fontWeight: "500"}} header={question.id + ". " + question.question} key={question.id}>
                <b className="color1-text" style={{fontWeight: "500"}}> {question.answer} </b>
            </Collapse.Panel>

        )
    })

    return (
        <div>
            <div className="faq-header">General </div>
            <Collapse style={{ width: "90%", margin: "auto" }}>
                {genQuestionsMapped}
            </Collapse>
        </div>
    )
}

// function DMCollapseList(){
//     const dmQuestionsMapped = dmQuestions.map((question) => {
//         return(
//             <Collapse.Panel style={{whiteSpace: "pre-line"}} header={question.id + ". " + question.question} key={question.id}>
//                 <b className="color1-text"> {question.answer} </b>
//             </Collapse.Panel>
//         )
//     })

//     return(
//         <Collapse style={{width: "90%", margin: "auto"}}>
//             {dmQuestionsMapped}
//         </Collapse>
//     )
// }

function DigitalMemoryFAQ(){
    const dmQuestionsMapped = dmQuestions.map((question) => {
        return(
            <Collapse.Panel style={{whiteSpace: "pre-line", fontSize: "15px", fontWeight: "500"}} header={question.id + ". " + question.question} key={question.id}>
                <b className="color1-text" style={{fontWeight: "500"}}> {question.answer} </b>
            </Collapse.Panel>
        )
    })

    return (
        <div>
            <div className="faq-header">Digital Memory</div>
            <Collapse style={{ width: "90%", margin: "auto" }}>
                {dmQuestionsMapped}
            </Collapse>
        </div>
    )
}

// function RegistryCollapseList(){
//     const regQuestionsMapped = regQuestions.map((question) => {
//         return(
//             <Collapse.Panel style={{whiteSpace: "pre-line"}} header={question.id + ". " + question.question} key={question.id}>
//                 <b className="color1-text"> {question.answer} </b>
//             </Collapse.Panel>
//         )
//     })

//     return(
//         <Collapse style={{width: "90%", margin: "auto"}}>
//             {regQuestionsMapped}
//         </Collapse>
//     )
// }

function RegistryFAQ(){
    const regQuestionsMapped = regQuestions.map((question) => {
        return(
            <Collapse.Panel style={{whiteSpace: "pre-line", fontSize: "15px", fontWeight: "500"}} header={question.id + ". " + question.question} key={question.id}>
                <b className="color1-text" style={{fontWeight: "500"}}> {question.answer} </b>
            </Collapse.Panel>
        )
    })

    return(
        <div>
            <div className="faq-header">Registry</div>
            <Collapse style={{ width: "90%", margin: "auto" }}>
                {regQuestionsMapped}
            </Collapse>
        </div>
    )
}



class FAQ extends React.Component {
    render() {
        //console.log(questions)
        return (
            <PageWrapper content={
                <div>
                    <FAQHeader />
                    <GeneralFAQ />
                    <br />

                    <DigitalMemoryFAQ />
                    <br />

                    <RegistryFAQ />
                    <br />
                    <h5 className="centered-text"> Anything left unanswered? <a href="/">Chat us.</a> </h5>
                    <br />
                </div>

            } />
        )
    }
}

export default FAQ;


