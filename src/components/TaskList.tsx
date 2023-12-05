'use client'

import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '@/app/store'
import { loadTasksIntoState } from '@/utils/util'

const TaskList = () => {
  const tasks = useSelector((state: RootState) => state.tasks)

  useEffect(() => {
    loadTasksIntoState()
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
