import { router } from '../routes';

router.post('/create-category');
router.get('/get-category/:id');
router.get('/get-categories');
router.put('/edit-category/:id');
router.delete('/delete-category/:id');

module.exports = router;