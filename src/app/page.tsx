'use client'

import Login from '@/components/Login'
import { APP_KEY_USER } from './utils/constants'
import Dashboard from '@/components/Dashboard'
import { useRouter } from 'next/navigation'

const Home = () => {
  const router = useRouter()
  const userLoggedIn =
    typeof localStorage !== 'undefined' && localStorage.getItem(APP_KEY_USER)
  if (userLoggedIn) {
    router.replace('/dashboard')
  }
  else return <Login />
}

export default Home
