import React from "react";
import StripeCheckout from 'react-stripe-checkout';
import {Button, notification} from "antd";
import * as constants from "../../../constants";
import {saveStripeToken} from "../QuestionsAPI";

export default class Payment extends React.Component {
    onToken = (token) => {
        // console.log(token);
        saveStripeToken(token.id, token.email)
            .done((response) => {
                if (response.success) {
                    notification.success({
                        message: 'Payment Successful',
                        placement: 'bottomRight',
                    });
                    this.props.next();
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

    render() {
        return (
            <div style={{width: "100%", textAlign: "center"}}>
                <div style={{fontSize: "2em", marginBottom: "0.5em"}}>
                    Just $20. One time. Forever.
                </div>
                <div style={{display: "flex", justifyContent: "center"}}>
                    <StripeCheckout
                        token={this.onToken}
                        stripeKey={constants.STRIPE_PUBLIC_KEY}
                        name="RestEasy"
                        description="Create a digital memorial"
                        image="/logo196.png" // the pop-in header image (default none)
                        panelLabel="Pay" // prepended to the amount in the bottom pay button
                        amount={20*100} // cents
                        currency="USD"
                    />
                </div>
                <div className="flexHCenter mt-4">
                    <Button type="primary" className="myButton mr-4" onClick={this.props.prev}>Back</Button>
                </div>
            </div>);
    }
}
