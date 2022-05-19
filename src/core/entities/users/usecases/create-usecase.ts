import { UserData } from '../data/user-data'
import { UserModel } from '../models/user-model'

export interface CreateUserUsecase {
  perform(data: UserData): Promise<UserModel>
}
