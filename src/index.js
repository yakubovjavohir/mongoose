import express from "express"
import cors from "cors"
import {config} from "./config/index.js"
import {configSchema} from "./config/schema.js"
import {validate} from "./lib/validator.js"
import { router } from "./module/module.routes.js"
import {mongoDb} from "./lib/mongoose.js"
validate(configSchema, config)

const app = express()

app.use(cors())
app.use(express.json())
app.use("/api", router)


mongoDb()

app.listen(config.PORT, ()=>{
    console.log(`http://localhost:${config.PORT}`);
})