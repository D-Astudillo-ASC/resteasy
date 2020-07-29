const config = require('../config.json');
const db = require('../_helpers/db');

const User = db.User;
const stripe = require("stripe")(config.stripeSecretKey);
const uuid = require("uuid/v4");

module.exports = {
    checkout,
};

async function checkout(body) {
    console.log("Request:", body);

    let error;
    let status;
    try {
        const { product, token } = body;


        const customer = await stripe.customers.create({
            email: token.email,
            source: token.id
        });

        const idempotency_key = uuid();
        const charge = await stripe.charges.create(
            {
                amount: 100,
                currency: "usd",
                customer: customer.id,
                receipt_email: token.email,
                description: `Purchased the RestEasy memorial`,
                shipping: {
                    name: token.card.name,
                    address: {
                        line1: token.card.address_line1,
                        line2: token.card.address_line2,
                        city: token.card.address_city,
                        country: token.card.address_country,
                        postal_code: token.card.address_zip
                    }
                }
            },
            {
                idempotency_key
            }
        );
        console.log("Charge:", { charge });
        status = true;
    } catch (error) {
        console.error("Error:", error);
        status = false;
    }

    return status
}