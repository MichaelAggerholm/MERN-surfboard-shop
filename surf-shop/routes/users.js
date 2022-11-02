const express = require('express');
const router = express.Router();
const {postRegister, postLogin, postLogout} = require('../controllers/users');
const {errorHandler} = require('../middleware');

/* GET /users/register */
router.get('/register', (req, res, next) => {
    res.send('/users/register');
});

/* POST /users/register */
router.post('/register', errorHandler(postRegister));

/* GET /users/login */
router.get('/login', (req, res, next) => {
    res.send('get /users/login');
});

/* POST /users/login */
router.post('/login', postLogin);

/* POST /users/logout */
router.post('/logout', postLogout);


/* GET /users/profile */
router.get('/profile', (req, res, next) => {
    res.send('/users/profile');
});

/* PUT /users/profile/:user_id */
router.put('/profile/:user_id', (req, res, next) => {
    res.send('/users/profile/:user_id');
});

/* GET /users/forgot */
router.get('/forgot', (req, res, next) => {
    res.send('/users/forgot');
});

/* PUT /users/forgot */
router.put('/forgot', (req, res, next) => {
    res.send('/users/forgot');
});

/* GET /users/reset/:token */
router.get('/reset/:token', (req, res, next) => {
    res.send('/users/reset/:token');
});

/* PUT /users/reset/:token */
router.put('/reset/:token', (req, res, next) => {
    res.send('/users/reset/:token');
});

module.exports = router;
