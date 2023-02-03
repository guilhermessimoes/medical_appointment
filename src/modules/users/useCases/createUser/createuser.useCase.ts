import { CustomError } from "../../../../errors/custom.error"
import { ParameterRequiredError } from "../../../../errors/parameter-required.error"
import { IPasswordCrypto } from "../../../../infra/shared/cripto/password.cripto"
import { User } from "../../entities/user.entity"
import { IUserRepository } from "../../repositories/user.repository"
type UserRequest = {
  name: string,
  userName: string,
  password: string
}

export class CreateUserUseCase {
  constructor(private userRepository: IUserRepository, private passwordCrypto: IPasswordCrypto){ }

  async execute(data: UserRequest){
    const user = User.create(data)

    if (!data.userName || !data.password) {
      throw new ParameterRequiredError('Username/password is required', 422)
    }

    const existUser = await this.userRepository.findByUsername(data.userName)
    if (existUser) {
      throw new CustomError('Username already exists', 400, 'USER_EXIST_ERROR')
    }
    const hashPassword = await this.passwordCrypto.hash(data.password)
    user.password = hashPassword

    const userCreaterd = await this.userRepository.save(user)

    return userCreaterd
  }
}