import { Request, Response } from 'express'
import { UserData } from '../../core/entities/users/data/user-data'
import { AxiosUsersRepository } from '../../repositories/users/axios-users-repository'
import { CreateUserUseCase } from '../../usecases/users/create/create-user-usecase'
import { ObjectValidator } from '../../utils/validators/object-validator'
import { IController } from '../protocols/controllers'

export class CreateUserController implements IController {
  async handle(req: Request, res: Response): Promise<void> {
    const { ...data }: UserData = req.body
    try {
      const repository = new AxiosUsersRepository()
      const validator = new ObjectValidator()
      const usecase = new CreateUserUseCase(repository, validator)
      const service = await usecase.perform(data)

      res.json(service).status(201).end()
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      res.status(error.status).json({
        error: error.name,
        msg: error.message,
        data: error.data,
      })
    }
  }
}
