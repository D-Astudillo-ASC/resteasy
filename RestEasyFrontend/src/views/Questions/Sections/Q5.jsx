import React from "react";
import {Button, Form, Input} from "antd";
import {REGISTRY_FIRST_NAME} from "../../../constants";

export default class Q5 extends React.Component {
    saveData = values => {
        // console.log('Received values of form: ', values);
        localStorage.setItem("relation_info", values.relation_info);
        this.props.next();
    };

    render() {
        return (
            <div style={{width: "100%", textAlign: "center"}}>
                <div style={{fontSize: "2em", marginBottom: "0.5em"}}>
                    Share a little bit about {localStorage.getItem(REGISTRY_FIRST_NAME)}
                </div>
                <Form
                    onFinish={this.saveData}
                    scrollToFirstError>
                    <div style={{display: "flex", justifyContent: "center"}}>
                        <Form.Item name="relation_info">
                            <Input.TextArea placeholder="Describe the person or relation" style={{width: "34em"}}/>
                        </Form.Item>
                    </div>

                    <div style={{fontSize: "1em", marginBottom: "0.5em"}}>
                        Don't worry. You can come back and update this at any time
                    </div>

                    <div className="flexHCenter">
                        <Button type="primary" className="myButton mr-4" onClick={this.props.prev}>Back</Button>
                        <Form.Item>
                            <Button type="primary" className="myButton" htmlType="submit">Skip/Next</Button>
                        </Form.Item>
                    </div>
                </Form>
            </div>);
    }
}
