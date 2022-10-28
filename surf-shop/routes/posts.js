const express = require('express');
const router = express.Router();

/* GET posts index /posts */
router.get('/', (req, res, next) => {
    res.send('/posts');
});

/* GET posts new /posts/new */
router.get('/new', (req, res, next) => {
    res.send('/posts/new');
});

/* POST posts create /posts */
router.post('/', (req, res, next) => {
    res.send('/posts');
});

/* GET posts show /posts/:id */
router.get('/:id', (req, res, next) => {
    res.send('/posts/:id');
});

/* GET posts edit /posts/:id/edit */
router.get('/:id/edit', (req, res, next) => {
    res.send('/posts/:id/edit');
});

/* PUT posts update /posts/:id */
router.put('/:id', (req, res, next) => {
    res.send('/posts/:id');
});

/* DELETE posts destory /posts/:id */
router.delete('/:id', (req, res, next) => {
    res.send('/posts/:id');
});

module.exports = router;