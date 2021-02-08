const mongoose = require('mongoose');


const customerSchema = new mongoose.Schema({
    customerName: {
        type:String,
        required:true
    },
    phone_no: {
        type:Number,
        required:true
    },
    email: {
        type: String,
        maxlength: 50,
        required: true,
        unique: true
    },
    address: {
        type:String,
        required:true
    },
    city: {
        type:String,
        required:true
    },
    state: {
        type:String,
        required:true
    },
    country: {
        type:String,
        required:true
    },
    prescription: {
        type:String,
        required:true
    },
    gst:{
        type:String,
        required:true
    },
    delivery_option:{
        type:String,
        required:true
    },
    date: {
        type: Date,
        default:Date.now
    }
})

module.exports = mongoose.model('customer_details', customerSchema);