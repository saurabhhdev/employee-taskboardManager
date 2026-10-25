import React from 'react'

const TaskList = () => {
  return (
    <section aria-label='Your tasks' className='mt-8 border-t border-slate-200 pt-6 sm:mt-10'>
      <div className='mb-4'>
        <h2 className='text-lg font-semibold tracking-tight text-slate-900'>Your tasks</h2>
        <p className='mt-1 text-sm text-slate-500'>Stay on top of your assigned work.</p>
      </div>

      <div id='tasklist' className='flex w-full snap-x snap-mandatory gap-4 overflow-x-auto pb-2'>
        <article className='w-72 shrink-0 snap-start rounded-xl border border-slate-200 bg-white p-5 shadow-sm sm:w-80'>
          <div className='flex items-center justify-between gap-3'>
            <span className='rounded-full bg-rose-50 px-2.5 py-1 text-xs font-medium text-rose-700'>High priority</span>
            <time className='text-xs text-slate-500'>25 Oct 2026</time>
          </div>
          <h3 className='mt-4 text-base font-semibold text-slate-900'>Write a code...</h3>
          <p className='mt-2 text-sm leading-6 text-slate-500'>Complete the assigned development work and review the implementation.</p>
        </article>

        <article className='w-72 shrink-0 snap-start rounded-xl border border-slate-200 bg-white p-5 shadow-sm sm:w-80'>
          <div className='flex items-center justify-between gap-3'>
            <span className='rounded-full bg-rose-50 px-2.5 py-1 text-xs font-medium text-rose-700'>High priority</span>
            <time className='text-xs text-slate-500'>25 Oct 2026</time>
          </div>
          <h3 className='mt-4 text-base font-semibold text-slate-900'>Write a code...</h3>
          <p className='mt-2 text-sm leading-6 text-slate-500'>Complete the assigned development work and review the implementation.</p>
        </article>

        <article className='w-72 shrink-0 snap-start rounded-xl border border-slate-200 bg-white p-5 shadow-sm sm:w-80'>
          <div className='flex items-center justify-between gap-3'>
            <span className='rounded-full bg-rose-50 px-2.5 py-1 text-xs font-medium text-rose-700'>High priority</span>
            <time className='text-xs text-slate-500'>25 Oct 2026</time>
          </div>
          <h3 className='mt-4 text-base font-semibold text-slate-900'>Write a code...</h3>
          <p className='mt-2 text-sm leading-6 text-slate-500'>Complete the assigned development work and review the implementation.</p>
        </article>

        <article className='w-72 shrink-0 snap-start rounded-xl border border-slate-200 bg-white p-5 shadow-sm sm:w-80'>
          <div className='flex items-center justify-between gap-3'>
            <span className='rounded-full bg-rose-50 px-2.5 py-1 text-xs font-medium text-rose-700'>High priority</span>
            <time className='text-xs text-slate-500'>25 Oct 2026</time>
          </div>
          <h3 className='mt-4 text-base font-semibold text-slate-900'>Write a code...</h3>
          <p className='mt-2 text-sm leading-6 text-slate-500'>Complete the assigned development work and review the implementation.</p>
        </article>

        <article className='w-72 shrink-0 snap-start rounded-xl border border-slate-200 bg-white p-5 shadow-sm sm:w-80'>
          <div className='flex items-center justify-between gap-3'>
            <span className='rounded-full bg-rose-50 px-2.5 py-1 text-xs font-medium text-rose-700'>High priority</span>
            <time className='text-xs text-slate-500'>25 Oct 2026</time>
          </div>
          <h3 className='mt-4 text-base font-semibold text-slate-900'>Write a code...</h3>
          <p className='mt-2 text-sm leading-6 text-slate-500'>Complete the assigned development work and review the implementation.</p>
        </article>
      </div>
    </section>
  )
}

export default TaskList