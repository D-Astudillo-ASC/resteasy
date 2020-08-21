import React from 'react';
import {Button, Form, Input} from "antd";

class CashFundInfoPopup extends React.Component {

    saveData = values => {
        this.props.closePopup();       
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
                    <h3 style={itemHeader}>Cash Fund Details</h3>
                    <div style={{margin: "30px", height: "500px", overflow: "auto hidden"}}>
                        <div style={{fontSize: "20px", width: "80%", margin: "auto", marginBottom: "30px"}}>
                        If you can’t find what you’re looking for in our Registry, create a custom Cash Fund and make it your own. Define your own purpose, add a description and images if you like, and deploy it to your registry.
                        </div> 
                        <br />

                        <div style={{fontSize: "20px",  width: "80%", margin: "auto", marginBottom: "30px"}}>
                        We often see this used for service expenses, travel bills, medical bills, college funds, loan payments, or estate management fees, but we encourage you to use it for anything.
                        </div> 
                        <br />
                        <div style={{fontSize: "20px",  width: "80%", margin: "auto", marginBottom: "230px"}}>
                        We’ll hold the money for you while your contributors are donating. When you’re ready, you can easily withdraw the money into your bank account.
                        </div> 
                    </div>
                    <Button type="primary" onClick={this.props.closePopup} style={{ borderRadius: "10px", marginBottom: "20px" }}>Exit</Button>
                    
            </div>
            </div >
        );
    }
}

export default CashFundInfoPopup;