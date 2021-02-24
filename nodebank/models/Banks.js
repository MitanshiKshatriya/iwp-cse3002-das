const mongoose = require('mongoose')

const Schema = mongoose.Schema

const bankSchema = new Schema({
    name: {
        type: String
    },
    accountNumber: {
        type: Number
    },
    email:{
        type:String
    },
    balance:{
        type:Number 
    }

},{timestamps:true})

const Bank = mongoose.model('Bank',bankSchema)

module.exports = Bank
