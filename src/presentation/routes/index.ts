import { Router } from 'express'
import { CreateUserController } from '../controllers/create-user-controller'
import { GetAllUsersController } from '../controllers/get-all-users-controller'

const router = Router()

router.get('/', (req, res) => {
  res.send('Hello from API')
})

router.get('/users', new GetAllUsersController().handle)
router.post('/users', new CreateUserController().handle)

export { router }
