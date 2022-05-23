export interface IObjectValidator {
  validate<T>(object: T): boolean
}
