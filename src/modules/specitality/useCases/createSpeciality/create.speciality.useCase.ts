import { Speciality } from "../../entities/specitality.entity"
import { ISpecialityRepository } from "../../repositories/speciality.repository"


type SpecialityRequest = {
  name: string,
  description: string
}

export class CreateSpecialityUseCase {
  constructor(private specialityRepository: ISpecialityRepository){}
  async execute(data: SpecialityRequest){
    const speciality = new Speciality(data)

    const specialityCreated = await this.specialityRepository.save(speciality)

    return specialityCreated
  }
}