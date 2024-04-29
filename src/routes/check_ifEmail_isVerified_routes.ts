import express from 'express';
const Router = express.Router();
const checkIfEmailisVerified_controller = require('../controllers/check_ifEmail_isVerified_controller')

Router.get('/:email', checkIfEmailisVerified_controller.get);
Router.delete('/:email', checkIfEmailisVerified_controller.delete);


module.exports = Router;