import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { login } from '@/apis/user'

export const useUserStore = defineStore(
  'user',
  () => {
    const userInfo = ref({})
    const getUserInfo = async (data: { email: string; password: string }) => {
      const res = await login(data)
      userInfo.value = res
      return res.data
    }

    // 定义修改state数据action
    const clearUserInfo = () => {
      userInfo.value = {}
    }
    return { userInfo, getUserInfo, clearUserInfo }
  }, //开启持久化功能
  {
    persist: true,
  },
)
