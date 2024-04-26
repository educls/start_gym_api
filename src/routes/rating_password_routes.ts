import express from 'express';
const Router = express.Router();
const rating_password_controller = require('../controllers/rating_password_controller')

Router.post('/', rating_password_controller.post);

module.exports = Router;