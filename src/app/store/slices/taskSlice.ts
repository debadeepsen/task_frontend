import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type Task = {
  id: number
  title: string
  description: string | null
  completed: boolean
  deleted: boolean
}

const initialState: Task[] = []

const taskSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {
    setTaskList: (state, action: PayloadAction<Task[]>) => {
      console.log('set tasks')
      action.payload.forEach((t) => state.push(t))
    },
    addTask: (state, action: PayloadAction<Task>) => {
      state.push(action.payload)
    }
  }
})

export const { addTask, setTaskList } = taskSlice.actions

export default taskSlice.reducer
