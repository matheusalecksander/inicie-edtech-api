import { UserData } from '../../../core/entities/users/data/user-data'
import { CreateUserUseCase } from './create-user-usecase'
import { UsersRepository } from '../../../repositories/users-repository'
import { MissingParamError } from '../../../utils/errors/missing-param-error'

function makeSut() {
  const repository = new UsersRepository()
  const sut = new CreateUserUseCase(repository)

  return sut
}

describe('CreateUserUseCase', () => {
  it(`should call's repository with correct values and returns the created user with gerenated id`, async () => {
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

  it('should throw an error if no name are provided', async () => {
    const sut = makeSut()

    const invalidUser: UserData = {
      email: 'any_email@email.com',
      gender: 'any_gender',
      name: '',
      status: 'any_status',
    }

    const createdUser = sut.perform(invalidUser)
    expect(createdUser).rejects.toThrow(new MissingParamError('name'))
  })

  it('should throw an error if no email are provided', async () => {
    const sut = makeSut()

    const invalidUser: UserData = {
      email: '',
      gender: 'any_gender',
      name: 'any_name',
      status: 'any_status',
    }

    const createdUser = sut.perform(invalidUser)
    expect(createdUser).rejects.toThrow(new MissingParamError('email'))
  })

  it('should throw an error if no gender are provided', async () => {
    const sut = makeSut()

    const invalidUser: UserData = {
      email: 'any_email@email.com',
      gender: '',
      name: 'any_name',
      status: 'any_status',
    }

    const createdUser = sut.perform(invalidUser)
    expect(createdUser).rejects.toThrow(new MissingParamError('gender'))
  })
})
