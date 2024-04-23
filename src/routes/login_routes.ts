import express from 'express';
const Router = express.Router();
const login_controller = require('../controllers/login_controller')

Router.post('/', login_controller.post);


module.exports = Router;