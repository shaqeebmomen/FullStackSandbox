const express = require('express');
const router = express.Router();
const postController = require('../../controllers/postController');

// Get Posts
router.get('/', postController.post_get);

// Add Post
router.post('/', postController.post_create);

// Delete Post
router.delete('/:id', postController.post_delete);

module.exports = router;