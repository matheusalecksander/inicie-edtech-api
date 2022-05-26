/* eslint-disable @typescript-eslint/no-explicit-any */
interface ErrorReport {
  msg: string
  data: any[]
  status: number
}

export class RepositoryError extends Error {
  public readonly name: string = 'Repository Error'
  public readonly data: any[]
  public readonly status: number

  constructor({ msg, data, status }: ErrorReport) {
    super(`${msg}`)
    ;(this.data = data), (this.status = status)
  }
}
