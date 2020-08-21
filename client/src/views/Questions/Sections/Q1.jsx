import React from "react";
import {Button, Form, Input} from "antd";
import axios from "axios";
import { REMOTE_HOST } from "../../../constants.js"

export default class Q1 extends React.Component {
    saveData = values => {
        // console.log('Received values of form: ', values);
        localStorage.setItem("first_name", values.first_name);
        localStorage.setItem("middle_name", values.middle_name);
        localStorage.setItem("last_name", values.last_name);

        const jwt = localStorage.getItem("token");
        const config = {
            headers: {
                Authorization: `Bearer ${jwt}`,
            }
        }
        axios.post(REMOTE_HOST + "/aws/signS3_upload",{
            bucket : "resteasy-user-uploads",
            fileName : "firstname",
            fileType : "txt"
        }, config)
        .then(response => {
            console.log("---------")
            console.log(response)
            var returnData = response.data
            var signedRequest = returnData.signedRequest;
            console.log("Recieved a signed request " + signedRequest);
        
            // Put the fileType in the headers for the upload
            var options = {
                    headers: {
                        'Content-Type': "txt"
                    }
            };
            axios.put(signedRequest,localStorage.getItem("first_name"),options)
            .then(result => {
                // upon successful upload, add the file data into the userImages index in mongoDB
                axios.post(REMOTE_HOST + "/aws/addImgDB", {
                    memoryName: "firstname",
                    imgID: "firstname.txt"
                }, config)
                .then( result => {
                    console.log(result)
                }).catch(error => {
                    console.log("error " + JSON.stringify(error))
                })
            })
            .catch(error => {
                console.log("ERROR " + JSON.stringify(error));
            })
        })
        .catch(error => {
            console.log(JSON.stringify(error));
        })

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

        const suffixStyle = {
            borderRadius: "12px",
            textAlign: "center",
            fontSize: "17px",
            border: "1px solid #578C3D",
            width: "150px",
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
                <div className="create-text" style={{fontSize: "1.5em", marginBottom: "2em"}}>
                    What is your loved one's name?
                </div>
                <Form
                    onFinish={this.saveData}
                    scrollToFirstError>
                    <div style={{display: "flex", justifyContent: "center", flexFlow: "row wrap"}}>
                        <Form.Item name="first_name"
                                   rules={[
                                       {
                                           required: true,
                                           message: 'Please input first name',
                                       },
                                   ]}>
                            <Input placeholder="First name" style={inputStyle}/>
                        </Form.Item>
                        <Form.Item name="middle_name">
                            <Input placeholder="Middle name" style={inputStyle}/>
                        </Form.Item>
                        <Form.Item name="last_name">
                            <Input placeholder="Last name" style={inputStyle}/>
                        </Form.Item>
                        <Form.Item name="suffix">
                            <Input placeholder="Suffix" style={suffixStyle}/>
                        </Form.Item>
                    </div>

                    <div style={{display: "flex", justifyContent: "center"}}>
                        <Button type="primary" onClick={this.props.prev} style={navButton}>Back</Button>
                        <Form.Item>
                            <Button type="primary" htmlType="submit" style={navButton}>Next</Button>
                        </Form.Item>
                    </div>
                </Form>
            </div>);
    }
}
