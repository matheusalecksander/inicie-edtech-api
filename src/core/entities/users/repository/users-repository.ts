import { UserData } from '../data/user-data'
import { UserModel } from '../models/user-model'

export interface IUserRepository {
  create(data: UserData): Promise<UserModel>
}
