import { UserData } from '~/core/entities/users/data/user-data'
import { AxiosUsersRepository } from './axios-users-repository'
import { axiosInstance } from '~/utils/db/axios'

jest.mock('~/utils/db/axios')

const mockedaxios = axiosInstance as jest.Mocked<typeof axiosInstance>

function makeSut() {
  const sut = new AxiosUsersRepository()

  return sut
}

describe('Integration test', () => {
  it('should post an user with correct values', async () => {
    const sut = makeSut()
    const expectedResult = {
      email: 'any_email@email.com',
      gender: 'any_gender',
      name: 'any_name',
      status: 'any_status',
      id: 'any_id',
    }
    const anyUser: UserData = {
      email: 'any_email@email.com',
      gender: 'any_gender',
      name: 'any_name',
      status: 'any_status',
    }
    mockedaxios.post.mockResolvedValueOnce({ data: expectedResult })

    await sut.create(anyUser)
    expect(mockedaxios.post).toHaveBeenCalledWith('/users', anyUser)
  })

  it('should return the user data on response', async () => {
    const sut = makeSut()
    const expectedResult = {
      email: 'any_email@email.com',
      gender: 'any_gender',
      name: 'any_name',
      status: 'any_status',
      id: 'any_id',
    }

    const anyUser: UserData = {
      email: 'any_email@email.com',
      gender: 'any_gender',
      name: 'any_name',
      status: 'any_status',
    }

    mockedaxios.post.mockResolvedValueOnce({ data: expectedResult })
    const newUser = await sut.create(anyUser)

    expect(newUser).toEqual(expectedResult)
  })
})
