import { Router } from 'express'
import { CreateUserController } from '../controllers/create-user-controller'

const router = Router()

router.get('/', (req, res) => {
  res.send('Hello from API')
})

router.post('/users', new CreateUserController().handle)

export { router }
