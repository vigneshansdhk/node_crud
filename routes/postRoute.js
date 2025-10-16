
const express = require('express');

const router = express.Router();

const postController = require('../controllers/postController');

const { verifyToken } = require('../middleware/authMiddleware');

const { userValidationRules, validate } = require('../validation/user.validation');


router.get('/list', postController.index);
router.post('/create', postController.createPost);
router.get('/get-single-data/:id', postController.getPost);
router.post('/update/:id', postController.updatePost);
router.get('/delete/:id', postController.deletePost);

//Register Routes

router.post('/register', userValidationRules(), validate, postController.createUser);
router.post('/logout', verifyToken, postController.logoutUser);

module.exports = router;
