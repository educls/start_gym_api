import { router } from '../routes';
import { createTrainingController } from '../useCases/Training/CreateTraining';

////////////////////
////////treino//////
////////////////////

router.post('/create-training', (request, response) => { return createTrainingController.handle(request, response) });
router.get('/get-training');
router.delete('/delete-training');

////////////////////
//treino-aluno//////
////////////////////

router.post('/create-training-aluno');
router.get('/get-training-aluno');
router.delete('/delete-training-aluno');

////////////////////
//treino-exercise///
////////////////////

router.post('/create-training-exercise');
router.get('/get-training-exercise');
router.delete('/delete-training-exercise');


module.exports = router;