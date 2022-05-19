import { UserData } from '../../../core/entities/users/data/user-data'
import { CreateUserUseCase } from './create-user-usecase'
import { UsersRepository } from '../../../repositories/users-repository'

function makeSut() {
  const repository = new UsersRepository()
  const sut = new CreateUserUseCase(repository)

  return sut
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
