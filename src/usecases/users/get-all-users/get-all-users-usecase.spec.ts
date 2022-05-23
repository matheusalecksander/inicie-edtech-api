import { GetAllUsersUsecase } from './get-all-users-usecase'
import { InMemoryUsersRepository } from '../../../repositories/users/in-memory-users-repository'
import { InternalServerError } from '../../../utils/errors/internal-server-error'
import { IUsersRepository } from '../../../core/entities/users/repository/users-repository'
import { UserData } from '../../../core/entities/users/data/user-data'
import { UserModel } from '../../../core/entities/users/models/user-model'

function makeSut() {
  const repository = new InMemoryUsersRepository()
  const sut = new GetAllUsersUsecase(repository)

  return sut
}

function makeRepositoryWithError() {
  class InMemoryUsersRepositoryWithError implements IUsersRepository {
    getAllUsers(): Promise<UserModel[]> {
      throw new InternalServerError()
    }
    create(data: UserData): Promise<UserModel> {
      throw new Error('Method not implemented.')
    }
  }

  const sut = new GetAllUsersUsecase(new InMemoryUsersRepositoryWithError())

  return sut
}

describe('GetAllUsersUsecase', () => {
  it('should call repository and returns an array with users data', async () => {
    const sut = makeSut()

    const users = await sut.perform()
    expect(users).toBeInstanceOf(Array)
  })

  it('should throw if repository throw', async () => {
    const sut = makeRepositoryWithError()

    const users = sut.perform()
    expect(users).rejects.toThrow(new InternalServerError())
  })
})
