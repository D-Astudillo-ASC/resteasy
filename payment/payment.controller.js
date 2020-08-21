const express = require('express');
const router = express.Router();
const paymentService = require('./payment.service');


router.post('/checkout', checkout);

module.exports = router;

function checkout(req, res, next) {
    paymentService.checkout(req.body)
        .then((status) => {
            status ? res.json({message: "success"}) : res.json({message: "failed"})})
        .catch(err => next(err));
}