import React from "react";
import {Button, Form, Input} from "antd";

export default class AddSoundtrack extends React.Component {
    saveData = values => {
        // console.log('Received values of form: ', values);
        localStorage.setItem("spotify", values.spotify);
        this.props.next();
    };

    render() {
        return (
            <div style={{width: "100%", textAlign: "center"}}>
                <div style={{fontSize: "2em", marginBottom: "0.5em"}}>
                    Add a soundtrack
                </div>
                <Form
                    onFinish={this.saveData}
                    scrollToFirstError>
                    <div style={{display: "flex", justifyContent: "center"}}>
                        <Form.Item name="spotify" rules={[
                            {
                                type: "url",
                                message: "This field must be a valid url."
                            }
                        ]}>
                            <Input placeholder="Spotify Track Link" style={{width: "15em"}}/>
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
