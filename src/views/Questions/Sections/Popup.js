import React from 'react';
import {Button, Form, Input} from "antd";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

toast.configure();

class Popup extends React.Component {

    saveData = values => {
        localStorage.setItem("item_name", values.item_name);
        localStorage.setItem("item_price", values.item_price);
        localStorage.setItem("item_note", values.item_note);
        this.props.closePopup();
        //toast("Wow so easy !", { type: "success" });
        toast(`Added to your registry! Item: ${values.item_name}  Price: ${values.item_price}`, { type: "success" });
        
    };

    render() {

        const popupStyle = {  
            position: "fixed", 
            width: "100%",  
            height: "100%",  
            top: "0",  
            left: "0",  
            right: "0",  
            bottom: "0",  
            margin: "auto",  
            backgroundColor: "rgba(0,0,0, 0.5)",
            zIndex: "1"
          }  
          const popupInner =  {  
            position: "absolute",  
            left: "10%",
            right: "10%" , 
            top: "20%",  
            bottom: "10%" ,
            margin: "auto", 
            borderRadius: "20px" , 
            background: "white",
            textAlign: "center"
          }

          const inputStyle = {
            width: "100%",
            background: "#FFFFFF",
            border: "1px solid #8FC36B",
            boxSizing: "border-box",
            borderRadius: "10px"

          }

          const itemHeader = {
            textAlign: "center", 
            marginTop: "20px", 
            fontWeight: "bold"
          }
        return (
            <div style={popupStyle} className='popup'>
                <div style={popupInner} className='popup\_inner'>
                    <h3 style={itemHeader}>Add Cash Fund</h3>
                    <h6>{this.props.text}</h6>
                    <br />
                    <Form onFinish={this.saveData}>
                        <Form.Item name="item_name"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please enter an item',
                                },
                            ]}>
                            <div style={{ width: "90%", margin: "auto" }}>
                                <h6 style={{ textAlign: "left" }}>Item Name</h6>
                                <Input placeholder="Ex. Family hotel stay during final days in hospital" style={inputStyle} />
                            </div>
                        </Form.Item>
                        <br />
                        <Form.Item name="item_price"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please enter a cash amount',
                                },
                            ]}>
                            <div style={{ width: "90%", margin: "auto" }}>
                                <h6 style={{ textAlign: "left" }}>Total cash amount</h6>
                                <Input placeholder="Ex. $1000.00" style={inputStyle} />
                            </div>
                        </Form.Item>
                    <br />
                    <Form.Item name="item_note">
                        <div style={{ width: "90%", margin: "auto" }}>
                            <h6 style={{ textAlign: "left" }}>Note for your community (optional)</h6>
                            <Input placeholder="Tell friends and family why you want this item" style={inputStyle} />
                        </div>
                    </Form.Item>
                    <div style={{ display: "flex", justifyContent: "center" }}>
                        <Button type="primary" onClick={this.props.closePopup} style={{ borderRadius: "10px", margin: "5px" }}>Cancel</Button>
                        <Form.Item>
                            <Button type="primary" htmlType="submit" style={{ borderRadius: "10px", margin: "5px" }}>Add to Reigstry</Button>
                        </Form.Item>
                    </div>
                    </Form>
            </div>
            </div >
        );
    }
}

export default Popup;