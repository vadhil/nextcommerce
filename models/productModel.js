const { Schema, default: mongoose, models } = require("mongoose");

const ProductSchema = new Schema({
    title: String,
    desc: String,
    price: {type:Number,
    require:true} 
}) 

export const Product = models.Product || mongoose.model('Product', ProductSchema);

