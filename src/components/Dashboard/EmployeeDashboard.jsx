import React from 'react'
import Header from '../Others/Header'
import TaskListNumbers from '../Others/TaskListNumbers'
import TaskList from '../TaskList/TaskList'

const EmployeeDashboard = (props) => {
  return (
    <div className='min-h-screen w-full bg-[#070D0D] px-4 py-5 text-[#F5F5F5] sm:px-8 sm:py-8'>
      <div className='mx-auto max-w-6xl space-y-6 sm:space-y-8'>
        <Header changeUser={props.changeUser} data={props.data} variant='light' />
        <TaskListNumbers data={props.data} />
        <TaskList data={props.data} />
      </div>
    </div>
  )
}

export default EmployeeDashboard