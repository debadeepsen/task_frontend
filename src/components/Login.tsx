'use client'
import api from '@/utils/api'
import React, { FormEvent, useState } from 'react'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleLogin = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const loginData = await api.login(email, password)
      
      if(!loginData.error) 
      setError('')
    } catch (err) {
      console.error('Login failed:', err)
      setError('Invalid email or password')
    }
  }

  return (
    <div>
      <h2>Login</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={(e) => handleLogin(e)}>
        <label>Email:</label>
        <input
          type='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <br />
        <label>Password:</label>
        <input
          type='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <br />
        <button type='submit' className='btn'>
          Login
        </button>
      </form>
    </div>
  )
}

export default Login
