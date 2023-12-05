import { APP_KEY_USER } from '@/app/utils/constants'
import api from './api'
import { store } from '@/app/store'
import { setTaskList } from '@/app/store/slices/taskSlice'

export const loadTasksIntoState = async () => {
  const email = localStorage.getItem(APP_KEY_USER)!
  const taskList = await api.getTasks(email)

  console.log({ taskList, email })

  if (!store.getState().tasks?.length) {
    store.dispatch(setTaskList(taskList))
  }
}
