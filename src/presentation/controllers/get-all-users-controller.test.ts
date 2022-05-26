import request from 'supertest'
import { app } from '../server'

describe('GetAllUsersController', () => {
  it('should return an array with users', async () => {
    const response = await request(app).get('/users')

    expect(response.body).toBeInstanceOf(Array)
  })

  it('should throw error if response failed', async () => {
    const response = request(app).get('/users').abort()
    console.log(response)

    expect(response).rejects.toThrow()
  })
})
