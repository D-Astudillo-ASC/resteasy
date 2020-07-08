import React from "react";
import StripeCheckout from 'react-stripe-checkout';
import {Button, notification} from "antd";
import * as constants from "../../../constants";
import {saveStripeToken} from "../QuestionsAPI";

export default class Q12 extends React.Component {
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
                    Complete the payment
                </div>
                <div style={{display: "flex", justifyContent: "center"}}>
                    <StripeCheckout
                        token={this.onToken}
                        stripeKey={constants.STRIPE_PUBLIC_KEY}
                        name="RestEasy"
                        description="Create a digital memorial"
                        image="/logo196.png" // the pop-in header image (default none)
                        panelLabel="Pay" // prepended to the amount in the bottom pay button
                        amount={100} // cents
                        currency="USD"
                    />
                </div>
                <div style={{display: "flex", justifyContent: "space-between"}}>
                    <Button type="primary" onClick={this.props.prev}>Previous</Button>
                    <Button type="primary" onClick={this.props.next}>Continue (REMOVE THIS IN FINAL PRODUCT)</Button>
                </div>
            </div>);
    }
}
