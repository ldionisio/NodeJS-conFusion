const express = require('express');
const bodyParser = require('body-parser');

const promoRouter = express.Router();

promoRouter.use(bodyParser.json());

promoRouter.route('/')
.all((req,res,next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req,res,next) => {
    res.end('Will send all the promotions to you!');
})
.post((req, res, next) => {
    res.end('Will add the promotions: ' + req.body.name + ' with details: ' + req.body.description);
})
.put((req, res, next) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /promotions');
})
.delete((req, res, next) => {
    res.end('Deleting all promotions');
});

promoRouter.route('/:promoId')
.get((req,res,next) =>{
    res.end('Sending promotion with id: ' + req.params.promoId);
})

.put((req,res,next) =>{

    res.end('Updating the promotion: ' + req.params.promoId + ' with details: ' + req.body.description);
})

.post((req,res,next) =>{
    res.statusCode = 403;
    res.end('POST operation not supported on /promotions/' + req.params.promoId);
})

.delete((req,res,next) => {
    res.end('Deleting the promotion with id: ' + req.params.promoId);
})

module.exports = promoRouter;