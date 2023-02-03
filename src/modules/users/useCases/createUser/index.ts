import { PasswordBcrypt } from "../../../../infra/shared/cripto/password.bcrypt";
import { UserPrismaRepository } from "../../repositories/implementations/user.prisma.repository";
import { CreateUserUseController } from "./create-user.controller";

const userPrismaRepository = new UserPrismaRepository()
const passwordBcrypt = new PasswordBcrypt()
const createUserController = new CreateUserUseController(userPrismaRepository, passwordBcrypt)

export default createUserController