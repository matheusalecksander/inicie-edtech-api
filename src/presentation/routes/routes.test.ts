import request from 'supertest'
import { app } from '../server'

describe('Home router test', () => {
  it('should return status 200 on getting the api home page', async () => {
    const response = await request(app).get('/')

    expect(response.status).toBe(200)
  })
})
