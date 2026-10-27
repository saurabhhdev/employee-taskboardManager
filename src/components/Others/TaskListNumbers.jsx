import React from 'react'

const TaskListNumbers = ({data}) => {
  return (
    <section aria-label='Task summary' className='mt-8 grid grid-cols-2 gap-3 sm:mt-10 sm:grid-cols-4 sm:gap-4'>
      <div className='rounded-xl border border-sky-100 border-t-2 border-t-sky-500 bg-sky-50/70 p-4 shadow-sm sm:p-5'>
        <p className='text-2xl font-semibold tracking-tight text-sky-700'>{data.taskNumbers.newTask}</p>
        <h2 className='mt-1 text-sm font-medium text-sky-900/70'>New tasks</h2>
      </div>

      <div className='rounded-xl border border-amber-100 border-t-2 border-t-amber-500 bg-amber-50/70 p-4 shadow-sm sm:p-5'>
        <p className='text-2xl font-semibold tracking-tight text-amber-700'>{data.taskNumbers.active}</p>
        <h2 className='mt-1 text-sm font-medium text-amber-900/70'>In progress</h2>
      </div>

      <div className='rounded-xl border border-emerald-100 border-t-2 border-t-emerald-500 bg-emerald-50/70 p-4 shadow-sm sm:p-5'>
        <p className='text-2xl font-semibold tracking-tight text-emerald-700'>{data.taskNumbers.completed}</p>
        <h2 className='mt-1 text-sm font-medium text-emerald-900/70'>Completed</h2>
      </div>

      <div className='rounded-xl border border-rose-100 border-t-2 border-t-rose-500 bg-rose-50/70 p-4 shadow-sm sm:p-5'>
        <p className='text-2xl font-semibold tracking-tight text-rose-700'>{data.taskNumbers.failed}</p>
        <h2 className='mt-1 text-sm font-medium text-rose-900/70'>Failed</h2>
      </div>
    </section>

  )
}

export default TaskListNumbers