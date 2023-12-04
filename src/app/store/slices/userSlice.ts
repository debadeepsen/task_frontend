import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type UserState = {
  isAuthenticated: boolean
  user: {
    email: string
  } | null
}

const initialState: UserState = {
  isAuthenticated: false,
  user: null
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginSuccess: (state, action: PayloadAction<{ email: string }>) => {
      state.isAuthenticated = true
      state.user = action.payload
    },
    logout: (state) => {
      state.isAuthenticated = false
      state.user = null
    }
  }
})

export const { loginSuccess, logout } = userSlice.actions

export default userSlice.reducer
