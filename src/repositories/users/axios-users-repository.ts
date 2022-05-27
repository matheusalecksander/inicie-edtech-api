import { RepositoryError } from '../../utils/errors/repository-error'
import { UserData } from '../../core/entities/users/data/user-data'
import { UserModel } from '../../core/entities/users/models/user-model'
import { IUsersRepository } from '../../core/entities/users/repository/users-repository'
import { axiosInstance } from '../../utils/db/axios'

export class AxiosUsersRepository implements IUsersRepository {
  async create(data: UserData): Promise<UserModel> {
    try {
      const newUser = await axiosInstance.post('/users', data)

      return newUser.data
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      throw new RepositoryError({
        msg: error.message,
        data: error.response.data,
        status: error.response.status,
      })
    }
  }

  async getAllUsers(): Promise<UserModel[]> {
    try {
      const response = await axiosInstance.get('/users')

      const users = response.data

      return users
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      throw new RepositoryError({
        msg: error.message,
        data: error.response.data,
        status: error.response.status,
      })
    }
  }

  async loadUserById(id: string): Promise<UserModel | undefined> {
    try {
      const response = await axiosInstance.get(`/users/${id}`)

      const user = response.data

      return user
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      throw new RepositoryError({
        msg: error.message,
        data: error.response.data,
        status: error.response.status,
      })
    }
  }
}
