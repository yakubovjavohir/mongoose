import { config } from "../config/index.js";
import mongoose from "mongoose"

function mongoDb() {
    mongoose.connect(config.URL)
        .then(()=>{
            console.log("mongoDb conecteed");
        })
        .catch((err)=>{
        console.log(err);
    })
}


export {mongoDb}