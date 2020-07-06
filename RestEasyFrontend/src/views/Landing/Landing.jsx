import React from 'react';
import {Layout, notification} from 'antd';

import FAQ from "./Sections/FAQ";
import Header from "../Layout/Header";
import Samples from "./Sections/Samples";
import Banner from "./Sections/Banner";
import HowItWorks from "./Sections/HowItWorks";
import Reviews from "./Sections/Reviews";
import Footer from "../Layout/Footer";

class Landing extends React.Component {
    componentDidMount() {
        if (localStorage.getItem('verification_mail_sent') === '1'){
            notification.success({
                message: 'SignUp success',
                description: 'Check your inbox for a verification mail',
                placement: 'bottomRight',
            });
            localStorage.setItem('verification_mail_sent', '0');
        }
    }

    render() {
        return (
            <Layout>
                <Header search={true}/>
                <Layout.Content style={{background: "white"}}>
                    <Banner />
                    <HowItWorks />
                    <Samples />
                    <Reviews />
                    <FAQ />
                </Layout.Content>
                <Footer />
            </Layout>
        );
    }
}

export default Landing;
