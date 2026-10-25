import React from 'react'

const Header = ({ variant = 'dark' }) => {
  const isLight = variant === 'light'

  return (
    <header className={`flex items-center justify-between border-b pb-6 ${isLight ? 'border-slate-200' : 'border-slate-800'}`}>
      <div>
        <p className={`text-sm font-medium ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>Hello,</p>
        <h1 className={`mt-1 text-xl font-semibold tracking-tight sm:text-2xl ${isLight ? 'text-slate-900' : 'text-white'}`}>Saurabh</h1>
      </div>
      <button
        type='button'
        className={`rounded-lg border px-4 py-2 text-sm font-medium transition focus:outline-none focus:ring-2 ${isLight
          ? 'border-slate-300 text-slate-600 hover:border-slate-400 hover:bg-white hover:text-slate-900 focus:ring-indigo-500'
          : 'border-slate-700 text-slate-300 hover:border-slate-500 hover:bg-slate-800 hover:text-white focus:ring-cyan-400'
        }`}
      >
        Log out
      </button>
    </header>
  )
}

export default Header