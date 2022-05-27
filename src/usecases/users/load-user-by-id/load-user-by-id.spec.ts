import { UserModel } from '../../../core/entities/users/models/user-model'
import { IUsersRepository } from '../../../core/entities/users/repository/users-repository'
import { InMemoryUsersRepository } from '../../../repositories/users/in-memory-users-repository'

class LoadUserByIdUsecase {
  constructor(private repository: IUsersRepository) {}
  async perform(id: string): Promise<UserModel | undefined> {
    const result = await this.repository.loadUserById(id)

    return result
  }
}

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
})
