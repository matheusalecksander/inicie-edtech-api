import { MissingParamError } from '../errors/missing-param-error'

export class ObjectValidator {
  validate<T>(object: T) {
    const validation = Object.entries(object)

    for (const object of validation) {
      if (!object[1]) {
        throw new MissingParamError(object[0])
      }
    }

    return true
  }
}
