interface ErrorReport {
  msg: string
  data: []
  status: number
}

export class RepositoryError {
  public readonly name: string = 'Repository Error'
  public readonly msg: string
  public readonly data: []
  public readonly status: number

  constructor({ msg, data, status }: ErrorReport) {
    ;(this.msg = msg), (this.data = data), (this.status = status)
  }
}
