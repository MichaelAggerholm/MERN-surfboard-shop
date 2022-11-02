const User = require('../models/user');
const passport = require("passport");

module.exports = {
    // POST /users/register
    async postRegister(req, res, next) {
        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            image: req.body.image
        });

        await User.register(newUser, req.body.password);
        res.redirect('/');
    },
    // POST /users/login
    postLogin(req, res, next) {
        passport.authenticate('local', {
            successRedirect: '/',
            failureRedirect: '/users/login'
        })(req, res, next);
    },
    // POST /users/logout
    postLogout(req, res, next) {
        req.logout((err) => {
            if (err) {
                return next(err);
            }
            res.redirect('/');
        });
    }
}