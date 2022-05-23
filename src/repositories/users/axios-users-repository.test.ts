import { UserData } from '~/core/entities/users/data/user-data'
import { AxiosUsersRepository } from './axios-users-repository'
import { axiosInstance } from '~/utils/db/axios'
import { InternalServerError } from '~/utils/errors/internal-server-error'

jest.mock('~/utils/db/axios')

const mockedaxios = axiosInstance as jest.Mocked<typeof axiosInstance>

function makeSut() {
  const sut = new AxiosUsersRepository()

  return sut
}

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

describe('Integration test', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })

  it('should post an user with correct values', async () => {
    const sut = makeSut()

    mockedaxios.post.mockResolvedValueOnce({ data: expectedResult })

    await sut.create(anyUser)
    expect(mockedaxios.post).toHaveBeenCalledWith('/users', anyUser)
  })

  it('should return the user data on response', async () => {
    const sut = makeSut()

    mockedaxios.post.mockResolvedValueOnce({ data: expectedResult })
    const newUser = await sut.create(anyUser)

    expect(newUser).toEqual(expectedResult)
  })

  it('should throw if axios throw', async () => {
    const sut = makeSut()

    const newUser = sut.create(anyUser)

    expect(newUser).rejects.toThrow(new InternalServerError())
  })
})
