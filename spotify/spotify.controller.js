// const express = require('express');
// const router = express.Router();
// const spotifyService = require('./spotify.service.js');


// router.post('/generateRandomString', generateRandomString);
// router.post('/spotifyLogin', spotifyLogin);
// router.post('/callback', callback);
// router.post('/refresh_token', refresh_token);

// module.exports = router;

// function generateRandomString(req, res, next) {
//     spotifyService.generateRandomString(req.body)
//         .then((status) => {
//             status ? res.json({message: "success"}) : res.json({message: "failed"})})
//         .catch(err => next(err));
// }


// function spotifyLogin(req, res, next) {
//     spotifyService.spotifyLogin(req.body)
//         .then((status) => {
//             status ? res.json({message: "success"}) : res.json({message: "failed"})})
//         .catch(err => next(err));
// }

// function callback(req, res, next) {
//     spotifyService.callback(req.body)
//         .then((status) => {
//             status ? res.json({message: "success"}) : res.json({message: "failed"})})
//         .catch(err => next(err));
// }

// function refresh_token(req, res, next) {
//     spotifyService.refresh_token(req.body)
//         .then((status) => {
//             status ? res.json({message: "success"}) : res.json({message: "failed"})})
//         .catch(err => next(err));
// }