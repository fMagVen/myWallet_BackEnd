import { Router } from 'express'

import { postSignup, postLogin } from '../controllers/authController.js'
import { validateSchema } from '../middlewares/schemaValidation.js'
import signupSchema from '../schemas/signupSchema.js'
import loginSchema from '../schemas/loginSchema.js'

const authRouter = Router()
authRouter.post('/auth/signup', validateSchema(signupSchema), postSignup)
authRouter.post('/auth/login', validateSchema(loginSchema), postLogin)

export default authRouter