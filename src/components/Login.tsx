'use client'
import { APP_KEY_USER } from '@/app/utils/constants'
import api from '@/utils/api'
import React, { FormEvent, useState } from 'react'
import { useRouter } from 'next/navigation'

const Login = () => {
  const [email, setEmail] = useState('kevin@admin.com')
  const [password, setPassword] = useState('abcd')
  const [error, setError] = useState('')
  const router = useRouter()

  const handleLogin = async (e: FormEvent) => {
    e.preventDefault()
    try {
      const loginData = await api.login(email, password)

      if (!loginData.error) {
        localStorage.setItem(APP_KEY_USER, JSON.stringify(email))
        router.replace('/dashboard')
        setError('')
      } else {
        setError(loginData.error)
      }
    } catch (err) {
      console.error('Login failed:', err)
      setError('Invalid email or password')
    }
  }

  return (
    <div className='bg-[var(--primary-color-faded)] pt-10 min-h-screen'>
      <div className='w-full md:w-1/2 xl:w-1/4 bg-white mx-2 md:mx-auto p-4 shadow-md'>
        <h2>Login</h2>
        {error && <p className='text-red'>{error}</p>}
        <form onSubmit={(e) => handleLogin(e)}>
          <div className='flex py-2'>
            <label className='flex-[1]'>Email:</label>
            <input
              className='flex-[3]'
              type='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className='flex py-2'>
            <label className='flex-[1]'>Password:</label>
            <input
              className='flex-[3]'
              type='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className='py-2 flex justify-evenly'>
            <button type='submit' className='btn btn-primary w-full mr-2'>
              Login
            </button>
            <button type='submit' className='btn btn-secondary w-full'>
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login
