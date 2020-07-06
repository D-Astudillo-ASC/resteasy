import React from "react";
import {Button, List, Card, Modal, Row, Col, notification, Upload, Divider, Input, Badge} from "antd";
// import PlusCircleOutlined from "@ant-design/icons/lib/icons/PlusCircleOutlined";

const data = [
    // {
    //     title: 'create',
    //     img_url: '/img/diamond.jpg',
    // },
    {
        title: 'Cemetery Arrangements',
        img_url: '/img/cemetery.png',
        price: 300
    },
    {
        title: 'Casket',
        img_url: '/img/casket.jpg',
        price: 100
    },
    {
        title: 'Urn',
        img_url: '/img/urn.jpg',
        price: 50
    },
    {
        title: 'Funeral Arrangements',
        img_url: '/img/funeral.jpg',
        price: 200
    }
];

export default class RegistryItems extends React.Component {
    constructor(props) {
        super(props);
        this.registry = JSON.parse(localStorage.getItem('registry_items')) || [];
        this.state = {
            title: '',
            price: '',
            visible: false
        };

        // dict: item_name -> boolean
        this.item_included = {};
    }
    
    
    componentDidMount() {
        data.forEach(itm => this.item_included[itm.name] = false);
    }

    // returns a modal
    handleClick = (item) => {
        this.setState({
            title: item.title,
            price: item.price,
            img_url: item.img_url,
            visible: !this.state.visible
        })
    };

    getCard = (item) => {
        // if (item.title === 'create')
        //     return (
        //         <Card
        //             onClick={this.handleClick.bind(this,item)}
        //             style={{margin: "0.5em", width:"30%", textAlign: "center", background:"#f8f8f8"}}
        //             hoverable
        //             cover={<PlusCircleOutlined style={{paddingTop:"10vh", paddingBottom:"5vh", fontSize: "10em", color: "#4cc247"}} />}>
        //             <Card.Meta
        //                 title="Create your own cash fund"
        //                 description={<a href="/tmp">How cash fund works?</a>} />
        //         </Card>);
        // else
            return (<Card
                        onClick={this.handleClick.bind(this,item)}
                        style={{margin: "0.5em", width:"25vw"}}
                        hoverable
                        cover={<img alt="img" style={{height: "100%"}} src={item.img_url} />}>
                        <Card.Meta
                            title={item.title}
                            description={<Badge count={this.item_included[item.title] === true?1:0}>{"$"+item.price}</Badge>} />
                    </Card>);
    };

    toggleVisibility = (action) => {
        if (action !== "cancel")
            this.item_included[this.state.title] = !this.item_included[this.state.title];
        this.setState({
            visible: !this.state.visible,
        });
    };

    handleItem = () => {
        const item = {
            title: this.state.title,
            price: this.state.price,
            img_url: this.state.img_url,
        };

        if (this.item_included[this.state.title]) {
            this.registry.splice(this.registry.indexOf(item),1);
            notification.info({
                message: item.title + ' removed',
                placement: 'bottomRight',
                duration: 2
            });
        }else{
            this.registry.push(item);
            notification.success({
                message: item.title + ' added',
                placement: 'bottomRight',
                duration: 3
            });
        }
        this.toggleVisibility("!cancel");
    };

    moveOn = () => {
        if (this.registry === [] || this.registry.length === 0)
            notification.warning({
                message: 'In case you missed',
                description: 'You need to add at least one cash fund to move on',
                placement: 'bottomRight',
            });
        else{
            localStorage.setItem('registry_items',JSON.stringify(this.registry));
            this.props.next();
        }
    };

    render() {
        return (
            <div style={{width: "100%"}}>
                <div style={{fontSize: "2em", marginBottom: "0.5em", textAlign: "center"}}>
                    What would help you get through this challenging time?
                </div>
                <div style={{display: "flex", justifyContent: "center"}}>
                    <List
                        grid={{gutter: 0}}
                        dataSource={data}
                        renderItem={item => this.getCard(item)}
                    />
                </div>
                <Modal
                    width="60%"
                    centered
                    okText={this.item_included[this.state.title]?"Remove":"Add"}
                    title={this.item_included[this.state.title]?"Remove from cart":"Add to cart"}
                    visible={this.state.visible}
                    onOk={this.handleItem.bind(this)}
                    onCancel={this.toggleVisibility.bind(this, "cancel")}
                >
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
                        <Col span={16} style={{paddingLeft: "1em"}}>
                            <h3>Add Cash Fund</h3>
                            <Divider style={{height: "1.5px", color:"#777"}}/>
                            <h4>Item Name</h4>
                            <Input defaultValue={this.state.title} />
                        </Col>
                    </Row>
                </Modal>

                <div className="flexHCenter">
                    <Button type="primary" className="myButton mr-4" onClick={this.props.prev}>Back</Button>
                    <Button type="primary" className="myButton" onClick={this.moveOn.bind(this)}>Next</Button>
                </div>
            </div>);
    }
}

