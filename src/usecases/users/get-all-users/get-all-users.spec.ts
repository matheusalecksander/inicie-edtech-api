class GetAllUsersUsecase {
  async perform() {
    return [
      {
        name: 'matheus',
      },
    ]
  }
}

describe('GetAllUsersUsecase', () => {
  it('should call repository and returns an array with users data', async () => {
    const sut = new GetAllUsersUsecase()

    const users = await sut.perform()
    expect(users).toBeInstanceOf(Array)
  })
})
