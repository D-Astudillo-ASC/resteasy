import React from "react";
import {Button, Card, Typography} from "antd";

export default class Q9 extends React.Component {
    state = {
        name: localStorage.getItem('first_name')
    };

    onNameChange = (name) => {
        this.setState({
            name: name
        })
    };

    render() {
        return (
            <div style={{width: "100%", textAlign: "center"}}>
                <div style={{fontSize: "2em", marginBottom: "0.5em"}}>
                    Registry Flow
                </div>
                <div style={{display: "flex", justifyContent: "center"}}>
                    <Card>
                        <div style={{display: "flex", justifyContent: "space-between"}}>
                            <div style={{textAlign: "left"}}>
                                <Typography.Paragraph style={{fontSize: "2em"}} editable={{onChange: this.onNameChange}}>
                                    {this.state.name}
                                </Typography.Paragraph>
                                <Typography.Paragraph style={{fontSize: "2em"}} editable={{onChange: this.onNameChange}}>
                                    Story
                                </Typography.Paragraph>
                                <Typography.Paragraph style={{fontSize: "1em"}} editable={{onChange: this.onNameChange}}>
                                    Here should be the description
                                </Typography.Paragraph>
                            </div>
                            <div style={{paddingLeft: "2em"}}>
                                <img src="/img/diamond.jpg"/>
                            </div>
                        </div>

                    </Card>
                </div>

                <div style={{display: "flex", justifyContent: "space-between"}}>
                    <Button type="primary" onClick={this.props.prev}>Previous</Button>
                    <Button type="primary" onClick={this.props.next}>Continue</Button>
                </div>
            </div>);
    }
}
