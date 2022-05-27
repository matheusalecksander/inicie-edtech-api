import { Router } from 'express'
import { CreateUserController } from '../controllers/create-user-controller'
import { GetAllUsersController } from '../controllers/get-all-users-controller'
import { LoadUserByIdController } from '../controllers/load-user-by-id-controller'

const router = Router()

router.get('/', (req, res) => {
  res.status(200).json({ msg: 'Hello from API' })
})

router.get('/users', new GetAllUsersController().handle)
router.post('/users', new CreateUserController().handle)
router.get('/users/:id', new LoadUserByIdController().handle)

export { router }
