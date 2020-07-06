import React from "react";
import Header from "../Layout/Header";
import Footer from "../Layout/Footer";
import {Button, Form, Input, notification} from "antd";
import {resetPasswordRequest} from "./LoginAPI";

const endpoint = window.location.pathname;

export default class ResetPassword extends React.Component {
    onFinish = (values)  => {
        let url;
        if (endpoint.slice(-1)==='/')
            url = endpoint;
        else
            url = endpoint + '/';

        resetPasswordRequest(url, values.password)
            .done(function(response) {
                if (response.success) {
                    notification.success({
                        message: 'Password Reset successfully',
                        duration: 6,
                        placement: 'bottomRight'
                    });
                } else {
                    notification.error({
                        message: 'Password Reset failed',
                        description: response.message,
                        placement: 'bottomRight'
                    });
                }
            })
            .fail((error) => {
                notification.error({
                    message: 'Password Reset failed',
                    description: (error.responseJSON && error.responseJSON.message) ? error.responseJSON.message : "Something went wrong, Please try again later.",
                    placement: 'bottomRight'
                });
            });
    };

    render() {
        return (
            <div id="forgotRoot">
                <Header search={true}/>
                <div id="forgotBody">
                    <div id="forgotContent">
                        <div id="title">
                            Reset your password
                        </div>
                        <div id="description">
                            Enter a new password for your account.
                        </div>
                        <Form onFinish={this.onFinish}>
                            <Form.Item
                                name="password"
                                label="Password"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your password!',
                                    },
                                ]}
                            >
                                <Input.Password className="myInput"/>
                            </Form.Item>

                            <Form.Item
                                name="confirmPassword"
                                label="Confirm"
                                validateTrigger="onFinish"
                                dependencies={['password']}
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please confirm your password!',
                                    },
                                    ({getFieldValue}) => ({
                                        validator(rule, value) {
                                            if (!value || getFieldValue('password') === value) {
                                                return Promise.resolve();
                                            }

                                            return Promise.reject('The  two passwords that you entered do not match!');
                                        },
                                    }),
                                ]}
                            >
                                <Input.Password className="myInput"/>
                            </Form.Item>
                            <Form.Item>
                                <Button type="primary" className="myButton" htmlType="submit">Submit</Button>
                            </Form.Item>
                        </Form>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}
