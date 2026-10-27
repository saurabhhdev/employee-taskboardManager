import React from 'react'
import { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AllTasks = () => {
  const [userData] = useContext(AuthContext)
  const employees = userData || JSON.parse(localStorage.getItem('employees') || '[]')

  return (
    <section className='overflow-hidden rounded-2xl border border-[#2A3433] bg-[#131D1D]'>
      <div className='flex flex-col gap-1 border-b border-[#2A3433] px-4 py-4 sm:px-6'>
        <h2 className='text-lg font-semibold tracking-tight text-[#F5F5F5]'>All tasks</h2>
        <p className='text-sm text-[#A7B0AD]'>Review tasks and their current status.</p>
      </div>

      <div className='overflow-x-auto'>
        <div className='min-w-190'>
          <div className='grid grid-cols-[1.5fr_1fr_1fr_1fr_1fr] gap-3 bg-[#101717] px-4 py-3 text-xs font-semibold uppercase tracking-wider text-[#A7B0AD] sm:px-6'>
            <span>Employee</span>
            <span>New</span>
            <span>Active</span>
            <span>Completed</span>
            <span>Failed</span>
          </div>

          {employees.map((elem) => {
            return (
              <div key={elem.id} className='grid grid-cols-[1.5fr_1fr_1fr_1fr_1fr] items-center gap-3 border-b border-[#2A3433] px-4 py-3 transition-colors hover:bg-[#1B2524] sm:px-6'>
                <div className='flex items-center gap-3'>
                  <span className='flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#FF6700]/10 text-sm font-semibold text-[#FF8533]'>
                    {elem.name.charAt(0)}
                  </span>
                  <span className='text-sm font-medium text-[#F5F5F5]'>{elem.name}</span>
                </div>
                <span className='text-sm font-medium text-[#FF8533]'>{elem.taskNumbers?.newTask || 0}</span>
                <span className='text-sm text-[#F5F5F5]'>{elem.taskNumbers?.active || 0}</span>
                <span className='text-sm text-[#A7D6A0]'>{elem.taskNumbers?.completed || 0}</span>
                <span className='text-sm text-[#F0A08C]'>{elem.taskNumbers?.failed || 0}</span>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default AllTasks