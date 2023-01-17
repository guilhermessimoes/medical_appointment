import { Request, Response } from "express";
import { CreateUserUseCase } from "./createuser.useCase";

export class CreateUserUseController {
  async handle(request:Request, response:Response){

    try {
      const data = request.body
      const useCase = new CreateUserUseCase();
      const result = await useCase.execute(data)

      return response.json(result)      
    } catch (error: any) {
      return response.status(400).json(error.message)
    }
  }
}