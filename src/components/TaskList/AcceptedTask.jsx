import React from 'react'

const AcceptedTask = ({data}) => {
  return (
    <div className='flex shrink-0 flex-col gap-3'>
      <article className='w-72 snap-start rounded-2xl border border-emerald-100 bg-linear-to-br from-white via-emerald-50/30 to-slate-50 p-5 shadow-[0_10px_30px_rgba(15,23,42,0.08)] transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(16,185,129,0.12)] sm:w-80'>
        <div className='flex items-center justify-between gap-3'>
          <span className='rounded-full bg-emerald-100 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-emerald-700'>{data.category}</span>
          <time className='text-xs font-medium text-slate-500'>{data.date}</time>
        </div>

        <div className='mt-4 flex items-center gap-2 text-emerald-600'>
          <span className='h-2.5 w-2.5 rounded-full bg-emerald-500'></span>
          <span className='text-[10px] font-semibold uppercase tracking-[0.18em]'>In progress</span>
        </div>

        <h3 className='mt-4 text-base font-semibold text-slate-900'>{data.title}</h3>
        <p className='mt-2 text-sm leading-6 text-slate-600'>{data.description}</p>
      </article>

      <div className='flex items-center gap-2'>
        <button className='flex-1 rounded-xl bg-slate-900 px-3 py-2 text-xs font-medium text-white shadow-sm transition hover:bg-slate-700'>Mark as completed</button>
        <button className='rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs font-medium text-slate-600 transition hover:border-rose-200 hover:text-rose-600'>Failed</button>
      </div>
    </div>
  )
}

export default AcceptedTask
