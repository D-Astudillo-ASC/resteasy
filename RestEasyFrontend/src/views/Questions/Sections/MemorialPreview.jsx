import React from "react";
import {Button, Card, Layout, List, notification, Typography, Upload} from "antd";
import EyeInvisibleTwoTone from "@ant-design/icons/lib/icons/EyeInvisibleTwoTone";
import moment from "moment";
import {createMemorial} from "../QuestionsAPI";
import Footer from "../../Layout/Footer";
import InboxOutlined from "@ant-design/icons/lib/icons/InboxOutlined";
import PhoneOutlined from "@ant-design/icons/lib/icons/PhoneOutlined";
import ShoppingCartOutlined from "@ant-design/icons/lib/icons/ShoppingCartOutlined";
import {REGISTRY_FIRST_NAME} from "../../../constants";

const first_name = localStorage.getItem(REGISTRY_FIRST_NAME);

export default class MemorialPreview extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            url: first_name+this.genRandom(),
            memorial_title: 'In loving memory of ' + first_name,
            date: (localStorage.getItem('funeral_date') === 'undefined'
                || localStorage.getItem('funeral_date') === '') ?
                '' :
                moment(localStorage.getItem('funeral_date')).format('MMMM D, YYYY'),
            guest_msg: ''
        };
    }

    saveData = () => {
        localStorage.setItem("memorial_url", this.state.url);
        localStorage.setItem("memorial_title", this.state.memorial_title);
        localStorage.setItem("memorial_date", this.state.date);
        localStorage.setItem("memorial_guest_message", this.state.guest_msg);

        createMemorial(
            this.state.url,
            this.state.memorial_title,
            this.state.date,
            this.state.guest_msg,
            localStorage.getItem('registry_items'))
            .done((response) => {
                if (response.success) {
                    notification.success({
                        message: 'Memorial created successful',
                        placement: 'bottomRight',
                    });
                    this.props.next();
                } else {
                    notification.error({
                        message: 'Memorial creation failed',
                        description: response.message,
                        placement: 'bottomRight',
                    });
                }
            })
            .fail((error) => {
                notification.error({
                    message: 'Memorial creation failed',
                    description: (error.responseJSON && error.responseJSON.message) ? error.responseJSON.message : "Something went wrong, Please try again later.",
                    placement: 'bottomRight',
                });
            });
    };

    genRandom = () => {
        return (Math.floor(Math.random() * 10000)).toString();
    };

    onURLChange = str => {
        this.setState({
            url: str
        });
    };

    onTitleChange = str => {
        this.setState({
            memorial_title: str
        });
    };

    onDateChange = str => {
        this.setState({
            date: str
        });
    };

    onGuestChange = str => {
        this.setState({
            guest_msg: str
        });
    };

    getCard = (item) => {
        return (
            <Card
                style={{margin: "0.5em", width:"30%"}}
                hoverable
                cover={<img alt="img" style={{height: "100%"}} src={item.img_url} />}>
                <Card.Meta
                    style={{textAlign: "left", height:"100%"}}
                    title={item.title}
                    description={"$"+item.price} />
            </Card>);
    };

    render() {
        return (
            <Layout.Content id="previewRoot">
                {/* --- URL div  --- */}
                <Card id="prefillCard">
                    <div id="pre-title">YOUR REGISTRY URL</div>
                    <div className="flexHCenter flexVCenter">
                        <EyeInvisibleTwoTone style={{marginTop:"0.25em", marginRight:"0.125em", fontSize: "x-large"}} twoToneColor="#f00"/>
                        <div style={{fontSize: "x-large", fontWeight: "lighter"}}>https://resteasy2.herokuapp.com/registry/</div>
                        <Typography.Paragraph style={{marginBottom:"0px", fontSize: "x-large"}} strong editable={{ onChange: this.onURLChange }}>{this.state.url}</Typography.Paragraph>
                    </div>
                </Card>

                <div id="websitePreview">
                    {/* --- custom header --- */}
                    <div className="header flexSpaceBetween">
                        <div className="flexVCenter cursor">
                            <img alt="company logo" className="logo" src="/logo64.png"/>
                            <div className="l">RestEasy • Registry</div>
                        </div>

                        <div className="flexVCenter">
                            <div className="flexVCenter mr-3">
                                <div className="m">0-123-456-789</div>
                                <PhoneOutlined className="m"/>
                            </div>
                            <ShoppingCartOutlined className="xxl cursor"/>
                        </div>
                    </div>

                    {/* --- Banner div --- */}
                    <div id="bannerDiv">
                        <div id="bannerImg">
                            <Typography.Paragraph style={{marginBottom:"0px", fontSize: "xx-large", color:"#fff"}} strong editable={{ onChange: this.onTitleChange }}>
                                {this.state.memorial_title}
                            </Typography.Paragraph>
                            <Typography.Paragraph style={{marginBottom:"0px", fontSize: "large", color:"#fff"}} strong editable={{ onChange: this.onDateChange }}>
                                {this.state.date === '' ? 'Dates coming soon' : this.state.date}
                            </Typography.Paragraph>
                        </div>

                        <Typography.Paragraph id="guest_msg" editable={{ onChange: this.onGuestChange }}>
                            {this.state.guest_msg === ''? 'Add a message for your guests': this.state.guest_msg}
                        </Typography.Paragraph>
                    </div>

                    {/* --- list of registry items --- */}
                    <List
                        id="itemsDiv"
                        grid={{gutter: 0}}
                        dataSource={JSON.parse(localStorage.getItem('registry_items')) || []}
                        renderItem={item => this.getCard(item)}
                    />

                    {/*  --- Upload media ---  */}
                    <div id="uploadMedia">
                        <div id="title">
                            Share some of your favorite memories
                        </div>
                        <Card id="card">
                            <Upload.Dragger id="uploader" multiple disabled>
                                <p className="ant-upload-drag-icon">
                                    <InboxOutlined />
                                </p>
                                <p className="ant-upload-text">Upload photos and videos</p>
                            </Upload.Dragger>
                        </Card>
                    </div>

                    <Footer />
                </div>

                <div className="flexHCenter mt-4">
                    <Button type="primary" className="myButton mr-4" onClick={this.props.prev}>Back</Button>
                    <Button type="primary" className="myButton" onClick={this.saveData.bind(this)}>Continue</Button>
                </div>
            </Layout.Content>);
    }
}
