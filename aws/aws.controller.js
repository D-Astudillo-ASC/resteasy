const express = require('express');
const router = express.Router();
const s3Service = require('./aws.service');

// routes
router.post('/signS3_upload', signS3_upload);
router.post('/addImgDB', addImgDB)
router.post('/signS3_get', signS3_get)

module.exports = router;


function signS3_upload(req, res, next) {
  s3Service.signS3_upload(req)
      .then(data => data.signedRequest ? res.json(data) : res.status(400).json({ message: 'Error signing URL' }))
      .catch(err => next(err));
}

function addImgDB(req, res, next) {
  s3Service.addImgDB(req)
      .then(user => user ? res.json(user) : res.status(400).json({ message: 'Error Adding to DB' }))
      .catch(err => next(err));
}

function signS3_get(req, res, next) {
  s3Service.signS3_get(req.body)
      .then(data => res.json(data))
      .catch(err => next(err));
}
