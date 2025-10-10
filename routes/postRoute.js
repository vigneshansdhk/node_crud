
const express = require('express');

const router = express.Router();

const postController = require('../controllers/postController');


router.get('/list',postController.index);
router.post('/create',postController.createPost);
router.get('/get-single-data/:id',postController.getPost);
router.post('/update/:id',postController.updatePost);
router.get('/delete/:id',postController.deletePost);

module.exports = router;
