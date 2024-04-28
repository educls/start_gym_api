import express from 'express';
const Router = express.Router();
const confirm_email_controller = require('../controllers/confirm_email_controller')

Router.get('/:token', confirm_email_controller.get);


module.exports = Router;