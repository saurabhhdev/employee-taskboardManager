import React from 'react'

const Header = ({ changeUser, data, variant = 'dark' }) => {
  const isLight = variant === 'light'

  const logOutUser = () => {
    localStorage.setItem('loggedInUser', '')
    changeUser(null)
  }

  return (
    <header className={`flex items-center justify-between rounded-2xl border bg-[#131D1D] px-4 py-4 sm:px-5 ${isLight ? 'border-[#2A3433]' : 'border-[#2A3433]'}`}>
      <div>
        <p className='text-xs font-medium uppercase tracking-[0.16em] text-[#A7B0AD]'>Hello,</p>
        <h1 className='mt-1 text-xl font-semibold tracking-tight text-[#F5F5F5] sm:text-2xl'>
          {data ? data.name : 'Admin'}
        </h1>
      </div>
      <button
        onClick={logOutUser}
        type='button'
        className='min-h-11 rounded-xl border border-[#2A3433] bg-[#101717] px-4 py-2.5 text-sm font-medium text-[#CBD1CE] transition hover:border-[#FF6700] hover:text-[#FF8533] focus:outline-none focus:ring-2 focus:ring-[#FF6700]/35'
      >
        Log out
      </button>
    </header>
  )
}

export default Header