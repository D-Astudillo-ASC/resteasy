const express = require('express');
const router = express.Router();
const templateDigitalMemoryService = require('./templateDigitalMemory.service.js');

router.post('/savetemplate', saveTemplate)
router.get('/gettemplate', getTemplate)
router.get('/getresettemplate', getResetTemplate)
router.post('/savetemplate2', saveTemplate2)
router.get('/gettemplate2', getTemplate2)
router.get('/getresettemplate2', getResetTemplate2)

module.exports = router;

function saveTemplate(req, res, next) {
    templateDigitalMemoryService.saveTemplate(req.body)
        .then((status) => {
            status ? res.json({message: "success"}) : res.json({message: "failed"})})
        .catch(err => next(err));
}

function getTemplate(req, res, next) {
    templateDigitalMemoryService.getTemplate()
        .then((template) => {res.json(template)})
        .catch(err => next(err));
}

function getResetTemplate(req, res, next) {
    templateDigitalMemoryService.getResetTemplate()
        .then((template) => {res.json(template)})
        .catch(err => next(err));
}

function saveTemplate2(req, res, next) {
    templateDigitalMemoryService.saveTemplate2(req.body)
        .then((status) => {
            status ? res.json({message: "success"}) : res.json({message: "failed"})})
        .catch(err => next(err));
}

function getTemplate2(req, res, next) {
    templateDigitalMemoryService.getTemplate2()
        .then((template) => {res.json(template)})
        .catch(err => next(err));
}

function getResetTemplate2(req, res, next) {
    templateDigitalMemoryService.getResetTemplate2()
        .then((template) => {res.json(template)})
        .catch(err => next(err));
}
