const mongoose = require('mongoose');

const stockSchema = mongoose.Schema({

    dt: {type:Date},
    category: {type:String},
    itemcode: {type:String},
    codes: {type:String},
    qty : {type:String},
    kt: {type:String},
    rweight: {type:String},
    bweight: {type:String},
    bsweight: {type:String},
    nws : {type:String},
    sweight: {type:String},
    nweight: {type:String},
    westage: {type:String},
    wstweight: {type:String},
    gweight : {type:String},

    userEmail: {type: String},
    hotelname : {type: String}

}) 


const stockModel = mongoose.model('stock',stockSchema);

module.exports = stockModel;