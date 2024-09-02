import { router } from '../routes';

router.post('/create-exercise');
router.get('/get-exercise/:id');
router.get('/get-exercises');
router.put('/edit-exercise/:id');
router.delete('/delete-exercise/:id');

module.exports = router;