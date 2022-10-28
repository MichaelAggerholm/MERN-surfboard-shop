const mongoose = require('mongoose');
// TODO: FIX passport-local-mongoose
const passportLocalMongoose = require('passport-local-mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    email: String,

});

userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', userSchema)