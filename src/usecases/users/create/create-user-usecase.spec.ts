import { UserData } from '../../../core/entities/users/data/user-data'
import { CreateUserUseCase } from './create-user-usecase'

function makeSut() {
  const sut = new CreateUserUseCase()

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
