import joi from 'joi'

const transactionSchema = joi.object({
    id: joi.string().optional(),
    value: joi.number().integer().required(),
    description: joi.string().required(),
    expense: joi.boolean().required(),
    UserId: joi.required()
})

export default transactionSchema