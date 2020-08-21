import React from "react";
import {Button, Form, Input} from "antd";
import "../Questions.css"

export default class Q5 extends React.Component {
    saveData = values => {
        localStorage.setItem("relation_info", values.relation_info);
        this.props.next();
    };

    render() {

        const navButton = {
            borderRadius: "10px",
            margin: "10px",
            width: "100px"
        }

        return (
            <div style={{width: "100%", textAlign: "center"}}>
                <div className="create-text" style={{fontSize: "1.5em", marginBottom: "0.5em"}}>
                    Share a little bit about {localStorage.getItem("first_name")}
                </div>
                <Form
                    onFinish={this.saveData}
                    scrollToFirstError>
                    <div style={{display: "flex", justifyContent: "center"}}>
                        <Form.Item name="relation_info">
                            <Input.TextArea placeholder="Add some information about your loved one that you would want others to know.
                            This will show up at the top of the Digital Memory." style={{width: "34em", height: "7em", borderRadius: "10px", whiteSpace: "pre-wrap",  border: "1px solid #578C3D"}}/>
                        </Form.Item>
                    </div>

                    <div className="create-text" style={{fontSize: "20px", marginBottom: "0.5em"}}>
                        Don't worry. You can come back and update this at any time
                    </div>

                    <div style={{display: "flex", justifyContent: "center"}}>
                        <Button type="primary" onClick={this.props.prev} style={navButton}> Previous</Button>
                        <Form.Item>
                            <Button type="primary" htmlType="submit" style={navButton}>Skip/Next</Button>
                        </Form.Item>
                    </div>
                </Form>
            </div>);
    }
}
