export class InternalServerError extends Error {
  constructor() {
    super(`Internal server error, try again later.`)
    this.name = 'MissingParamError'
  }
}
