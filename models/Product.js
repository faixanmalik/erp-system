const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    barcode:{type: String, required: true},
    productName:{type: String, required: true},
    sn:{type: Number, required: true},
    model:{type: String, required: true},
    category: {type: String, required: true},
    salePrice: {type: Number, required: true},
    unit: {type: Number, required: true},
    supplier: {type: String, required: true},
    supplierPrice: {type: Number, required: true},
    action: {type: String, required: true},
    productDetails: {type: String, required: true},
    image: {type: String },

  },{timestamps:true});

mongoose.models={}
export default mongoose.model("Product", ProductSchema);