import { app } from '../../presentation/server/index'
import request from 'supertest'
import { UserData } from '../../core/entities/users/data/user-data'
import { faker } from '@faker-js/faker'

const data: UserData = {
  email: faker.internet.email(),
  name: faker.name.findName(),
  gender: 'male',
  status: 'active',
}

describe('CreateUserController', () => {
  it('should calls the usecase and create an user', async () => {
    const response = await request(app).post('/users').send(data)
    expect(response.status).toBe(201)
  })

  it('should returns error if response returns error', async () => {
    const response = await request(app).post('/users').send(data)
    expect(response.status).toBe(422)
  })
})
