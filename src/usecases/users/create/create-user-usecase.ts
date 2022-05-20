import { UserData } from '~/core/entities/users/data/user-data'
import { UserModel } from '~/core/entities/users/models/user-model'
import { ICreateUserUsecase } from '~/core/entities/users/usecases/create-usecase'
import { IUsersRepository } from '~/core/entities/users/repository/users-repository'
interface IValidator {
  validate<T>(object: T): void
}

export class CreateUserUseCase implements ICreateUserUsecase {
  constructor(
    private repository: IUsersRepository,
    private objectValidator: IValidator
  ) {}

  async perform(data: UserData): Promise<UserModel> {
    const receivedData = data

    this.objectValidator.validate(receivedData)
    /*
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
    } */

    const createdUser = await this.repository.create(receivedData)

    return createdUser
  }
}
