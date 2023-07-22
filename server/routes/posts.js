const router = require('express').Router();
const checkLogin = require('../middlewares/checkLogin');
const createPost = require('../controller/post-controller/createPost');
const getPost = require('../controller/post-controller/getPost');

let Post = require('../models/posts.model');


router.post('/createPost',checkLogin, createPost)
router.get('/getPost',checkLogin, getPost)


module.exports = router