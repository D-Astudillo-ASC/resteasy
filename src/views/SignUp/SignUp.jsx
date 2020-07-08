import React from 'react';
import {Form, Input, Checkbox, Button, Layout, notification} from 'antd';
import {Container, Row, Col} from "react-bootstrap";
import {tryUserSignUp} from "./SignupAPI";
import PageWrapper from "../../PageWrapper.js";
import "./SignUp.css"

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

export default function RegistrationForm() {
    const [form] = Form.useForm();

    const onFinish = values => {
        console.log('Received values of form: ', values);
        tryUserSignUp(values.name, values.email, values.password)
            .done((response) => {
                if (response.success) {
                    localStorage.setItem("access_token", response.access_token);
                    localStorage.setItem('user', JSON.stringify(response.user_data));
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

    return (
        <PageWrapper content={
            <Container fluid={true}>
                <Row className="justify-content-md-center">
                    <Col md="2"/>
                    <Col md="4" style={{margin: "auto"}}>
                        <img style={{width: "100%"}} src={require("../../assets/img/signup.png")}/>
                    </Col>
                    <Col md="4">
                        <Layout.Content style={{background: "white", paddingTop: "2em"}}>
                            <div style={{ display: "flex", justifyContent: "center"}}>
                                <Form
                                    {...formItemLayout}
                                    form={form}
                                    name="signup"
                                    style={{padding: "2em",  borderRadius: "0.75em", boxShadow: "1px 1px #eee", border:"1px solid #eee" }}
                                    onFinish={onFinish}
                                    scrollToFirstError
                                >
                                    <div style={{fontSize: "2em", marginBottom: "1em", textAlign: "center"}}>
                                        Create an account
                                    </div>
                                    <Form.Item
                                        name="name"
                                        label="Name"
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Please input your name!',
                                                whitespace: true,
                                            },
                                        ]}
                                    >
                                        <Input style={{width: "20em"}}/>
                                    </Form.Item>

                                    <Form.Item
                                        name="email"
                                        label="E-mail"
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
                                        <Input style={{width: "20em"}}/>
                                    </Form.Item>

                                    <Form.Item
                                        name="confirmEmail"
                                        label="Confirm E-mail"
                                        dependencies={['email']}
                                        hasFeedback
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Please confirm your e-mail!',
                                            },
                                            ({getFieldValue}) => ({
                                                validator(rule, value) {
                                                    if (!value || getFieldValue('email') === value) {
                                                        return Promise.resolve();
                                                    }

                                                    return Promise.reject('The two e-mails that you entered do not match!');
                                                },
                                            }),
                                        ]}
                                    >
                                        <Input style={{width: "20em"}}/>
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
                                        <Input.Password style={{width: "20em"}}/>
                                    </Form.Item>

                                    <Form.Item
                                        name="confirmPassword"
                                        label="Confirm Password"
                                        dependencies={['password']}
                                        hasFeedback
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

                                                    return Promise.reject('The two passwords that you entered do not match!');
                                                },
                                            }),
                                        ]}
                                    >
                                        <Input.Password style={{width: "20em"}}/>
                                    </Form.Item>

                                    <Form.Item name="agreement" valuePropName="checked" {...tailFormItemLayout}>
                                        <Checkbox>
                                            I have read the <a href="https://sehub.stanford.edu/sites/default/files/SampleEmploymentContract.pdf">agreement</a>
                                        </Checkbox>
                                    </Form.Item>
                                    <Form.Item {...tailFormItemLayout}>
                                        <Button type="primary" htmlType="submit">
                                            Register
                                        </Button>
                                    </Form.Item>
                                    <div style={{textAlign: "center"}}>
                                        Already have an account? <a href="/login">Sign In</a>
                                    </div>
                                </Form>
                            </div>
                        </Layout.Content>
                    </Col>
                    <Col md="2" />
                </Row>
            </Container>
        }/>
    );
};
