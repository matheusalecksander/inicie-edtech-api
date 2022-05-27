import { UserData } from '../../core/entities/users/data/user-data'
import { UserModel } from '../../core/entities/users/models/user-model'
import { IUsersRepository } from '../../core/entities/users/repository/users-repository'

export class InMemoryUsersRepository implements IUsersRepository {
  private readonly users: UserModel[] = []

  async create(data: UserData): Promise<UserModel> {
    const user = {
      ...data,
      id: 'any_id',
    }
    this.users.push(user)

    return user
  }

  async getAllUsers(): Promise<UserModel[]> {
    return this.users
  }

  async loadUserById(id: string): Promise<UserModel | undefined> {
    const user = this.users.find((item) => item.id === id)

    return user
  }
}
