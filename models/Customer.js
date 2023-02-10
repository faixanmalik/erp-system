const mongoose = require('mongoose');


const date = new Date();

const CustomerSchema = new mongoose.Schema({

    customerName:{type: String, required: true},
    email:{type: String, required: true},
    phoneNo:{type: Number, required: true},
    country:{type: String, required: true},
    streetAddress: {type: String, required: true},
    city: {type: String, required: true},
    state: {type: String, required: true},
    zip: {type: Number, required: true},
    provisionForDoubtfulDebt: {type: Number, required: true},
    Date: {type: Date, default: Date.now() }
    
  },{timestamps:true});

mongoose.models={}
export default mongoose.model("Customer", CustomerSchema);