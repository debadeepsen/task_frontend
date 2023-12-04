'use client'

import { useState } from 'react'
import TaskList from './TaskList'
import AddTaskModal from './AddTaskModal'

const Dashboard = () => {
  const [showTaskModal, setShowTaskModal] = useState(false)
  return (
    <div>
      <div className='fixed bg-white shadow-lg top-0 w-screen h-[50px] flex justify-end items-center p-4 box-border'>
        <button className='border-0 bg-white/0 text-md cursor-pointer text-[var(--primary-color)] px-2'>
          Logout
        </button>
      </div>
      <div className='p-6 pt-10 min-h-[calc(100vh-50px)] bg-[var(--primary-color-faded)]'>
        <div className='max-w-[800px] mx-auto'>
          <h1>Welcome to your Dashboard</h1>
          <button
            className='btn btn-primary'
            onClick={() => setShowTaskModal(true)}
          >
            Add task
          </button>
          <div>
            <TaskList />
          </div>
        </div>
      </div>
      {showTaskModal && (
        <AddTaskModal onClose={() => setShowTaskModal(false)} />
      )}
    </div>
  )
}

export default Dashboard
