import { UserData } from '../../../core/entities/users/data/user-data'
import { UserModel } from '../../../core/entities/users/models/user-model'
import { ICreateUserUsecase } from '../../../core/entities/users/usecases/create-usecase'
import { IUsersRepository } from '../../../core/entities/users/repository/users-repository'
import { IObjectValidator } from '../../../usecases/interfaces/validators/object-validator'
import { MissingParamError } from '../../../utils/errors/missing-param-error'

export class CreateUserUseCase implements ICreateUserUsecase {
  constructor(
    private repository: IUsersRepository,
    private objectValidator: IObjectValidator
  ) {}

  async perform(data: UserData): Promise<UserModel> {
    const receivedData = data

    const isValid = this.objectValidator.validate(receivedData)

    if (!isValid.status && isValid.param) {
      throw new MissingParamError(isValid.param)
    }

    const createdUser = await this.repository.create(receivedData)

    return createdUser
  }
}
