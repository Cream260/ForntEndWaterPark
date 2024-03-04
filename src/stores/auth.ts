import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import router from '@/router'
import { useMessageStore } from './message'
import auth from '@/components/services/auth'
export const useAuthStore = defineStore('auth', () => {
  const authName = ref({})
  const messageStore = useMessageStore()
  
// const getUser = () => {
//   const userString = localStorage.getItem('user');
//   if (!userString) return null;
//   const user = JSON.parse(userString ?? "");
//   //*
//   console.log(user)
// }

  const login = async (email: string, password: string) => {
    try {
      const res = await auth.login(email, password)
      console.log(res.data)  
      localStorage.setItem('token', res.data.access_token)
      localStorage.setItem('user', JSON.stringify(res.data.user))
      console.log(res.data.user.employee)
      authName.value = JSON.parse(JSON.stringify(localStorage.getItem('user')))
    } catch (e) {
      console.log(e)
      messageStore.showError('Username or Password is incorrect')
    }
    router.push('/')
  }
  const logout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    authName.value = ''
    router.replace('/login')
  }


  return { login, logout, authName,}
})
