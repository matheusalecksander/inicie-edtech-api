import { UserModel } from '../../../core/entities/users/models/user-model'
import { IUsersRepository } from '../../../core/entities/users/repository/users-repository'

export class LoadUserByIdUsecase {
  constructor(private repository: IUsersRepository) {}

  async perform(id: string): Promise<UserModel | undefined> {
    const result = await this.repository.loadUserById(id)

    return result
  }
}
