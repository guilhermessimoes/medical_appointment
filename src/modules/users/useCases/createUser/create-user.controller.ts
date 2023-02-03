import { Request, Response } from "express";
import { IPasswordCrypto } from "../../../../infra/shared/cripto/password.cripto";
import logger from "../../../../utils/logger";
import { IUserRepository } from "../../repositories/user.repository";
import { CreateUserUseCase } from "./createuser.useCase";

export class CreateUserUseController {
  constructor(private userRepository: IUserRepository, private passwordCrypto: IPasswordCrypto){}
  async handle(request:Request, response:Response){
    logger.info('Usuário sendo criado!')
    try {
      const data = request.body
      const useCase = new CreateUserUseCase(this.userRepository, this.passwordCrypto);
      const result = await useCase.execute(data)

      return response.json(result)      
    } catch (error: any) {
      logger.error(error.stack)
      return response.status(error.statusCode).json(error.message)
    }
  }
}