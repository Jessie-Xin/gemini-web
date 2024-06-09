import httpInstance from '@/utils/https'
//登录接口
export const login = (data: { email: string; password: string }) => {
  return httpInstance.post('login', data)
}
//注册接口
export const register = (data: { name: string; email: string; password: string }) => {
  return httpInstance.post('register', data)
}
