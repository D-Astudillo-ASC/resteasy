import React from "react";
import {Button, Card, Radio} from "antd";


export default class Q8 extends React.Component {
    state = {
        template_no: 1
    };

    // getBase64Image(img) {
    //     var canvas = document.createElement("canvas");
    //     canvas.width = img.width;
    //     canvas.height = img.height;
    
    //     var ctx = canvas.getContext("2d");
    //     ctx.drawImage(img, 0, 0);
    
    //     var dataURL = canvas.toDataURL("image/png");
    
    //     return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
    // }

    saveData = () => {
        // console.log('Received values of form: ', values);
        localStorage.setItem("template_no", this.state.template_no);
        //bannerImage = document.getElementById('template-style');
        //imgData = getBase64Image(bannerImage);
        //localStorage.setItem("imgData", this.getBase64Image(document.getElementById('template-style')));
        this.props.next();
        console.log(this.state.curr)
    };

    onChange = (e) => {
        this.setState({
            template_no: e.target.value
        });
    };

    render() {
        return (
            <div style={{width: "100%", textAlign: "center"}}>
                <div style={{fontSize: "2em", marginBottom: "0.5em"}}>
                    Select a template
                </div>
                <div style={{display: "flex", justifyContent: "center"}}>
                    <Radio.Group onChange={this.onChange} value={this.state.template_no}>
                        {/* <Radio value={1}>
                            <Card style={{marginTop: "0.5em"}} hoverable cover={<img alt="img" src="/img/diamond.jpg" />}>
                                <Card.Meta title="Template 1" />
                            </Card>
                        </Radio> */}
                        <Radio value={1}>
                            <Card style={{marginTop: "0.5em", width: "300px", height: "300px"}} hoverable cover={<img alt="img" 
                            id= "template-style" src={require("../../../assets/img/TemplateOneSample.PNG")} style={{width: "100%", height: "100%"}}/>}>
                                <Card.Meta title="Template 1" style={{height: "10px"}} />
                            </Card>
                        </Radio>
                         <Radio value={2}>
                            <Card style={{marginTop: "0.5em"}} hoverable cover={<img alt="img" id= "template-style" src="/img/diamond.jpg" />}>
                                <Card.Meta title="Template 2" />
                            </Card>
                        </Radio>
                    </Radio.Group>
                </div>
                <div style={{fontSize: "1em", padding: "0.5em"}}>
                    You can customize and personalize it later
                </div>
                <div style={{display: "flex", justifyContent: "center"}}>
                    <Button type="primary" onClick={this.props.prev} style={{marginRight: "10px", borderRadius: "10px"}}>Previous</Button>
                    <Button type="primary" onClick={this.saveData} style={{marginLeft: "10px", borderRadius: "10px"}}>Next</Button>
                </div>
            </div>);
    }
}
