'use client'

import Login from '@/components/Login'
import { APP_KEY_USER } from './utils/constants'
import Dashboard from '@/components/Dashboard'

const Home = () => {
  if (localStorage.getItem(APP_KEY_USER)) {
    return <Dashboard />
  }
  return <Login />
}

export default Home
