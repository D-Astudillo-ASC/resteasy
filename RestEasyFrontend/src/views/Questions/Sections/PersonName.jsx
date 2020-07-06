import React from "react";
import {Button, Form, Input} from "antd";
import {REGISTRY_FIRST_NAME, REGISTRY_LAST_NAME, REGISTRY_MIDDLE_NAME, REGISTRY_SUFFIX} from "../../../constants";

export default class PersonName extends React.Component {

    saveData = values => {
        if (values.first_name !== undefined)
            localStorage.setItem(REGISTRY_FIRST_NAME, values.first_name);
        if (values.middle_name !== undefined)
            localStorage.setItem(REGISTRY_MIDDLE_NAME, values.middle_name);
        if (values.last_name !== undefined)
            localStorage.setItem(REGISTRY_LAST_NAME, values.last_name);
        if (values.suffix !== undefined)
            localStorage.setItem(REGISTRY_SUFFIX, values.suffix);
        this.props.next();
    };

    render() {
        return (
            <div style={{width: "100%", textAlign: "center"}}>
                <div style={{fontSize: "2em", marginBottom: "0.5em"}}>
                    What is your loved one's name?
                </div>
                <Form
                    onFinish={this.saveData}
                    initialValues={{
                        "first_name": localStorage.getItem(REGISTRY_FIRST_NAME)||'',
                        "middle_name": localStorage.getItem(REGISTRY_MIDDLE_NAME)||'',
                        "last_name": localStorage.getItem(REGISTRY_LAST_NAME)||'',
                        "suffix": localStorage.getItem(REGISTRY_SUFFIX)||'',
                    }}
                    scrollToFirstError>
                    <div style={{display: "flex", justifyContent: "center"}}>
                        <Form.Item name="first_name"
                                   rules={[{
                                           required: true,
                                           message: 'Please input first name',
                                   },]}>
                            <Input placeholder="First name" style={{width: "10rem", marginRight:"1rem"}}/>
                        </Form.Item>
                        <Form.Item name="middle_name">
                            <Input placeholder="Middle name" style={{width: "10rem", marginRight:"1rem"}}/>
                        </Form.Item>
                        <Form.Item name="last_name">
                            <Input placeholder="Last name" style={{width: "10rem", marginRight:"1rem"}}/>
                        </Form.Item>
                        <Form.Item name="suffix">
                            <Input placeholder="Suffix" style={{width: "5rem"}}/>
                        </Form.Item>
                    </div>

                    <div className="flexHCenter">
                        <Button type="primary" className="myButton mr-4" onClick={this.props.prev}>Back</Button>
                        <Form.Item>
                            <Button type="primary" className="myButton" htmlType="submit">Next</Button>
                        </Form.Item>
                    </div>
                </Form>
            </div>);
    }
}
