const mongoose = require('mongoose');
require('dotenv').config();

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

module.exports = { connect };