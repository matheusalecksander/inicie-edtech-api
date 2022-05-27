import request from 'supertest'
import { app } from '../server'

describe('LoadUserByIdController', () => {
  it('should return an user Object in body if id existis', async () => {
    const response = await request(app).get('/users/2739')

    expect(response.body).toBeInstanceOf(Object)
    expect(response.body).toHaveProperty('id')
  })

  it('should returns status 404 if user not exists', async () => {
    const response = await request(app).get('/users/invalid_id')

    expect(response.status).toBe(404)
  })
})
