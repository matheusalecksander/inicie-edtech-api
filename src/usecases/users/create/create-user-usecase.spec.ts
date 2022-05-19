import { UserData } from '../../../core/entities/users/data/user-data'
import { UserModel } from '../../../core/entities/users/models/user-model'
import { ICreateUserUsecase } from '../../../core/entities/users/usecases/create-usecase'

class CreateUserUseCase implements ICreateUserUsecase {
  async perform(data: UserData): Promise<UserModel> {
    const user = data

    return { ...user, id: 'any_id' }
  }
}

describe('CreateUserUseCase', () => {
  it('should returns the created user with gerenated id', async () => {
    const sut = new CreateUserUseCase()
    const anyUser: UserData = {
      email: 'any_email@email.com',
      gender: 'any_gender',
      name: 'any_name',
      status: 'any_status',
    }

    const createdUser = await sut.perform(anyUser)

    expect(createdUser).toEqual({ ...anyUser, id: 'any_id' })
  })
})
