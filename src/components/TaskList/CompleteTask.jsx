import React from 'react'

const CompleteTask = ({data}) => {
  return (
    <div className='flex shrink-0 flex-col gap-3'>
      <article className='w-72 snap-start rounded-2xl border border-[#2A3433] bg-[#1B2524] p-5 transition-colors hover:border-[#46514F] sm:w-80'>
        <div className='flex items-center justify-between gap-3'>
          <span className='rounded-full bg-[#A7D6A0]/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#A7D6A0]'>{data.category}</span>
          <time className='text-xs font-medium text-[#7F8985]'>{data.date}</time>
        </div>

        <div className='mt-4 flex items-center gap-2 text-[#A7D6A0]'>
          <span className='h-2 w-2 rounded-full bg-[#A7D6A0]'></span>
          <span className='text-[10px] font-semibold uppercase tracking-[0.16em]'>Finished</span>
        </div>

        <h3 className='mt-4 text-base font-semibold text-[#F5F5F5]'>{data.title}</h3>
        <p className='mt-2 text-sm leading-6 text-[#A7B0AD]'>{data.description}</p>
      </article>

      <button className='min-h-11 rounded-xl border border-[#2A3433] bg-[#101717] px-3 py-2.5 text-sm font-semibold text-[#A7D6A0]'>Completed</button>
    </div>
  )
}

export default CompleteTask
