import React from 'react'
import AcceptedTask from './AcceptedTask'
import NewTask from './NewTask'
import FailedTask from './FailedTask'
import CompleteTask from './CompleteTask'

const TaskList = ({ data }) => {
  return (
    <section aria-label='Your tasks' className='rounded-2xl border border-[#2A3433] bg-[#131D1D] p-4 sm:p-6'>
      <div className='mb-5 flex items-end justify-between gap-3'>
        <div>
          <h2 className='text-lg font-semibold tracking-tight text-[#F5F5F5]'>Your tasks</h2>
          <p className='mt-1 text-sm text-[#A7B0AD]'>Stay on top of your assigned work.</p>
        </div>
        <span className='rounded-full border border-[#2A3433] bg-[#101717] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#CBD1CE]'>{data.tasks.length} items</span>
      </div>

      <div id='tasklist' className='flex w-full snap-x snap-mandatory gap-5 overflow-x-auto pb-3'>
        {data.tasks.map((elem, idx) => {
          if (elem.active) {
            return <AcceptedTask key={idx} data={elem} />
          }

          if (elem.newTask) {
            return <NewTask key={idx} data={elem} />
          }

          if (elem.completed) {
            return <CompleteTask key={idx} data={elem} />
          }

          if (elem.failed) {
            return <FailedTask key={idx} data={elem} />
          }

          return null
        })}
      </div>
    </section>
  )
}

export default TaskList