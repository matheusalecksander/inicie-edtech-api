import { IObjectValidator } from '../../usecases/interfaces/validators/object-validator'

export class ObjectValidator implements IObjectValidator {
  validate<T>(object: T) {
    const validation = Object.entries(object)

    for (const object of validation) {
      if (!object[1]) {
        return {
          status: false,
          param: object[0],
        }
      }
    }

    return {
      status: true,
    }
  }
}
