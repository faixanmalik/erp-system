const mongoose = require('mongoose');

const SupplierSchema = new mongoose.Schema({
    supplierName:{type: String, required: true},
    email:{type: String, required: true},
    phoneNo:{type: Number, required: true},
    country:{type: String, required: true},
    streetAddress: {type: String, required: true},
    city: {type: String, required: true},
    state: {type: String, required: true},
    zip: {type: Number, required: true}
    
  },{timestamps:true});

mongoose.models={}
export default mongoose.model("Supplier", SupplierSchema);