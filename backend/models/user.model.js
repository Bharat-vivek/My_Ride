const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        minlength: [3, 'First name must be at least 3 characters long'],
        maxlength: [50, 'First name must be at most 50 characters long'],
    },
    lastName: {
        type: String,
        required: true,
        minlength: [3, 'Last name must be at least 3 characters long'],
        maxlength: [50, 'Last name must be at most 50 characters long'],
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/.+\@.+\..+/, 'Please enter a valid email address'],
    },
    password: {
        type: String,
        required: true,
        select: false,
        minlength: [6, 'Password must be at least 6 characters long'],
    },
    socketid: {
        type: String,
        default: null,
    },
});

userSchema.methods.generateAuthToken = async function () {
    const token = jwt.sign({ _id: this._id }, process.env.JWT_SECRET, {
        expiresIn: '1h',
    });
    return token;
}
userSchema.methods.comparePassword = async function (password) {
    return await bcrypt.compare(password, this.password);
};

userSchema.statics.hashPassword = async function (password) {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
};

const UserModel = mongoose.model('User', userSchema);
module.exports = UserModel;