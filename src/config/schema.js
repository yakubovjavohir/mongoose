import Joi from "joi"

const configSchema = Joi.object({
    PORT : Joi.number().min(1000).max(9999).required(),
    URL : Joi.string().required()
})


export {configSchema}