import { Speciality } from "../entities/specitality.entity";

export interface ISpecialityRepository {
  save(data: Speciality): Promise<Speciality>
}