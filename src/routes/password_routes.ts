const express = require('express');
const router = express.Router();
const password_controller = require('../controllers/password_controller')

router.post('/', password_controller.post);

module.exports = router;