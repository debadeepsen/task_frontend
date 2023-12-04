'use client'

import { APP_KEY_USER } from '@/app/utils/constants'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import api from '@/utils/api'
import { RootState } from '@/app/store'
import { setTaskList } from '@/app/store/slices/taskSlice'

const TaskList = () => {
  const tasks = useSelector((state: RootState) => state.tasks)
  const dispatch = useDispatch()

  useEffect(() => {
    ;(async () => {
      const email = localStorage.getItem(APP_KEY_USER)!
      const taskList = await api.getTasks(email)

      console.log({taskList, email})

      if (!tasks?.length) {
        dispatch(setTaskList(taskList))
      }
    })()
  }, [])

  return (
    <div>
      <h2>Task List</h2>
      {tasks?.map((t) => (
        <div key={t.id} className='bg-white rounded-lg mb-2 p-2 shadow-xs'>
          {t.title}
        </div>
      ))}
      {!tasks && <div>No task saved. Please create a new one.</div>}
    </div>
  )
}

export default TaskList
