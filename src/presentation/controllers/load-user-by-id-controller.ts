import { Request, Response } from 'express'
import { IController } from '../protocols/controllers'
import { AxiosUsersRepository } from '../../repositories/users/axios-users-repository'
import { LoadUserByIdUsecase } from '../../usecases/users/load-user-by-id/load-user-by-id-usecase'

export class LoadUserByIdController implements IController {
  async handle(req: Request, res: Response): Promise<void> {
    const userId = req.params.id

    const repository = new AxiosUsersRepository()
    const usecase = new LoadUserByIdUsecase(repository)
    try {
      const service = await usecase.perform(userId)

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
