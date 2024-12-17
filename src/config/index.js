import dotenv from "dotenv"
dotenv.config()

const config = {
    URL : process.env.MONGO_DB_URL,
    PORT : Number(process.env.PORT)
}


export {config}