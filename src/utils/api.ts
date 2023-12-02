import { post } from './fetchHandler'
export const baseApiUrl = `http://localhost:8080/`

const api = {
  login: async (email: string, password: string) => {
    const loginData = await post(baseApiUrl + 'login', {
      email,
      password
    })

    return loginData
  }
}

export default api
