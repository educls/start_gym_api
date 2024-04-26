import express from 'express';
const Router = express.Router();
const recovery_password_controller = require('../controllers/recovery_password_controller')

Router.post('/', recovery_password_controller.post);

module.exports = Router;