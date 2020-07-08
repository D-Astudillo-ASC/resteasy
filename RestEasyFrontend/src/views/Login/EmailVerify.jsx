import React from 'react';
import Header from "../Layout/Header";
import {verifyEmail} from "./LoginAPI";
import {notification, Spin} from "antd";
import {FrownTwoTone, SmileTwoTone} from "@ant-design/icons";

const endpoint = window.location.pathname;

class EmailVerify extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            success: false
        };
    }

    componentDidMount() {
        let url;
        if (endpoint.slice(-1)==='/')
            url = endpoint;
        else
            url = endpoint + '/';
        verifyEmail(url).done(response => {
            if (response.success) {
                this.setState({loading: false, success: true});
                notification.success({
                    message: 'Email verified',
                    placement: "bottomRight"
                });
            }else{
                this.setState({loading: false, success: false});
                notification.error({
                    message: response.message,
                    placement: "bottomRight"
                });
            }
        }).fail((error) => {
            this.setState({loading: false, success: false});
            notification.error({
                message: 'Email verification failed',
                description: (error.responseJSON && error.responseJSON.message) ? error.responseJSON.message : "Something went wrong, Please try again later.",
                placement: 'bottomRight',
            });
        });
    }

    render() {
        if (this.state.loading)
            return (
                <div className="loadingDiv">
                    <Spin size="large" />
                </div>
            );

        return (
            <div>
                <Header/>
                <div className="flexVCenter flexHCenter center mt-5">
                    { this.state.success ?
                        <div>
                            <SmileTwoTone twoToneColor="#4cc247" style={{fontSize: "4rem"}}/>
                            <h2>Email verified</h2>
                            <h3>Head to <a href="/">Home</a></h3>
                        </div>
                        :
                        <div>
                            <FrownTwoTone twoToneColor="#4cc247" style={{fontSize: "4rem"}}/>
                            <h2>Error verifying email</h2>
                            <h3>Head to <a href="/">Home</a></h3>
                        </div>
                    }
                </div>
            </div>
        )
    }
}

export default EmailVerify;
