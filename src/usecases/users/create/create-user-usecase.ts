import { UserData } from '~/core/entities/users/data/user-data'
import { UserModel } from '~/core/entities/users/models/user-model'
import { ICreateUserUsecase } from '~/core/entities/users/usecases/create-usecase'
import { IUsersRepository } from '~/core/entities/users/repository/users-repository'
import { MissingParamError } from '~/utils/errors/missing-param-error'

export class CreateUserUseCase implements ICreateUserUsecase {
  constructor(private repository: IUsersRepository) {}

  async perform(data: UserData): Promise<UserModel> {
    const receivedData = data

    if (!receivedData.name) {
      throw new MissingParamError('name')
    }

    const createdUser = await this.repository.create(receivedData)

    return createdUser
  }
}
