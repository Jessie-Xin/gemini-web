import router from '@/router'
import { useUserStore } from '@/stores/userStore'

import axios from 'axios'
import type { AxiosResponse, AxiosError, AxiosInstance } from 'axios'

import { ElMessage } from 'element-plus'
import 'element-plus/theme-chalk/el-message.css'

// 定义API响应数据结构的泛型类型
interface ApiResponse<T = any> {
  data: T
  message: string
  path: string
  statusCode: number
  timestamp: string
}
// 定义报错信息的泛型类型
interface ErrorMessage {
  error: string
  message: string
  path: string
  timestamp: string
}
// 创建带有响应数据泛型的Axios实例
const httpInstance: AxiosInstance = axios.create({
  // 基础URL
  baseURL: 'http://localhost:3000/api/v1',
  // 超时时间
  timeout: 5000,
})

// 请求拦截器
// httpInstance.interceptors.request.use(
//   (config) => {
//     const userStore = useUserStore()
//     const token = userStore.userInfo.data.token
//     if (token) {
//       config.headers.Authorization = `Bearer ${token}`
//     }
//     return config
//   },
//   (error) => Promise.reject(error),
// )

// 响应拦截器
httpInstance.interceptors.response.use(
  (response: AxiosResponse<ApiResponse>) => {
    // 成功响应
    return response.data.data
  },
  (error: AxiosError<ErrorMessage>) => {
    // 错误响应
    if (error.response) {
      // 服务器返回错误状态码
      ElMessage({
        type: 'error',
        message: error.response.data.message || '服务器错误',
      })

      // 处理特定的错误码，例如401（未授权）
      if (error.response.status === 401) {
        const userStore = useUserStore()
        userStore.clearUserInfo()
        router.push('/login')
      }
    } else if (error.request) {
      // 请求已发送，但没有收到响应
      console.error('未收到响应：', error.request)
    } else {
      // 设置请求时发生错误
      console.error('请求设置错误：', error.message)
    }
    return Promise.reject(error)
  },
)

export default httpInstance
