// Iteration #1
const mongoose = require('mongoose');

const esquemaDron = new mongoose.Schema({
    name:{
        type: String
    },
    propellers:{
        type: Number
    },
    maxSpeed:{
        type: Number
    }
});

const Dron = mongoose.model("Dron", esquemaDron);
module.exports = Dron;
