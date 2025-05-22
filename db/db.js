const mongoose = require('mongoose');

function db() {
    mongoose.connect(process.env.MONGO_CONNECTION_STRING).then(() => {
        console.log('MongoDB connection established');
    }).catch((err) => {
        console.error('MongoDB connection error:', err);
    });
}

module.exports = db;