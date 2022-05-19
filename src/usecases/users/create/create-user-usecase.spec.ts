import { UserData } from '../../../core/entities/users/data/user-data'
import { CreateUserUseCase } from './create-user-usecase'
import { IUsersRepository } from '../../../core/entities/users/repository/users-repository'
import { UserModel } from '../../../core/entities/users/models/user-model'

function makeSut() {
  const repository = new UsersRepository()
  const sut = new CreateUserUseCase(repository)

  return sut
}

class UsersRepository implements IUsersRepository {
  async create(data: UserData): Promise<UserModel> {
    return { ...data, id: 'any_id' }
  }
}

describe('CreateUserUseCase', () => {
  it('should returns the created user with gerenated id', async () => {
    const sut = makeSut()

    const anyUser: UserData = {
      email: 'any_email@email.com',
      gender: 'any_gender',
      name: 'any_name',
      status: 'any_status',
    }

    const createdUser = await sut.perform(anyUser)

    expect(createdUser).toEqual({ ...anyUser, id: createdUser.id })
  })
})
