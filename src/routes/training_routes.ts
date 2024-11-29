import { router } from '../routes';
import { createTrainingController } from '../useCases/Training/CreateTraining';
import { deleteTrainingController } from '../useCases/Training/DeleteTraining';
import { getTrainingController } from '../useCases/Training/GetTraining';
import { getTrainingByTeacherIdController } from '../useCases/Training/GetTrainingByTeacherId';
import { getTrainingsByIdsController } from '../useCases/Training/GetTrainingsByIds';
import { createTrainingExerciseController } from '../useCases/Training/TrainingExercise/CreateTrainingExercise';
import { deleteTrainingExerciseController } from '../useCases/Training/TrainingExercise/DeleteTrainingExercise';
import { getTrainingExerciseController } from '../useCases/Training/TrainingExercise/GetTrainingExercise';
import { createTrainingStudentController } from '../useCases/Training/TrainingStudent/CreateTrainingStudent';
import { deleteTrainingStudentController } from '../useCases/Training/TrainingStudent/DeleteTrainingStudent';
import { getTrainingStudentController } from '../useCases/Training/TrainingStudent/GetTrainingStudent';
const auth_verify = require('../middleware/auth_verify')

////////////////////
////////treino//////
////////////////////

router.post('/create-training', (request, response) => { return createTrainingController.handle(request, response) });
router.get('/get-training', (request, response) => { return getTrainingController.handle(request, response) });
router.post('/get-trainings-by-ids', (request, response) => { return getTrainingsByIdsController.handle(request, response) });
router.delete('/delete-training/:id', (request, response) => { return deleteTrainingController.handle(request, response) });
router.get('/get-training-by-teacher-id/:teacherId', (request, response) => { return getTrainingByTeacherIdController.handle(request, response) });

////////////////////
//treino-aluno//////
////////////////////

router.post('/create-training-aluno', (request, response) => { return createTrainingStudentController.handle(request, response) });
router.get('/get-training-aluno/:user_id', auth_verify, (request, response) => { return getTrainingStudentController.handle(request, response) });
router.delete('/delete-training-aluno/:id', (request, response) => { return deleteTrainingStudentController.handle(request, response) });

////////////////////
//treino-exercise///
////////////////////

router.post('/create-training-exercise', (request, response) => { return createTrainingExerciseController.handle(request, response) });
router.get('/get-training-exercise/:id', (request, response) => { return getTrainingExerciseController.handle(request, response) });
router.delete('/delete-training-exercise/:id', (request, response) => { return deleteTrainingExerciseController.handle(request, response) });


module.exports = router;