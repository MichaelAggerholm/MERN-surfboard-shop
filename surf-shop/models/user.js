const mongoose = require('mongoose');
// TODO: FIX / TJEK passport-local-mongoose library
const passportLocalMongoose = require('passport-local-mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    email: String,
    image: String,
});

userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', userSchema)