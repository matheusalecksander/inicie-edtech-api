import { Request, Response } from 'express'
import { GetAllUsersUsecase } from '../../usecases/users/get-all-users/get-all-users-usecase'
import { AxiosUsersRepository } from '../../repositories/users/axios-users-repository'
import { IController } from '../protocols/controllers'

export class GetAllUsersController implements IController {
  async handle(req: Request, res: Response): Promise<void> {
    const repository = new AxiosUsersRepository()
    const usecase = new GetAllUsersUsecase(repository)

    const service = await usecase.perform()
    //console.log(service)

    res.status(201).json(service).end()
  }
}
