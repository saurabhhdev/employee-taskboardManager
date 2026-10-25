import React from 'react'

const AllTasks = () => {
  return (
    <section className='mt-8 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm shadow-slate-200/50'>
      <div className='flex flex-col gap-1 border-b border-slate-200 px-4 py-4 sm:px-6'>
        <h2 className='text-lg font-semibold tracking-tight text-slate-900'>All tasks</h2>
        <p className='text-sm text-slate-500'>Review tasks and their current status.</p>
      </div>

      <div className='overflow-x-auto'>
        <div className='min-w-150'>
          <div className='grid grid-cols-[1fr_2fr_0.8fr] gap-4 bg-slate-50 px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-slate-500 sm:px-6'>
            <span>Employee</span>
            <span>Task</span>
            <span>Status</span>
          </div>

          <div className='divide-y divide-slate-100'>
            <div className='grid grid-cols-[1fr_2fr_0.8fr] items-center gap-4 px-4 py-3 transition hover:bg-slate-50/80 sm:px-6'>
              <div className='flex items-center gap-3'>
                <span className='flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-indigo-50 text-sm font-semibold text-indigo-700'>S</span>
                <span className='text-sm font-medium text-slate-800'>Saurabh</span>
              </div>
              <span className='text-sm text-slate-600'>Create a fullstack project</span>
              <span>
                <span className='inline-flex items-center rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-600 ring-1 ring-inset ring-slate-500/10'>Status</span>
              </span>
            </div>

            <div className='grid grid-cols-[1fr_2fr_0.8fr] items-center gap-4 px-4 py-3 transition hover:bg-slate-50/80 sm:px-6'>
              <div className='flex items-center gap-3'>
                <span className='flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-indigo-50 text-sm font-semibold text-indigo-700'>S</span>
                <span className='text-sm font-medium text-slate-800'>Saurabh</span>
              </div>
              <span className='text-sm text-slate-600'>Create a fullstack project</span>
              <span>
                <span className='inline-flex items-center rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-600 ring-1 ring-inset ring-slate-500/10'>Status</span>
              </span>
            </div>

            <div className='grid grid-cols-[1fr_2fr_0.8fr] items-center gap-4 px-4 py-3 transition hover:bg-slate-50/80 sm:px-6'>
              <div className='flex items-center gap-3'>
                <span className='flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-indigo-50 text-sm font-semibold text-indigo-700'>S</span>
                <span className='text-sm font-medium text-slate-800'>Saurabh</span>
              </div>
              <span className='text-sm text-slate-600'>Create a fullstack project</span>
              <span>
                <span className='inline-flex items-center rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-600 ring-1 ring-inset ring-slate-500/10'>Status</span>
              </span>
            </div>

            <div className='grid grid-cols-[1fr_2fr_0.8fr] items-center gap-4 px-4 py-3 transition hover:bg-slate-50/80 sm:px-6'>
              <div className='flex items-center gap-3'>
                <span className='flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-indigo-50 text-sm font-semibold text-indigo-700'>S</span>
                <span className='text-sm font-medium text-slate-800'>Saurabh</span>
              </div>
              <span className='text-sm text-slate-600'>Create a fullstack project</span>
              <span>
                <span className='inline-flex items-center rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-600 ring-1 ring-inset ring-slate-500/10'>Status</span>
              </span>
            </div>

            <div className='grid grid-cols-[1fr_2fr_0.8fr] items-center gap-4 px-4 py-3 transition hover:bg-slate-50/80 sm:px-6'>
              <div className='flex items-center gap-3'>
                <span className='flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-indigo-50 text-sm font-semibold text-indigo-700'>S</span>
                <span className='text-sm font-medium text-slate-800'>Saurabh</span>
              </div>
              <span className='text-sm text-slate-600'>Create a fullstack project</span>
              <span>
                <span className='inline-flex items-center rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-600 ring-1 ring-inset ring-slate-500/10'>Status</span>
              </span>
            </div>

            <div className='grid grid-cols-[1fr_2fr_0.8fr] items-center gap-4 px-4 py-3 transition hover:bg-slate-50/80 sm:px-6'>
              <div className='flex items-center gap-3'>
                <span className='flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-indigo-50 text-sm font-semibold text-indigo-700'>S</span>
                <span className='text-sm font-medium text-slate-800'>Saurabh</span>
              </div>
              <span className='text-sm text-slate-600'>Create a fullstack project</span>
              <span>
                <span className='inline-flex items-center rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-600 ring-1 ring-inset ring-slate-500/10'>Status</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AllTasks