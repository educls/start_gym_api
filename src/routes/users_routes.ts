import { router } from '../routes';
import { activeInactiveUserController } from '../useCases/User/ActiveInactiveUser';
import { createUserController } from '../useCases/User/CreateUser';
import { editUserController } from '../useCases/User/EditUser';
import { getStudentActiveController } from '../useCases/User/GetStudentActive';
import { getStudentInactiveController } from '../useCases/User/GetStudentInactive';
import { getUserController } from '../useCases/User/GetUser';
const users_controller = require('../controllers/users_controllers')
const auth_verify = require('../middleware/auth_verify')

router.post('/', auth_verify, (request, response) => { return createUserController.handle(request, response) });

router.get('/get-user-info', auth_verify, (request, response) => { return getUserController.handle(request, response) });

router.put('/edit-user', auth_verify, (request, response) => { return editUserController.handle(request, response) });



router.get('/get-alunos-ativos', auth_verify, (request, response) => { return getStudentActiveController.handle(request, response) });

router.get('/get-alunos-inativos', auth_verify, (request, response) => { return getStudentInactiveController.handle(request, response) });



router.get('/get-info-professores', auth_verify, users_controller.getInfoProfessores);

router.get('/get-info-alunos', auth_verify, users_controller.getInfoAlunos);

router.post('/sign-up-professor', auth_verify, users_controller.signUpProfessor);

router.get('/sign-up-aluno/:token/:name/:email/:password', auth_verify, users_controller.signUpAluno);

router.post('/reset-password', users_controller.postResetPassword);

router.post('/send-questionary/:type/:idAluno', auth_verify, users_controller.sendQuestionary);

router.post('/send-questionary/:type/', auth_verify, users_controller.sendQuestionary);

router.get('/get-questionary/:type/:idAluno', auth_verify, users_controller.getQuestionary);

router.get('/inative-active-user/:idAluno', auth_verify, (request, response) => { return activeInactiveUserController.handle(request, response) });

module.exports = router;


