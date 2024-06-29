import httpInstance from '@/utils/https'
//登录接口
export const login = (data: LoginTypes.LoginParams) => {
  return httpInstance.post<LoginTypes.LoginResult>('auth/signin', data)
}
//注册接口
export const register = (data: LoginTypes.RegisterParams) => {
  return httpInstance.post<LoginTypes.LoginResult>('register', data)
}
