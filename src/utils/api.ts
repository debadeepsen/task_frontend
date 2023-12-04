import { post, get } from './fetchHandler'
export const baseApiUrl = `http://localhost:8080/`

const api = {
  login: async (email: string, password: string) => {
    const loginData = await post(baseApiUrl + 'login', {
      email,
      password
    })

    return loginData
  },

  getTasks: async (email: string) => {
    const taskList = await get(baseApiUrl + `tasks?email=${email}`)

    return taskList
  },

  addTask: async (email: string, title: string) => {
    const taskList = await post(baseApiUrl + 'tasks', {
      email,
      title
    })

    return taskList
  }
}

export default api
