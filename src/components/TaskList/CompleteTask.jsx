import React from 'react'

const CompleteTask = ({data}) => {
  return (
    <div className='flex shrink-0 flex-col gap-3'>
      <article className='w-72 snap-start rounded-2xl border border-emerald-100 bg-linear-to-br from-emerald-50 via-white to-slate-50 p-5 shadow-[0_10px_30px_rgba(16,185,129,0.08)] transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(16,185,129,0.12)] sm:w-80'>
        <div className='flex items-center justify-between gap-3'>
          <span className='rounded-full bg-emerald-100 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-emerald-700'>{data.category}</span>
          <time className='text-xs font-medium text-slate-500'>{data.date}</time>
        </div>

        <div className='mt-4 flex items-center gap-2 text-emerald-600'>
          <span className='h-2.5 w-2.5 rounded-full bg-emerald-500'></span>
          <span className='text-[10px] font-semibold uppercase tracking-[0.18em]'>Finished</span>
        </div>

        <h3 className='mt-4 text-base font-semibold text-slate-900'>{data.title}</h3>
        <p className='mt-2 text-sm leading-6 text-slate-600'>{data.description}</p>
      </article>

      <button className='rounded-xl border border-emerald-200 bg-emerald-50 px-3 py-2.5 text-xs font-semibold text-emerald-700 shadow-sm transition hover:bg-emerald-100'>Completed</button>
    </div>
  )
}

export default CompleteTask
