const express = require('express');
const router = express.Router({ mergeParams: true });

/* GET reviews index /posts/:id/reviews */
router.get('/', (req, res, next) => {
    res.send('/reviews');
});

/* POST reviews create /posts/:id/reviews */
router.post('/', (req, res, next) => {
    res.send('/reviews');
});

/* GET reviews edit /posts/:id/reviews/:review_id/edit */
router.get('/:review_id/edit', (req, res, next) => {
    res.send('/reviews/:review_id/edit');
});

/* PUT reviews update /posts/:id/reviews/:review_id */
router.put('/:review_id', (req, res, next) => {
    res.send('/reviews/:review_id');
});

/* DELETE reviews destory /posts/:id/reviews/:review_id */
router.delete('/:review_id', (req, res, next) => {
    res.send('DELETE /reviews/:review_id');
});

module.exports = router;