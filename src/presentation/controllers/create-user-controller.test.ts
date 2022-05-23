import { app } from '../../presentation/server/index'
import request from 'supertest'
import { UserData } from '../../core/entities/users/data/user-data'

describe('CreateUserController', () => {
  it('should calls the usecase and create an user', async () => {
    const data: UserData = {
      email: 'any_email@email.com',
      name: 'any_name',
      gender: 'male',
      status: 'active',
    }

    const response = await request(app).post('/users').send(data)

    expect(response.status).toBe(201)
    //expect(response.body).toHaveProperty('id')
  })
})
