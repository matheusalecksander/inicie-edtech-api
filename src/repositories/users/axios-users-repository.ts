import { UserData } from '~/core/entities/users/data/user-data'
import { UserModel } from '~/core/entities/users/models/user-model'
import { IUsersRepository } from '~/core/entities/users/repository/users-repository'
import { axiosInstance } from '~/utils/db/axios'

export class AxiosUsersRepository implements IUsersRepository {
  async create(data: UserData): Promise<UserModel> {
    const newUser: UserModel = await axiosInstance.post('/users', data)

    return newUser
  }
}
