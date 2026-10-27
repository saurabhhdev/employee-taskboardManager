import React from 'react'
import Header from '../Others/Header'
import CreateTask from '../Others/CreateTask'
import AllTasks from '../Others/AllTasks'

const AdminDashboard = (props) => {
  return (
    <div className='min-h-screen w-full bg-slate-50 px-5 py-7 text-slate-900 sm:px-8 sm:py-10'>
      <div className='mx-auto max-w-6xl'>
        <Header changeUser={props.changeUser} variant='light' />

        <CreateTask />
        <AllTasks />


      </div>
    </div>
  )
}

export default AdminDashboard