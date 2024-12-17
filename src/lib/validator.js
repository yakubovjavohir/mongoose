import { CustomError } from "./customError.js"

function validate(schema, data) {
    const {error} = schema.validate(data)
if (error) {
    throw new CustomError(400, error.details[0].message)
}
}

export {validate}