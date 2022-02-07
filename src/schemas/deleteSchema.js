import joi from 'joi'

const deleteSchema = joi.object({
    id: joi.required(),
    UserId: joi.required()
})

export default deleteSchema