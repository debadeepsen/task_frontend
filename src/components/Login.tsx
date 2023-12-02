// Login.tsx
import api from '@/utils/api'
import React, { useState } from 'react'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleLogin = async () => {
    try {
      const loginData = await api.login(email, password)

      console.log(loginData) // Handle successful login response
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
      <form>
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
        <button type='button' onClick={handleLogin}>
          Login
        </button>
      </form>
    </div>
  )
}

export default Login
