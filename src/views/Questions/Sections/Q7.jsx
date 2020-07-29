import React from "react";
import {Button, Form, Input} from "antd";

export default class Q7 extends React.Component {
    saveData = values => {
        // console.log('Received values of form: ', values);
        localStorage.setItem("spotify", values.spotify);
        this.props.next();
    };

    render() {
        return (
            <div style={{width: "100%", textAlign: "center"}}>
                <div style={{fontSize: "1.5em", marginBottom: "0.5em"}}>
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
                            {/* <Form.Item>
                                <Button type="primary" htmlType="submit" style={{marginLeft: "10px", borderRadius: "10px"}}>Upload</Button>
                            </Form.Item> */}
                        </Form.Item>
                    </div>
                    <br/>

                    <div>
                        {/* <iframe src="https://open.spotify.com/track/2ckGH6FtxWeAv0SskcREd1?si=ckrUuDH_Q-ujV58NcwT6ig" 
                        width="300" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe> */}
                    </div>

                    <div style={{display: "flex", justifyContent: "center"}}>
                        <Button type="primary" onClick={this.props.prev} style={{marginRight: "10px", borderRadius: "10px"}}>Previous</Button>
                    
                        <Button type="primary" onClick={this.props.next} style={{marginRight: "10px", borderRadius: "10px"}}>Skip/Next</Button>
                    </div>
                </Form>
            </div>);
    }
}
