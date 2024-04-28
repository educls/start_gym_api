import express from 'express';
const Router = express.Router();
const verify_email_controller = require('../controllers/verify_email_controller')


Router.post('/', verify_email_controller.post);


module.exports = Router;