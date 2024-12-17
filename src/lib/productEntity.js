import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name : {type: String, required : true},
    price : {type: Number, required : true},
    count : {type: Number, required : true}
})

const ProductModel = mongoose.model("product", productSchema, "product");


export { ProductModel };
