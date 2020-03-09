const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/test', { useNewUrlParser: true, useUnifiedTopology: true });
const userSchema = new mongoose.Schema({
    name:String,
    email: String,
})

const User = mongoose.model('users', userSchema)

module.exports = User;