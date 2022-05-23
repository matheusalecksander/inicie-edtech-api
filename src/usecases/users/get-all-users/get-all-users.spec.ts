import { UserModel } from '../../../core/entities/users/models/user-model'
import { IUsersRepository } from '../../../core/entities/users/repository/users-repository'
import { IGetAllUsersUsecase } from '../../../core/entities/users/usecases/get-all-users-usecase'

import { InMemoryUsersRepository } from '../../../repositories/users/in-memory-users-repository'

class GetAllUsersUsecase implements IGetAllUsersUsecase {
  constructor(private repository: IUsersRepository) {}

  async perform(): Promise<UserModel[]> {
    const users: UserModel[] = await this.repository.getAllUsers()

    return users
  }
}

describe('GetAllUsersUsecase', () => {
  it('should call repository and returns an array with users data', async () => {
    const repository = new InMemoryUsersRepository()
    const sut = new GetAllUsersUsecase(repository)

    const users = await sut.perform()
    expect(users).toBeInstanceOf(Array)
  })
})
