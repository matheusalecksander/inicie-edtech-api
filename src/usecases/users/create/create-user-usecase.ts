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

    if (!receivedData.email) {
      throw new MissingParamError('email')
    }

    if (!receivedData.gender) {
      throw new MissingParamError('gender')
    }

    if (!receivedData.status) {
      throw new MissingParamError('status')
    }

    const createdUser = await this.repository.create(receivedData)

    return createdUser
  }
}
