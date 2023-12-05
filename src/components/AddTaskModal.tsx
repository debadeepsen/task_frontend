'use client'

import { addTask } from '@/app/store/slices/taskSlice'
import { APP_KEY_USER } from '@/app/utils/constants'
import api from '@/utils/api'
import { FormEvent, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

const AddTaskModal = ({ onClose }: { onClose: () => void }) => {
  const dispatch = useDispatch()
  const [taskTitle, setTaskTitle] = useState('')

  const handleSave = async (e: FormEvent) => {
    e.preventDefault()
    const email = localStorage.getItem(APP_KEY_USER)!
    const result = await api.addTask(email, taskTitle)

    // console.log({taskId})
    dispatch(addTask({ id: result.taskId, title: taskTitle, completed: false, deleted: false }))
    onClose?.()
  }

  return (
    <div className='fixed left-0 top-0 w-screen h-screen z-[10] bg-zinc-900/30 flex justify-center items-center'>
      <div className='p-4 bg-white rounded-md'>
        <form onSubmit={(e) => handleSave(e)}>
          <input
            type='text'
            placeholder='Task name'
            className='block p-4'
            value={taskTitle}
            onChange={(e) => setTaskTitle(e.target.value)}
          />
          <div className='flex justify-end mt-2'>
            <button className='btn btn-primary mr-2 w-full'>Save</button>
            <button className='btn btn-secondary w-full' onClick={onClose}>
              Close
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AddTaskModal
