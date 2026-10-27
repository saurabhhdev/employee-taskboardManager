import React from 'react'

const NewTask = ({data}) => {
  return (
    <div className='flex shrink-0 flex-col gap-3'>
      <article className='w-72 snap-start rounded-2xl border border-[#3A332D] bg-[#1B2524] p-5 transition-colors hover:border-[#554133] sm:w-80'>
        <div className='flex items-center justify-between gap-3'>
          <span className='rounded-full bg-[#FF6700]/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#FF8533]'>{data.category}</span>
          <time className='text-xs font-medium text-[#7F8985]'>{data.date}</time>
        </div>

        <div className='mt-4 flex items-center gap-2 text-[#FF8533]'>
          <span className='h-2 w-2 rounded-full bg-[#FF6700]'></span>
          <span className='text-[10px] font-semibold uppercase tracking-[0.16em]'>Awaiting action</span>
        </div>

        <h3 className='mt-4 text-base font-semibold text-[#F5F5F5]'>{data.title}</h3>
        <p className='mt-2 text-sm leading-6 text-[#A7B0AD]'>{data.description}</p>
      </article>

      <button className='min-h-11 rounded-xl bg-[#FF6700] px-3 py-2.5 text-sm font-semibold text-[#070D0D] transition hover:bg-[#FF8533] focus:outline-none focus:ring-2 focus:ring-[#FF6700]/60 focus:ring-offset-2 focus:ring-offset-[#070D0D]'>Accept Task</button>
    </div>
  )
}

export default NewTask
