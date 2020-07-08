import React from "react";
import Header from "../Layout/Header";
import Footer from "../Layout/Footer";
import {Button, Form, Input, notification} from "antd";
import {forgotPasswordRequest} from "./LoginAPI";

export default function ForgotPassword() {
    const onFinish = (values)  => {
        forgotPasswordRequest(values.email)
            .done(function(response) {
                if (response.success) {
                    notification.success({
                        message: 'Password Reset request success',
                        description: 'You will shortly receive an email with further instructions',
                        duration: 6,
                        placement: 'bottomRight'
                    });
                } else {
                    notification.error({
                        message: 'Password Reset request failed',
                        description: response.message,
                        placement: 'bottomRight'
                    });
                }
            })
            .fail((error) => {
                notification.error({
                    message: 'Password Reset request failed',
                    description: (error.responseJSON && error.responseJSON.message) ? error.responseJSON.message : "Something went wrong, Please try again later.",
                    placement: 'bottomRight'
                });
            });
    };

    return (
        <div id="forgotRoot">
            <Header search={true}/>
            <div id="forgotBody">
                <div id="forgotContent">
                    <div id="title">
                        Forgot your password?
                    </div>
                    <div id="description">
                        Enter your email address and you will receive a email link
                        to reset your password. Check your spam folder too!
                    </div>
                    <Form onFinish={onFinish}>
                        <Form.Item
                            name="email"
                            validateTrigger="onFinish"
                            rules={[
                                {
                                    type: 'email',
                                    message: 'The input is not valid E-mail!',
                                },
                                {
                                    required: true,
                                    message: 'Please input your E-mail!',
                                },
                            ]}
                        >
                            <Input className="myInput" placeholder="Enter your email here"/>
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" className="myButton" htmlType="submit">Submit</Button>
                        </Form.Item>
                    </Form>
                </div>
            </div>
            <Footer/>
        </div>
    );
}
