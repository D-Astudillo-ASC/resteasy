import React from "react";
import {Button, Form, Input} from "antd";

export default class Q1 extends React.Component {
    saveData = values => {
        // console.log('Received values of form: ', values);
        localStorage.setItem("first_name", values.first_name);
        localStorage.setItem("middle_name", values.middle_name);
        localStorage.setItem("last_name", values.last_name);
        this.props.next();
    };

    render() {
        const inputStyle = {
            borderRadius: "10px",
            width: "11em",
            height: "2em",
            textAlign: "center",
            fontSize: "17px",
            // backgroundColor: "#BEBEBE",
            // color: "black"
        }

        return (
            <div style={{width: "100%", textAlign: "center"}}>
                <div style={{fontSize: "2em", marginBottom: "0.5em"}}>
                    What is your loved one's name?
                </div>
                <Form
                    onFinish={this.saveData}
                    scrollToFirstError>
                    <div style={{display: "flex", justifyContent: "center"}}>
                        <Form.Item name="first_name"
                                   rules={[
                                       {
                                           required: true,
                                           message: 'Please input first name',
                                       },
                                   ]}>
                            <Input placeholder="First name" style={inputStyle}/>
                        </Form.Item>
                        <Form.Item style={{margin:"0em 2em"}} name="middle_name">
                            <Input placeholder="Middle name" style={inputStyle}/>
                        </Form.Item>
                        <Form.Item name="last_name" style={inputStyle}>
                            <Input placeholder="Last name" style={inputStyle}/>
                        </Form.Item>
                        <Form.Item style={{margin:"0em 2em"}} name="suffix">
                            <Input placeholder="Suffix" style={{borderRadius: "10px", width: "5em", height: "2em", textAlign: "center", fontSize: "17px",}}/>
                        </Form.Item>
                    </div>

                    <div style={{display: "flex", justifyContent: "center"}}>
                        <Button type="primary" onClick={this.props.prev} style={{borderRadius: "10px", marginLeft: "-30px", marginRight: "10px"}}>Back</Button>
                        <Form.Item>
                            <Button type="primary" htmlType="submit" style={{borderRadius: "10px", marginLeft: "10px"}}>Next</Button>
                        </Form.Item>
                    </div>
                </Form>
            </div>);
    }
}
