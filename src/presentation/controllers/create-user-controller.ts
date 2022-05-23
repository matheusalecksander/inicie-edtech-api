import { Request, Response } from 'express'
import { UserData } from '~/core/entities/users/data/user-data'
import { AxiosUsersRepository } from '~/repositories/users/axios-users-repository'
import { CreateUserUseCase } from '~/usecases/users/create/create-user-usecase'
import { ObjectValidator } from '~/utils/validators/object-validator'
import { IController } from '../protocols/controllers'

export class CreateUserController implements IController {
  async handle(req: Request, res: Response): Promise<void> {
    const data: UserData = req.body
    console.log(data)

    const repository = new AxiosUsersRepository()
    const validator = new ObjectValidator()
    const usecase = new CreateUserUseCase(repository, validator)

    const service = usecase.perform(data)
    //console.log(service)

    res.status(201).json(service)
  }
}
