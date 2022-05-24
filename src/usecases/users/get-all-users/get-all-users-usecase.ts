import { UserModel } from '../../../core/entities/users/models/user-model'
import { IUsersRepository } from '../../../core/entities/users/repository/users-repository'
import { IGetAllUsersUsecase } from '../../../core/entities/users/usecases/get-all-users-usecase'
import { InternalServerError } from '../../../utils/errors/internal-server-error'

export class GetAllUsersUsecase implements IGetAllUsersUsecase {
  constructor(private repository: IUsersRepository) {}

  async perform(): Promise<UserModel[]> {
    try {
      const users: UserModel[] = await this.repository.getAllUsers()

      return users
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      throw new InternalServerError(error.message)
    }
  }
}
