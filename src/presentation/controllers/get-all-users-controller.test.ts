import request from 'supertest'
import { app } from '../server'
import sinon from 'sinon'
import { axiosInstance } from '../../utils/db/axios'

describe('GetAllUsersController', () => {
  it('should return an array with users', async () => {
    const response = await request(app).get('/users')

    expect(response.body).toBeInstanceOf(Array)
  })

  it('should throw error if response failed', async () => {
    sinon.stub(axiosInstance, 'get').throws({
      message: 'aaa',
      response: {
        data: ['aaa'],
        status: 500,
      },
    })
    const response = await request(app).get('/users')

    expect(response.status).toBe(500)
  })
})
