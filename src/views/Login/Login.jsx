import React from 'react';
import {Form, Input, Button, Layout, Divider, notification} from 'antd';
import {Container, Row, Col} from "react-bootstrap";
import {tryUserLogin} from "./LoginAPI";
import PageWrapper from "../../PageWrapper"
import "./Login.css"

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
        console.log('Received values of form: ', values);
        tryUserLogin(values.email, values.password)
            .done(function(response) {
                if (response.success) {
                    localStorage.setItem("access_token", response.access_token);
                    localStorage.setItem('user', JSON.stringify(response.user_data));
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
        <PageWrapper content={
            <Container fluid={true}>
                <Row className="justify-content-md-center">
                    <Col md="2"/>
                    <Col md="4" style={{margin: "auto"}}>
                        <img style={{width: "100%"}} src={require("../../assets/img/login.png")}/>
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
                                        Login into your account
                                    </div>

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
                                        <Input style={{width: "10em"}}/>
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
                                        <Input.Password style={{width: "10em"}}/>
                                    </Form.Item>

                                    <Form.Item {...tailFormItemLayout}>
                                        <Button type="primary" htmlType="submit">
                                            Login
                                        </Button>
                                    </Form.Item>
                                    <div style={{textAlign: "center"}}>
                                        Have no account? <a href="/signup">Create one</a>
                                    </div>
                                    <Divider />
                                    <div style={{textAlign: "center", marginBottom: "1em"}}>
                                        <Button type="primary">
                                            Login With Google
                                        </Button>
                                    </div>
                                    <div style={{textAlign: "center"}}>
                                        <Button type="primary">
                                            Login With Facebook
                                        </Button>
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
