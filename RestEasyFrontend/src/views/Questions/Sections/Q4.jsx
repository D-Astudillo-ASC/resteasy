import React from "react";
import {Button, DatePicker, Form, Input, TimePicker} from "antd";

export default class Q4 extends React.Component {
    saveData = values => {
        // console.log('Received values of form: ', values);
        localStorage.setItem("funeral_date", values.date);
        localStorage.setItem("funeral_time", values.time);
        localStorage.setItem("funeral_location", values.location);
        localStorage.setItem("funeral_description", values.description);
        this.props.next();
    };

    render() {
        return (
            <div style={{width: "100%", textAlign: "center"}}>
                <div style={{fontSize: "2em", marginBottom: "0.5em"}}>
                    Do you want to display funeral/service information on the memorial?
                </div>
                <Form
                    onFinish={this.saveData}
                    scrollToFirstError>
                    <div style={{display: "flex", justifyContent: "center"}}>
                        <Form.Item name="date">
                            <DatePicker placeholder="Date" style={{width: "10em"}}/>
                        </Form.Item>
                        <Form.Item style={{margin:"0em 2em"}} name="time">
                            <TimePicker placeholder="Time" style={{width: "10em"}}/>
                        </Form.Item>
                        <Form.Item name="location">
                            <Input placeholder="Location" style={{width: "10em"}}/>
                        </Form.Item>
                    </div>

                    <div style={{display: "flex", justifyContent: "center"}}>
                        <Form.Item name="description">
                            <Input.TextArea placeholder="Description" style={{width: "34em"}}/>
                        </Form.Item>
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
