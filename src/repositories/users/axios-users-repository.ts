import { UserData } from '../../core/entities/users/data/user-data'
import { UserModel } from '../../core/entities/users/models/user-model'
import { IUsersRepository } from '../../core/entities/users/repository/users-repository'
import { axiosInstance } from '../../utils/db/axios'
import { InternalServerError } from '../../utils/errors/internal-server-error'

export class AxiosUsersRepository implements IUsersRepository {
  async create(data: UserData): Promise<UserModel> {
    try {
      const newUser = await axiosInstance.post('/users', data)

      return newUser.data
    } catch (error) {
      throw new InternalServerError()
    }
  }

  async getAllUsers(): Promise<UserModel[]> {
    try {
      const response = await axiosInstance.get('/users')

      const users = response.data

      return users
    } catch (err) {
      throw new InternalServerError()
    }
  }
}
