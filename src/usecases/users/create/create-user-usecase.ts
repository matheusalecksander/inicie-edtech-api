import { UserData } from '../../../core/entities/users/data/user-data'
import { UserModel } from '../../../core/entities/users/models/user-model'
import { ICreateUserUsecase } from '../../../core/entities/users/usecases/create-usecase'

export class CreateUserUseCase implements ICreateUserUsecase {
  async perform(data: UserData): Promise<UserModel> {
    const user = data

    return { ...user, id: 'any_id' }
  }
}
