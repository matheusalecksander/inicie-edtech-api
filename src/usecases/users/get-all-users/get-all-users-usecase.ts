import { UserModel } from '../../../core/entities/users/models/user-model'
import { IUsersRepository } from '../../../core/entities/users/repository/users-repository'
import { IGetAllUsersUsecase } from '../../../core/entities/users/usecases/get-all-users-usecase'

export class GetAllUsersUsecase implements IGetAllUsersUsecase {
  constructor(private repository: IUsersRepository) {}

  async perform(): Promise<UserModel[]> {
    const users: UserModel[] = await this.repository.getAllUsers()

    return users
  }
}
