import React from 'react'
import Header from '../Others/Header'
import CreateTask from '../Others/CreateTask'
import AllTasks from '../Others/AllTasks'

const AdminDashboard = (props) => {
  return (
    <div className='min-h-screen w-full bg-[#070D0D] px-4 py-5 text-[#F5F5F5] sm:px-8 sm:py-8'>
      <div className='mx-auto max-w-6xl space-y-6 sm:space-y-8'>
        <Header changeUser={props.changeUser} variant='light' />

        <CreateTask />
        <AllTasks />
      </div>
    </div>
  )
}

export default AdminDashboard