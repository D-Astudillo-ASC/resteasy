import React from "react";
import {Button, Card, Radio} from "antd";
import "../Questions.css"


export default class Q8 extends React.Component {
    state = {
        template_no: 1
    };

    saveData = () => {
        localStorage.setItem("template_no", this.state.template_no);
        this.props.next();
        console.log(this.state.curr)
    };

    onChange = (e) => {
        this.setState({
            template_no: e.target.value
        });
    };

    render() {

        const navButton = {
            borderRadius: "10px",
            margin: "10px",
            width: "100px"
        }

        return (
            <div style={{width: "100%", textAlign: "center"}}>
                <div className="create-text" style={{fontSize: "2em", marginBottom: "0.5em"}}>
                    Select a template
                </div>
                <div style={{display: "flex", justifyContent: "center", overflow: "auto"}}>
                    <Radio.Group onChange={this.onChange} value={this.state.template_no}>
                        <Radio value={1} style={{margin: "20px"}}>
                            <Card style={{marginTop: "0.5em", width: "300px",  verticalAlign: "top"}} hoverable cover={<img alt="img" 
                            id= "template-style" src={require("../../../assets/img/TemplateTwoSample.PNG")} style={{width: "100%", height: "100%"}}/>}>
                                <Card.Meta title="Template 1" style={{height: "10px"}} />
                            </Card>
                        </Radio>
                         <Radio value={2} style={{margin: "20px",  verticalAlign: "top"}}>
                            <Card style={{marginTop: "0.5em"}} hoverable cover={<img alt="img" id= "template-style" src="/img/diamond.jpg" />}>
                                <Card.Meta title="Template 2" />
                            </Card>
                        </Radio>
                    </Radio.Group>
                </div>
                <div className="create-text" style={{fontSize: "1em", padding: "0.5em"}}>
                    You can customize and personalize it later
                </div>
                <div style={{display: "flex", justifyContent: "center"}}>
                    <Button type="primary" onClick={this.props.prev} style={navButton}>Previous</Button>
                    <Button type="primary" onClick={this.saveData} style={navButton}>Next</Button>
                </div>
            </div>);
    }
}
