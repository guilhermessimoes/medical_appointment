import { User } from "../../entities/user.entity"
import { ParameterRequiredError } from "../../errors/parameter-required.error"
import { UserRepository } from "../../repositories/user.repository"

type UserRequest = {
  name: string,
  userName: string,
  password: string
}

export class CreateUserUseCase {
  async execute(data: UserRequest){
    const userRepository = UserRepository.getInstance()
    const user = User.create(data)

    if (!data.userName || !data.password) {
      throw new ParameterRequiredError('Username/password is required', 422)
    }

    const existUser = await userRepository.findByUserName(data.userName)

    if (existUser) {
      throw new ParameterRequiredError('Username already exists', 400)
    }

 
    const userCreaterd = await userRepository.save(user)
    return userCreaterd
  }
}