import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
    name: { type: String, required: true },
    desc: { type: String, required: true },
});


const CategoryModel = mongoose.model("categories", categorySchema, "categories");


export { CategoryModel };
