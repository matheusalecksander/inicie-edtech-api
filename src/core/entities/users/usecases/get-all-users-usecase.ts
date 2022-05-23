import { UserModel } from '../models/user-model'

export interface IGetAllUsersUsecase {
  perform: () => Promise<UserModel[]>
}
