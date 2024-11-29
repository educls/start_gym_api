import { router } from '../routes';
import { getCategoryMusclesController } from '../useCases/CategoryMuscular/GetCategoryMuscles';
import { createExerciseController } from '../useCases/Exercise/CreateExercise';
import { getExecisesController } from '../useCases/Exercise/GetExercises';
import { getExercisesByIdsController } from '../useCases/Exercise/GetExercisesByIds';

router.post('/create-exercise', (request, response) => { return createExerciseController.handle(request, response) });
router.get('/get-exercise/:id');
router.get('/get-exercises', (request, response) => { return getExecisesController.handle(request, response) });
router.put('/edit-exercise/:id');
router.delete('/delete-exercise/:id');

router.post('/get-exercises-by-ids', (request, response) => { return getExercisesByIdsController.handle(request, response) });

router.get('/get_category_muscles', (request, response) => { return getCategoryMusclesController.handle(request, response) });

module.exports = router;