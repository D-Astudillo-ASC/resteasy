import React from 'react';
import {Badge, Card, Col, Divider, Layout, List, Modal, notification, Row, Spin, Table, Upload} from "antd";
import {STRIPE_PUBLIC_KEY} from "../../constants";
import {getMemorial, updatePaymentWithServer, uploadMedia} from "./MemorialAPI";
import StripeCheckout from "react-stripe-checkout";
import InboxOutlined from "@ant-design/icons/lib/icons/InboxOutlined";
import PhoneOutlined from "@ant-design/icons/lib/icons/PhoneOutlined";
import ShoppingCartOutlined from "@ant-design/icons/lib/icons/ShoppingCartOutlined";
import Footer from "../Layout/Footer";

const columns = [
    {
        title: 'Item',
        dataIndex: 'title',
        key: 'title'
    },
    {
        title: 'Price($)',
        dataIndex: 'price',
        key: 'price',
    }
];

const memorial_url = window.location.pathname.split("/")[2];

class Memorial extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            memorial_title: '',
            date: '',
            count: 0, // item count on badge
            item_modal_visible: false,
            checkout_visible: false,
            guest_message: '',
            total_price: 0,
            registry_items: [],
        };

        // dict: item_name -> boolean
        this.item_included = {};

        this.audio = new Audio("https://firebasestorage.googleapis.com/v0/b/imakshay-a2802.appspot.com/o/resteasy-song.mp3?alt=media&token=6f32b560-8441-408d-8230-7fa9349ad280");
    }

    // returns a modal
    handleClick = (item) => {
        this.setState({
            title: item.title,
            price: item.price,
            img_url: item.img_url,
            item_modal_visible: !this.state.item_modal_visible
        })
    };

    getCard = (item) => {
        return (
            <Card
                onClick={this.handleClick.bind(this,item)}
                style={{margin: "0.5em", width:"30%"}}
                hoverable
                cover={<img alt="img" style={{height: "100%"}} src={item.img_url} />}>
                <Card.Meta
                    title={item.title}
                    description={"$"+item.price} />
            </Card>);
    };

    itemHandler = (action) => {
        if (action === "cancel"){
            this.setState({
                item_modal_visible: !this.state.item_modal_visible,
            });
        }else { // toggle option
            this.item_included[this.state.title] = !this.item_included[this.state.title];

            if (this.item_included[this.state.title])
                this.setState({
                    item_modal_visible: !this.state.item_modal_visible,
                    count: this.state.count + 1,
                    total_price: this.calculateAmount()
                });
            else
                this.setState({
                    item_modal_visible: !this.state.item_modal_visible,
                    count: this.state.count - 1,
                    total_price: this.calculateAmount()
                });
        }
    };

    toggleCartVisibility = () => {
        this.setState({
            checkout_visible: !this.state.checkout_visible
        })
    };

    uploadFile = file => {
        uploadMedia(file, memorial_url)
            .done(function(response) {
                if (response.success) {
                    console.log('file uploaded');
                } else {
                    notification.error({
                        message: 'Media upload failed',
                        description: response.message,
                        placement: 'bottomRight',
                    });
                }
            })
            .fail((error) => {
                notification.error({
                    message: 'Media upload failed',
                    description: (error.responseJSON && error.responseJSON.message) ? error.responseJSON.message : "Something went wrong, Please try again later.",
                    placement: 'bottomRight',
                });
            });
    };

    componentDidMount() {
        this.audio.play();

        getMemorial(memorial_url)
            .done((response) => {
                if (response.success) {

                    response.memorial.registry_items.forEach(itm => {
                        this.item_included[itm.name] = false
                    });

                    this.setState({
                        loading: false,
                        memorial_title: response.memorial.title,
                        date: response.memorial.date,
                        guest_message: response.memorial.guest_msg,
                        registry_items: response.memorial.registry_items,
                    });
                } else {
                    notification.error({
                        message: 'Unable to fetch memorial',
                        description: response.message,
                        placement: 'bottomRight',
                    });
                    this.setState({
                        loading: false
                    });
                }
            })
            .fail((error) => {
                notification.error({
                    message: 'Unable to fetch memorial',
                    description: (error.responseJSON && error.responseJSON.message) ? error.responseJSON.message : "Something went wrong, Please try again later.",
                    placement: 'bottomRight',
                });
                this.setState({
                    loading: false
                });
            });
    }

    completePayment = (token) => {
        updatePaymentWithServer(
            memorial_url, token.created, this.state.total_price,
            token.id, token.card.id, token.email, this.item_included)
            .done((response) => {
                if (response.success) {
                    notification.success({
                        message: 'Payment Successful',
                        placement: 'bottomRight',
                    });
                    this.setState({
                        count: 0
                    });
                    this.toggleCartVisibility();
                } else {
                    notification.error({
                        message: 'Payment Failed',
                        description: response.message,
                        placement: 'bottomRight',
                    });
                }
            })
            .fail((error) => {
                notification.error({
                    message: 'Payment Failed',
                    description: (error.responseJSON && error.responseJSON.message) ? error.responseJSON.message : "Something went wrong, Please try again later.",
                    placement: 'bottomRight',
                });
            });
    };

    homePage(){
        window.location.href = "/";
    }

    calculateAmount = () => { // in dollars
        const included = this.item_included;
        let cost = 0;
        this.state.registry_items.forEach((obj, index)=>{
            if (included[obj.title])
                cost += obj.price;
        });
        return cost;
    };

    render() {
        if (this.state.loading)
            return (
                <div className="loadingDiv">
                    <Spin size="large" />
                </div>
            );

        return(
            <Layout>
                {/*** A custom header for memorial page ***/}
                <div className="header flexSpaceBetween">
                    <div className="flexVCenter cursor" onClick={this.homePage}>
                        <img alt="company logo" className="logo" src="/logo64.png"/>
                        <div className="l">RestEasy • Registry</div>
                    </div>

                    <div className="flexVCenter">
                        <div className="flexVCenter mr-3">
                            <div className="m">0-123-456-789</div>
                            <PhoneOutlined className="m"/>
                        </div>
                        <Badge count={this.state.count}>
                            <ShoppingCartOutlined className="xxl cursor" onClick={this.toggleCartVisibility}/>
                        </Badge>
                    </div>
                </div>

                <Divider id="mDiv"/>

                <Layout.Content>
                        {/* --- Banner div --- */}
                        <div id="bannerDiv">
                            <div id="bannerImg">
                                <div id="title">{this.state.memorial_title}</div>
                                <div id="date">{this.state.date}</div>
                            </div>

                            {this.state.guest_message !== '' &&
                                <div id="guest_msg">{this.state.guest_message}</div>
                            }
                        </div>


                        {/* --- list of registry items --- */}
                        <List
                            id="itemsDiv"
                            grid={{gutter: 0}}
                            dataSource={this.state.registry_items}
                            renderItem={item => this.getCard(item)}
                        />


                        {/* --- registry item modal --- */}
                        <Modal
                            width="60%"
                            centered
                            okText={this.item_included[this.state.title]?"Remove":"Add"}
                            title={this.item_included[this.state.title]?"Remove from cart":"Add to cart"}
                            visible={this.state.item_modal_visible}
                            onCancel={this.itemHandler.bind(this, "cancel")}
                            onOk={this.itemHandler.bind(this, "toggle")}>
                            <Row>
                                <Col
                                    style={{overflow: "hidden"}}
                                    span={8}>
                                    <Upload
                                        name="avatar"
                                        listType="picture-card"
                                        className="avatar-uploader"
                                        showUploadList={false}
                                        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                                    >
                                        <img src={this.state.img_url} alt="avatar" style={{ height: '25vh' }} />
                                    </Upload>
                                </Col>
                                <Col span={15} offset={1}>
                                    <h3>Item: {this.state.title}</h3>
                                    <Divider style={{height: "1.5px", color:"#777"}}/>
                                    <h4>Price: ${this.state.price}</h4>
                                </Col>
                            </Row>
                        </Modal>


                        {/* --- cart modal --- */}
                        <Modal
                            width="60%"
                            centered
                            title="Checkout"
                            visible={this.state.checkout_visible}
                            onCancel={this.toggleCartVisibility}
                            onOk={this.toggleCartVisibility}
                            footer={
                                <StripeCheckout
                                    token={this.completePayment}
                                    stripeKey={STRIPE_PUBLIC_KEY}
                                    name="RestEasy"
                                    description="Create a digital memorial"
                                    image="/logo196.png" // the pop-in header image (default none)
                                    panelLabel="Pay" // prepended to the amount in the bottom pay button
                                    amount={this.state.total_price*100} // cents
                                    currency="USD"
                                />
                            }
                        >
                            <Table
                                columns={columns}
                                dataSource={this.state.registry_items.filter(itm => this.item_included[itm.title])}
                                rowKey={itm => itm.img_url} />
                        </Modal>

                        {/*  --- Upload media ---  */}
                        <div id="uploadMedia">
                            <div id="title">
                                Share some of your favorite memories
                            </div>
                            <Card id="card">
                                <Upload.Dragger action={this.uploadFile} id="uploader" multiple>
                                    <p className="ant-upload-drag-icon">
                                        <InboxOutlined />
                                    </p>
                                    <p className="ant-upload-text">Upload photos and videos</p>
                                </Upload.Dragger>
                            </Card>
                        </div>
                </Layout.Content>

                <Footer />
            </Layout>
        )
    }
}

export default Memorial;
