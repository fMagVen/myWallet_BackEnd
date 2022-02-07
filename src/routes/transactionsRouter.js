import { Router } from 'express'

import { postTransaction, getTransactions, deleteTransaction, updateTransaction } from '../controllers/transactionsController.js'
import { validateSchema } from '../middlewares/schemaValidation.js'
import { validateToken } from '../middlewares/tokenValidation.js'
import transactionSchema from '../schemas/transactionSchema.js'
import deleteSchema from '../schemas/deleteSchema.js'

const transactionsRouter = Router()
transactionsRouter.use(validateToken)
transactionsRouter.post('/transactions/new', validateSchema(transactionSchema), postTransaction)
transactionsRouter.get('/transactions/all', getTransactions)
transactionsRouter.delete('/transactions/del', validateSchema(deleteSchema), deleteTransaction)
transactionsRouter.put('/transactions/mod', validateSchema(transactionSchema), updateTransaction)
export default transactionsRouter
