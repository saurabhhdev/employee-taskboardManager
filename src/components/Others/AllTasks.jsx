import React from 'react'
import { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AllTasks = () => {
  const [userData, setUserData] = useContext(AuthContext)
  const employees = [userData,setUserData]?.employees || JSON.parse(localStorage.getItem('employees') || '[]')

  return (
    <section className='mt-8 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm shadow-slate-200/50'>
      <div className='flex flex-col gap-1 border-b border-slate-200 px-4 py-4 sm:px-6'>
        <h2 className='text-lg font-semibold tracking-tight text-slate-900'>All tasks</h2>
        <p className='text-sm text-slate-500'>Review tasks and their current status.</p>
      </div>

      <div className='overflow-x-auto'>
        <div className='min-w-190'>
          <div className='grid grid-cols-[1.5fr_1fr_1fr_1fr_1fr] gap-3 bg-slate-50 px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-slate-500 sm:px-6'>
            <span>Employee</span>
            <span>New</span>
            <span>Active</span>
            <span>Completed</span>
            <span>Failed</span>
          </div>

          {employees.map((elem) => {
            return (
              <div key={elem.id} className='grid grid-cols-[1.5fr_1fr_1fr_1fr_1fr] items-center gap-3 border-b border-slate-200 px-4 py-3 transition hover:bg-slate-50/80 sm:px-6'>
                <div className='flex items-center gap-3'>
                  <span className='flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-indigo-50 text-sm font-semibold text-indigo-700'>
                    {elem.name.charAt(0)}
                  </span>
                  <span className='text-sm font-medium text-slate-800'>{elem.name}</span>
                </div>
                <span className='text-sm text-sky-700'>{elem.taskNumbers?.newTask || 0}</span>
                <span className='text-sm text-slate-700'>{elem.taskNumbers?.active || 0}</span>
                <span className='text-sm text-emerald-700'>{elem.taskNumbers?.completed || 0}</span>
                <span className='text-sm text-rose-700'>{elem.taskNumbers?.failed || 0}</span>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default AllTasks