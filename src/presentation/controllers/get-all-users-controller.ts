import { Request, Response } from 'express'
import { GetAllUsersUsecase } from '../../usecases/users/get-all-users/get-all-users-usecase'
import { AxiosUsersRepository } from '../../repositories/users/axios-users-repository'
import { IController } from '../protocols/controllers'

export class GetAllUsersController implements IController {
  async handle(req: Request, res: Response): Promise<void> {
    const repository = new AxiosUsersRepository()
    const usecase = new GetAllUsersUsecase(repository)
    try {
      const service = await usecase.perform()

      res.status(200).json(service)
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
