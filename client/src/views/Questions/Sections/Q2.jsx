import React from "react";
import {Button, DatePicker, Form, Input} from "antd";
import "../Questions.css"

export default class Q2 extends React.Component {
    saveData = values => {
        localStorage.setItem("start_date", values.start_date);
        localStorage.setItem("end_date", values.end_date);
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
                    Share some important dates
                </div>
                <Form
                    onFinish={this.saveData}
                    scrollToFirstError>
                    <div className="create-text" style ={{fontsize: "15px"}}>
                            Enter dates manually
                    </div>
                    <br/>
                    <div style={{display: "flex", justifyContent: "center"}}>
                        <Form.Item name="start_date">
                            <Input placeholder="Birthday" style={inputStyle}/>
                        </Form.Item>
                        <Form.Item name="end_date">
                            <Input placeholder="Enter day of passing" style={inputStyle}/>
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
