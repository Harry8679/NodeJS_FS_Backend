const mongoose = require('mongoose');
require('dotenv').config();
const User = require('../models/user.model');

const connect = async () => {
    try {
        mongoose.set('strictQuery', false)
        mongoose.connect(process.env.mongo) 
        console.log(`MongoDB is up and running`);
    } catch(error) {
        console.log(error)
        process.exit()
    }
    // await mongoose.connect(process.env.mongo, () => {
    //     console.log(`MongoDB is up and running`);
    // });
}

const disconnect = async () => {
    await mongoose.connection.close();
}

// obj { firstName: req.body.firstName, email: req.body.email }
const findUser = async (obj) => {
    User.findOne(obj);
}

const saveUser = async (newUser) => {
    return await newUser.save();
}

module.exports = { connect, disconnect, findUser, saveUser };