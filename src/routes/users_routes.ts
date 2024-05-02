import express from 'express';
const Router = express.Router();
const users_controller = require('../controllers/users_controllers')
const auth_verify = require('../middleware/auth_verify')

Router.post('/', users_controller.post);

Router.post('/reset-password', users_controller.postResetPassword);

Router.get('/get-user-info', auth_verify, users_controller.get);


module.exports = Router;


