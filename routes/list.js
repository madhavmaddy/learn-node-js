const express = require('express');
const route = express.Router();
const Joi = require('Joi')

//Get request
route.get('/', (req, res) => {
    res.send('GET request to the homepage')
  });

  module.exports = route;