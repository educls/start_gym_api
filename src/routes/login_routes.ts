import express from 'express';
const Router = express.Router();
const login_controller = require('../controllers/login_controller')

/**
 * @swagger
 * /login:
 *   post:
 *     summary: Retorna o token de auth
 *     requestBody:
 *       description: Credenciais de login
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 example: teste@teste.br
 *               password:
 *                 type: string
 *                 example: 111
 *     responses:
 *       200:
 *         description: LOGIN
 *         tags: Login
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 mensagem:
 *                   type: string
 *                   example: Login bem-sucedido
 *                 token:
 *                   type: string
 *                   example: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9
 *                 tentativas:
 *                   type : number
 *                   exemple: 0
 */
Router.post('/', login_controller.post);


module.exports = Router;

