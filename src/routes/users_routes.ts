import express from 'express';
const Router = express.Router();
const users_controller = require('../controllers/users_controllers')

Router.post('/', users_controller.post);

Router.post('/reset-password', users_controller.postResetPassword);


module.exports = Router;


