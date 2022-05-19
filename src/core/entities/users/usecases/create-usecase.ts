import { UserData } from '../data/user-data'
import { UserModel } from '../models/user-model'

export interface ICreateUserUsecase {
  perform(data: UserData): Promise<UserModel>
}
