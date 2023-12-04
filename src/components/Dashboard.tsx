import { useState } from 'react'

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
        </div>
      </div>
      {showTaskModal && (
        // going to refactor this into another component if time permits
        <div className='fixed left-0 top-0 w-screen h-screen z-[10] bg-zinc-900/30 flex justify-center items-center'>
          <div className='p-4 bg-white rounded-md'>
            <form>
              <input
                type='text'
                placeholder='Task name'
                className='block p-4'
              />
              <div className='flex justify-end mt-2'>
                <button className='btn btn-primary mr-2 w-full'>Save</button>
                <button
                  className='btn btn-secondary w-full'
                  onClick={() => setShowTaskModal(false)}
                >
                  Close
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}

export default Dashboard
