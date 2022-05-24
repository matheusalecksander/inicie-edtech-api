interface ErrorReport {
  msg: string
  data: []
  status: number
}

export class RepositoryError extends Error {
  public readonly name: string = 'Repository Error'
  public readonly data: []
  public readonly status: number

  constructor({ msg, data, status }: ErrorReport) {
    super(`${msg}`)
    ;(this.data = data), (this.status = status)
  }
}
