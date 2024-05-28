import express from 'express';
const Router = express.Router();
const login_controller = require('../controllers/login_controller')

/**
 * @swagger
 * /login/:
 *   post:
 *     summary: Retorna o token de auth
 *     responses:
 *       200:
 *         description: LOGIN
 *         content:
 *           application/json:
 *             schema:
 *               items:
 *                 type: object
 *                 properties:
 *                   email:
 *                     type: string
 *                     example: email@email.com
 *                   password:
 *                     type: string
 *                     example: senha123
 */
Router.post('/', login_controller.post);


module.exports = Router;

