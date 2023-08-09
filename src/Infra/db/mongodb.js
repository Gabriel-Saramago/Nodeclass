const mongoose = require('mongoose')

async function startConection(){
    await mongoose.connect('mongodb://127.0.0.1:27017/test')
    console.log("Mongo started conection")
}

async function closeConection(){
    await mongoose.disconnect()
    console.log("Mongo closed conection")
}

module.exports = { startConection, closeConection}