import express from 'express';
const Router = express.Router();
const users_controller = require('../controllers/users_controllers')
const auth_verify = require('../middleware/auth_verify')

Router.post('/', users_controller.post);

Router.post('/sign-up-professor', auth_verify, users_controller.signUpProfessor);

Router.get('/sign-up-aluno/:token/:name/:email/:password', auth_verify, users_controller.signUpAluno);

Router.put('/edit-user', auth_verify, users_controller.putUser);

Router.post('/reset-password', users_controller.postResetPassword);

Router.get('/get-user-info', auth_verify, users_controller.get);

Router.get('/get-info-professores', auth_verify, users_controller.getInfoProfessores);

Router.get('/get-info-alunos', auth_verify, users_controller.getInfoAlunos)

Router.post('/send-questionary/:type', auth_verify, users_controller.sendQuestionary);

Router.get('/get-questionary/:type', auth_verify, users_controller.getQuestionary);

module.exports = Router;


