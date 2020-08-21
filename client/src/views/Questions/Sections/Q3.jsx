import React from "react";
import {Button, Form, Input} from "antd";
import "../Questions.css"

export default class Q3 extends React.Component {
    saveData = values => {
        localStorage.setItem("relation", values.relation);
        this.props.next();
    };

    render() {

        const inputStyle = {
            borderRadius: "12px",
            textAlign: "center",
            fontSize: "17px",
            border: "1px solid #578C3D",
            width: "235px",
            height:"40px",
            margin: "20px 10px"
        }

        const navButton = {
            borderRadius: "10px",
            margin: "10px",
            width: "100px"
        }

        return (
            <div style={{width: "100%", textAlign: "center"}}>
                <div className="create-text" style={{fontSize: "1.5em", marginBottom: "0.5em"}}>
                    Who is {localStorage.getItem("first_name")} to you?
                </div>
                <Form
                    onFinish={this.saveData}
                    scrollToFirstError>
                    <div style={{display: "flex", justifyContent: "center"}}>
                        <Form.Item name="relation">
                            <Input placeholder="Relationship" style={inputStyle}/>
                        </Form.Item>
                    </div>

                    <div style={{display: "flex", justifyContent: "center"}}>
                        <Button type="primary" onClick={this.props.prev} style={navButton}>Previous</Button>
                        <Form.Item>
                            <Button type="primary" htmlType="submit" style={navButton}>Skip/Next</Button>
                        </Form.Item>
                    </div>
                </Form>
            </div>);
    }
}
