const mongoose = require('mongoose');  

const UserSchema = new mongoose.Schema({   
    email: { type: String, lowercase:true, required: true, unique: true }, 
    password: { type: String, required: true},       
}, {timestamps: true});

module.exports = mongoose.model('users', UserSchema);