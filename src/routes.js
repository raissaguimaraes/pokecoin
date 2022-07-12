const express = require('express');
const isLoggedIn = require('./middleware/isLoggedIn');
const routes = express.Router();

routes.post('/login', require('./controllers/login'));

routes.get('/user', isLoggedIn, require('./controllers/user'));

module.exports = routes;