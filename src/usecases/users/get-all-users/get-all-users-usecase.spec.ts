import { GetAllUsersUsecase } from './get-all-users-usecase'
import { InMemoryUsersRepository } from '../../../repositories/users/in-memory-users-repository'

describe('GetAllUsersUsecase', () => {
  it('should call repository and returns an array with users data', async () => {
    const repository = new InMemoryUsersRepository()
    const sut = new GetAllUsersUsecase(repository)

    const users = await sut.perform()
    expect(users).toBeInstanceOf(Array)
  })
})
