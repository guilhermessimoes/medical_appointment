import { Router } from 'express'
import createSpecialityController from '../modules/specitality/useCases/createSpeciality'

const specialityRouter = Router()

specialityRouter.post('/speciliaty', async(request, response) => {
  await createSpecialityController.handle(request, response)
})

export { specialityRouter }