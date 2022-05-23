import { UserData } from '~/core/entities/users/data/user-data'
import { UserModel } from '~/core/entities/users/models/user-model'
import { ICreateUserUsecase } from '~/core/entities/users/usecases/create-usecase'
import { IUsersRepository } from '~/core/entities/users/repository/users-repository'
import { IObjectValidator } from '~/usecases/interfaces/validators/object-validator'

export class CreateUserUseCase implements ICreateUserUsecase {
  constructor(
    private repository: IUsersRepository,
    private objectValidator: IObjectValidator
  ) {}

  async perform(data: UserData): Promise<UserModel> {
    const receivedData = data

    this.objectValidator.validate(receivedData)

    const createdUser = await this.repository.create(receivedData)

    return createdUser
  }
}