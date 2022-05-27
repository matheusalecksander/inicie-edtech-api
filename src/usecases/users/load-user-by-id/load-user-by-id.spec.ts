import { UserModel } from '../../../core/entities/users/models/user-model'
import { InMemoryUsersRepository } from '../../../repositories/users/in-memory-users-repository'
import { LoadUserByIdUsecase } from './load-user-by-id-usecase'

async function makeSut() {
  const repository = new InMemoryUsersRepository()
  const newUser = await repository.create({
    email: 'any_email@email.com',
    gender: 'male',
    name: 'any_name',
    status: 'active',
  })
  const sut = new LoadUserByIdUsecase(repository)

  return { sut, newUser }
}

describe('LoadUserById', () => {
  it('should returns an user when id exists', async () => {
    const { sut, newUser } = await makeSut()

    const user = await sut.perform(newUser.id)
    expect(user).toMatchObject<UserModel>(newUser)
  })

  it('should return undefined if id dont existis', async () => {
    const { sut } = await makeSut()

    const invalidUser = await sut.perform('invalid_id')

    expect(invalidUser).toBe(undefined)
  })
})
