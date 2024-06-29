declare namespace LoginTypes {
  type LoginResult = {
    data: User & { token: string; role: string }
  }
  type User = {
    name: string
    email: string
    password: string
  }
  type LoginParams = {
    email: string
    password: string
  }
  type RegisterParams = User
}
