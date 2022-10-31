const express = require('express');
const router = express.Router();
const {postRegister} = require('../controllers/users');
const {errorHandler} = require('../middleware/users');

/* GET /register */
router.get('/register', (req, res, next) => {
    res.send('/register');
});

/* POST /register */
router.post('/register', errorHandler(postRegister));

/* GET /login */
router.get('/login', (req, res, next) => {
    res.send('/login');
});

/* POST /login */
router.post('/login', (req, res, next) => {
    res.send('/login');
});

/* GET /profile */
router.get('/profile', (req, res, next) => {
    res.send('/profile');
});

/* PUT /profile/:user_id */
router.put('/profile/:user_id', (req, res, next) => {
    res.send('/profile/:user_id');
});

/* GET /forgot */
router.get('/forgot', (req, res, next) => {
    res.send('/forgot');
});

/* PUT /forgot */
router.put('/forgot', (req, res, next) => {
    res.send('/forgot');
});

/* GET /reset/:token */
router.get('/reset/:token', (req, res, next) => {
    res.send('/reset/:token');
});

/* PUT /reset/:token */
router.put('/reset/:token', (req, res, next) => {
    res.send('/reset/:token');
});

module.exports = router;
