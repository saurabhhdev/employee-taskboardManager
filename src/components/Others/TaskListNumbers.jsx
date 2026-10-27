import React from 'react'

const TaskListNumbers = ({ data }) => {
  return (
    <section aria-label='Task summary' className='grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4'>
      <div className='rounded-2xl border border-[#2A3433] border-t-2 border-t-[#FF6700] bg-[#131D1D] p-4 sm:p-5'>
        <p className='text-2xl font-semibold tracking-tight text-[#FF8533]'>{data.taskNumbers.newTask}</p>
        <h2 className='mt-1 text-sm font-medium text-[#A7B0AD]'>New tasks</h2>
      </div>

      <div className='rounded-2xl border border-[#2A3433] bg-[#131D1D] p-4 sm:p-5'>
        <p className='text-2xl font-semibold tracking-tight text-[#F5F5F5]'>{data.taskNumbers.active}</p>
        <h2 className='mt-1 text-sm font-medium text-[#A7B0AD]'>In progress</h2>
      </div>

      <div className='rounded-2xl border border-[#2A3433] bg-[#131D1D] p-4 sm:p-5'>
        <p className='text-2xl font-semibold tracking-tight text-[#A7D6A0]'>{data.taskNumbers.completed}</p>
        <h2 className='mt-1 text-sm font-medium text-[#A7B0AD]'>Completed</h2>
      </div>

      <div className='rounded-2xl border border-[#2A3433] bg-[#131D1D] p-4 sm:p-5'>
        <p className='text-2xl font-semibold tracking-tight text-[#F0A08C]'>{data.taskNumbers.failed}</p>
        <h2 className='mt-1 text-sm font-medium text-[#A7B0AD]'>Failed</h2>
      </div>
    </section>
  )
}

export default TaskListNumbers