export interface IObjectValidator {
  validate<T>(object: T): {
    status: boolean
    param?: string
  }
}
