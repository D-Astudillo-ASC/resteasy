import React from "react";
import {Button, Card, Typography} from "antd";
import {Form, Container, Row, Col} from "react-bootstrap";
import "../Questions.css"

export default class Q11 extends React.Component {
    state = {
        name: localStorage.getItem('first_name'),
        story: localStorage.getItem('relation_info'),
        birth_date: localStorage.getItem('start_date'),
        d_date: localStorage.getItem('end_date')
        
    };

    setImage(){
        var templateNum = localStorage.getItem('template_no');
        console.log(templateNum);
        var templateSrc = "";
        switch (templateNum) {
            case "1":
                templateSrc = require("../../../assets/img/TemplateTwoSample.PNG");
                break;
            default:
                templateSrc = "/img/diamond.jpg";
        }
        return templateSrc;
    }

    onNameChange = (name) => {
        this.setState({
            name: name
        })
    };

    onStoryChange = (story) => {
        this.setState({
            story: story
        })
    };

    render() {

        const navButton = {
            borderRadius: "10px",
            margin: "10px",
            width: "100px"
        }

        return (
            <div style={{width: "100%"}}>
                <div className="create-text" style={{textAlign: "center"}}>
                See below for a sneak peak of what your Digital Memory will look like. You can modify as you wish after you publish and receieve a custom URL
                </div>
                <br/>
                <div style={{display: "flex", justifyContent: "center"}}>
                    <Card>
                        <div style={{display: "flex", flexDirection: "column", justifyContent: "space-between"}}>
                            <div style={{textAlign: "left"}}>
                                <Typography.Paragraph style={{fontSize: "2em", textAlign: "center"}} editable={{onChange: this.onNameChange}}>
                                    In Loving Memory of {this.state.name}
                                </Typography.Paragraph>
                        
                                <Typography.Paragraph style={{fontSize: "1em", textAlign: "center"}} editable={{onChange: this.onStoryChange}}>
                                    {this.state.story}
                                </Typography.Paragraph>
                            </div>
                            <div style={{ paddingLeft: "2em", width: "500px", height: "300px", display: "flex", justifyContent: "center"}}>
                                <img id="template-select" src={this.setImage()} style={{ maxWidth: "100%", maxHeight: "100%" }} />
                            </div>
                        </div>

                    </Card>
                </div>
                <br />
                <div style={{ fontWeight: "bold", textAlign: "center", fontSize: "1.5em" }}>
                    {this.state.name}'s Registry in Memory of {this.state.name}
                    <div style={{ height: "300px" }}>
                        Coming Soon
                    </div>
                </div>

                <div style={{display: "flex", justifyContent: "center"}}>
                    <Button type="primary" onClick={this.props.prev} style={navButton}>Previous</Button>
                    <Button type="primary" onClick={this.props.next} style={navButton}>Continue</Button>
                </div>
            </div>);
    }
}

