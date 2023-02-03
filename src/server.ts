import express from 'express'
import * as dotenv from 'dotenv'
dotenv.config()
import { userRouter } from './routes/user.routes'
import { specialityRouter } from './routes/speciality.routes'

const app = express()
app.use(express.json())
app.use(userRouter)
app.use(specialityRouter)

app.listen(4000, () => console.log('Server is run on Port 4000'))