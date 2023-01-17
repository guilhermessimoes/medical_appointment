import express from 'express'
import { userRouter } from './routes/user.routes'

const app = express()
app.use(express.json())
app.use(userRouter)

app.get('/', (request, response) => {
  return response.send('Aplicação está funcionando')
})

app.listen(4000, () => console.log('Server is run on Port 4000'))