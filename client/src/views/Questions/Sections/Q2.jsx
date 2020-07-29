import React from "react";
import {Button, DatePicker, Form, Input} from "antd";

export default class Q2 extends React.Component {
    saveData = values => {
        // console.log('Received values of form: ', values);
        localStorage.setItem("start_date", values.start_date);
        localStorage.setItem("end_date", values.end_date);
        this.props.next();
    };

    render() {
        const inputStyle = {
            borderRadius: "10px",
            width: "11em",
            height: "2em",
            //textAlign: "center",
            //fontSize: "17px",
            // backgroundColor: "#BEBEBE",
            // color: "black"
        }
        return (
            <div style={{width: "100%", textAlign: "center"}}>
                <div style={{fontSize: "1.5em", marginBottom: "0.5em"}}>
                    Share some important dates
                </div>
                <Form
                    onFinish={this.saveData}
                    scrollToFirstError>
                    <div style={{display: "flex", justifyContent: "center"}}>
                        <Form.Item name="start_date">
                            <DatePicker placeholder="Birthday" style={{borderRadius: "10px", width: "11em", height: "2.5em"}}/>
                        </Form.Item>
                        <Form.Item style={{marginLeft:"2em"}} name="end_date">
                            <DatePicker placeholder="Date of passing" style={{borderRadius: "10px", width: "11em", height: "2.5em"}}/>
                        </Form.Item>
                    </div>

                    <div style={{display: "flex", justifyContent: "center", fontSize: "1.5em"}}>
                        OR
                    </div>
                    <div style ={{fontsize: "12px"}}>
                            Enter dates manually
                    </div>
                    <br/>
                    <div style={{display: "flex", justifyContent: "center"}}>
                        <Form.Item name="birth_date_manual">
                            <Input placeholder="Birthday" style={{borderRadius: "10px", width: "12em", height: "2.5em", marginRight: "10px"}}/>
                        </Form.Item>
                        <Form.Item name="passing_date_manual">
                            <Input placeholder="Enter day of passing" style={{borderRadius: "10px", width: "12em", height: "2.5em",  marginLeft: "10px"}}/>
                        </Form.Item>
                    </div>

                    <div style={{display: "flex", justifyContent: "center"}}>
                        <Button type="primary" onClick={this.props.prev} style={{borderRadius: "10px", marginLeft: "14px"}}>Previous</Button>
                        <Form.Item>
                            <Button type="primary" htmlType="submit" style={{borderRadius: "10px", marginLeft: "20px"}}>Skip/Next</Button>
                        </Form.Item>
                    </div>
                </Form>
            </div>);
    }
}
