import React from 'react'

const AcceptedTask = ({data}) => {
  return (
    <div className='flex shrink-0 flex-col gap-3'>
      <article className='w-72 snap-start rounded-2xl border border-[#2A3433] bg-[#1B2524] p-5 transition-colors hover:border-[#46514F] sm:w-80'>
        <div className='flex items-center justify-between gap-3'>
          <span className='rounded-full bg-[#FF6700]/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#FF8533]'>{data.category}</span>
          <time className='text-xs font-medium text-[#7F8985]'>{data.date}</time>
        </div>

        <div className='mt-4 flex items-center gap-2 text-[#FF8533]'>
          <span className='h-2 w-2 rounded-full bg-[#FF6700]'></span>
          <span className='text-[10px] font-semibold uppercase tracking-[0.16em]'>In progress</span>
        </div>

        <h3 className='mt-4 text-base font-semibold text-[#F5F5F5]'>{data.title}</h3>
        <p className='mt-2 text-sm leading-6 text-[#A7B0AD]'>{data.description}</p>
      </article>

      <div className='flex items-center gap-2'>
        <button className='min-h-11 flex-1 rounded-xl bg-[#FF6700] px-3 py-2 text-sm font-semibold text-[#070D0D] transition hover:bg-[#FF8533] focus:outline-none focus:ring-2 focus:ring-[#FF6700]/60'>Mark as completed</button>
        <button className='min-h-11 rounded-xl border border-[#2A3433] bg-[#101717] px-3 py-2 text-sm font-medium text-[#CBD1CE] transition hover:border-[#9B5147] hover:text-[#F0A08C] focus:outline-none focus:ring-2 focus:ring-[#F0A08C]/40'>Failed</button>
      </div>
    </div>
  )
}

export default AcceptedTask
