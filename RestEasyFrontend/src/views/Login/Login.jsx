import React from 'react';
import {Form, Input, Button, Divider, notification} from 'antd';
import {tryUserLogin} from "./LoginAPI";
import Header from "../Layout/Header";
import {ACCESS_TOKEN, APP_USER_DATA} from "../../constants";


const formItemLayout = {
    labelCol: {
        xs: {
            span: 24,
        },
        sm: {
            span: 8,
        },
    },
    wrapperCol: {
        xs: {
            span: 24,
        },
        sm: {
            span: 16,
        },
    },
};
const tailFormItemLayout = {
    wrapperCol: {
        xs: {
            span: 24,
            offset: 0,
        },
        sm: {
            span: 16,
            offset: 8,
        },
    },
};

export default function LoginForm() {
    const [form] = Form.useForm();

    const onFinish = values => {
        tryUserLogin(values.email, values.password)
            .done(function(response) {
                if (response.success) {
                    localStorage.setItem(ACCESS_TOKEN, response.access_token);
                    localStorage.setItem(APP_USER_DATA, JSON.stringify(response.user_data));
                    window.location.href = "/";  // back to landing page
                } else {
                    notification.error({
                        message: 'Login Failed',
                        description: response.message,
                        placement: 'bottomRight'
                    });
                }
            })
            .fail((error) => {
                notification.error({
                    message: 'Login Failed',
                    description: (error.responseJSON && error.responseJSON.message) ? error.responseJSON.message : "Something went wrong, Please try again later.",
                    placement: 'bottomRight'
                });
            });
    };

    return (
        <div className="root">
            <Header search={false}/>
            <Divider style={{margin: 0}}/>
            <div id="loginBody">
                <div style={{ display: "flex", justifyContent: "space-around"}}>
                    <img alt="login_svg" id="loginImg" src="/img/walk_thru_park.svg"/>
                    <Form
                        {...formItemLayout}
                        form={form}
                        id="loginForm"
                        onFinish={onFinish}
                        scrollToFirstError
                    >
                        <div className="xl mb-3 center">
                            Login into your account
                        </div>

                        <Form.Item
                            name="email"
                            label="E-mail"
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
                            <Input className="myInput"/>
                        </Form.Item>

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
                            <Input.Password  className="myInput"/>
                        </Form.Item>

                        <Form.Item {...tailFormItemLayout}>
                            <Button className="myButton" type="primary" htmlType="submit">
                                Login
                            </Button>
                        </Form.Item>
                        <div className="center">
                            Have no account? <a style={{color: "#2a7512"}} href="/signup">Create one</a>
                        </div>
                        <div className="center">
                            <a style={{color: "#2a7512"}} href="/forgot_password">Forgot your password</a>?
                        </div>
                        <Divider />
                        <div className="center mb-2">
                            <Button className="myButton fullWidth" type="primary">
                                Login With Google
                            </Button>
                        </div>
                        <div className="center">
                            <Button className="myButton fullWidth" type="primary">
                                Login With Facebook
                            </Button>
                        </div>
                    </Form>
                </div>
            </div>
        </div>
    );
};
