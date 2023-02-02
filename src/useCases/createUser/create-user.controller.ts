import { Request, Response } from "express";
import logger from "../../utils/logger";
import { CreateUserUseCase } from "./createuser.useCase";

export class CreateUserUseController {
  async handle(request:Request, response:Response){
    logger.info('Usuário sendo criado!')
    try {
      const data = request.body
      const useCase = new CreateUserUseCase();
      const result = await useCase.execute(data)

      return response.json(result)      
    } catch (error: any) {
      logger.error(error.stack)
      return response.status(error.statusCode).json(error.message)
    }
  }
}