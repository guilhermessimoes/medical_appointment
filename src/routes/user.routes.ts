import { Router } from 'express'
import { CreateUserUseController } from '../useCases/createUser/create-user.controller'

const userRouter = Router()
const createUserController = new CreateUserUseController()

userRouter.post('/users', createUserController.handle)

export { userRouter }