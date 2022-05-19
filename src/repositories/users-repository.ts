import { UserData } from '~/core/entities/users/data/user-data'
import { UserModel } from '~/core/entities/users/models/user-model'
import { IUsersRepository } from '~/core/entities/users/repository/users-repository'

export class UsersRepository implements IUsersRepository {
  async create(data: UserData): Promise<UserModel> {
    return { ...data, id: 'any_id' }
  }
}
