import React from 'react';
import {Form, Input, Checkbox, Button, notification, Divider, Modal} from 'antd';
import {tryUserSignUp} from "./LoginAPI";
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

class SignUp extends React.Component{
    constructor(props) {
        super(props);
        this.state={modalVisible: false};
    }

    onFinish = values => {
        tryUserSignUp(values.first_name, values.last_name, values.email, values.password)
            .done((response) => {
                if (response.success) {
                    localStorage.setItem(ACCESS_TOKEN, response.access_token);
                    localStorage.setItem(APP_USER_DATA, JSON.stringify(response.user_data));
                    localStorage.setItem('verification_mail_sent', '1');
                    window.location.href = "/";  // back to landing page
                } else {
                    notification.error({
                        message: 'SignUp Failed',
                        description: response.message,
                        placement: 'bottomRight',
                    });
                }
            })
            .fail((error) => {
                notification.error({
                    message: 'SignUp Failed',
                    description: (error.responseJSON && error.responseJSON.message) ? error.responseJSON.message : "Something went wrong, Please try again later.",
                    placement: 'bottomRight',
                });
            });
    };

    toggleVisibility = () => {
        console.log("shit");
        this.setState({modalVisible: !this.state.modalVisible});
    };

    render() {
        return (
            <div className="root">
                <Header search={false}/>
                <Divider style={{margin: 0}}/>
                <div id="loginBody">
                    <div style={{display: "flex", justifyContent: "space-around"}}>
                        <img alt="signup_svg" id="signupImg" src="/img/signup_form.svg"/>
                        <Form
                            {...formItemLayout}
                            id="loginForm"
                            onFinish={this.onFinish}
                            scrollToFirstError
                        >
                            <div className="xl mb-3 center">
                                Create an account
                            </div>
                            <Form.Item label="Name">
                                <Form.Item className="fname" name="first_name" rules={[
                                    {
                                        required: true,
                                        message: 'Please input your first name!',
                                        whitespace: true,
                                    },
                                ]}>
                                    <Input className="myInput" placeholder="First"/>
                                </Form.Item>
                                <Form.Item className="lname" name="last_name">
                                    <Input className="myInput" placeholder="Last"/>
                                </Form.Item>
                            </Form.Item>
                            <Form.Item
                                name="email"
                                label="E-mail"
                                validateTrigger="onFinish"
                                rules={[
                                    {
                                        type: 'email',
                                        message: 'Not a valid email. Please try again.',
                                    },
                                    {
                                        required: true,
                                        message: 'Please input your E-mail!',
                                    },
                                ]}
                            >
                                <Input className="myInput" placeholder="Email"/>
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

                            <Form.Item
                                name="agreement"
                                valuePropName="checked"
                                {...tailFormItemLayout}
                                validateTrigger="onFinish"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please read the agreement and confirm!',
                                    }
                                ]}
                            >
                                <Checkbox>
                                    I have read the <u style={{color: "#2a7512"}} onClick={this.toggleVisibility}>agreement</u>
                                </Checkbox>
                            </Form.Item>
                            <Form.Item {...tailFormItemLayout}>
                                <Button className="myButton" type="primary" htmlType="submit">
                                    Register
                                </Button>
                            </Form.Item>
                            <div className="center">
                                Already have an account? <a style={{color: "#2a7512"}}  href="/login">Sign In</a>
                            </div>
                        </Form>
                    </div>
                    <Modal
                        title="User Agreement"
                        visible={this.state.modalVisible}
                        footer={
                            <Button key="back" onClick={this.toggleVisibility}>
                                Close
                            </Button>
                        }
                        onCancel={this.toggleVisibility}
                    >
                        An EULA will only address the license, while the
                        Terms and Conditions agreement will be more in depth and detailed,
                        covering topics like payment schedules, privacy issues,
                        third-party service providers, fees and costs, dispute resolution,
                        requesting refunds, use of the associated website and will
                        often even include the EULA within it.arbitration.
                    </Modal>
                </div>
            </div>
        );
    }
};

export default SignUp;
