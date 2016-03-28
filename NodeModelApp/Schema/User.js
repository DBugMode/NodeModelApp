var mongoose = require('mongoose');

var schema = mongoose.Schema;

var userSchema = new mongoose.Schema({
    name: String,
    age: Number,
    address: {
        street: String,
        city: String,
        state: String,
        zip: String
    },
    income: Number
});

var user = mongoose.Model('User', userSchema);

module.exports(user);
