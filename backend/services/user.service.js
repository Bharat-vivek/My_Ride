const userModel = require('../models/user.model');

module.exports.createUser = async ({
    fullname, email, password
}) => {
    const { firstName, lastName } = fullname || {};
    if (!firstName || !email || !password) {
        throw new Error('All fields are required');
    }
    const user = await userModel.create({
        firstName,
        lastName,
        email,
        password
    });

    return user;
};
