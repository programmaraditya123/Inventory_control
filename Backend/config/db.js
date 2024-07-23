const mongoose = require('mongoose');
const colors = require('colors');

//connect to mongoDB
const connectDB = async () => {
    try {
        const conn = await mongoose.connect('mongodb://localhost:27017/inventory');
        console.log(`connected mogodb database ${conn.connection.host}`.bgMagenta.white);
        
    } catch (error) {
        console.log(error);
        
    }
};
module.exports = connectDB;
