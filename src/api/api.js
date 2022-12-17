const express = require('express');
const api = express.Router();

const ExampleController = require('../controllers/ExampleController');
const { ExampleMiddleware } = require('../middlewares/ExampleMiddleware');

api.get('/example',ExampleMiddleware,ExampleController.PostController);

api.get('*',(req,res)=>{
    res.send('Invalid API point');
});

module.exports = api;