import { User } from "../../entities/user.entity"
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
      throw new Error('Username/password is required')
    }

    const existUser = await userRepository.findByUserName(data.userName)

    if (existUser) {
      throw new Error('Username already exists')
    }

 
    const userCreaterd = await userRepository.save(user)
    return userCreaterd
  }
}