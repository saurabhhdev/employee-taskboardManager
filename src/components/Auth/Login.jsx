import React, { useState } from 'react'

const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const submithandler = (e) => {
    e.preventDefault()
    handleLogin(email, password)
    setEmail('')
    setPassword('')
  }

  return (
    <main className='flex min-h-screen w-full items-center justify-center bg-[#070D0D] px-5 py-10 text-[#F5F5F5]'>
      <section className='w-full max-w-md rounded-3xl border border-[#2A3433] bg-[#131D1D] p-6 shadow-[0_24px_70px_rgba(0,0,0,0.32)] sm:p-9'>
        <div className='mb-8'>
          <p className='mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#FF8533]'>Employee Dashboard</p>
          <h1 className='text-2xl font-semibold tracking-tight text-[#F5F5F5]'>Welcome back</h1>
          <p className='mt-2 text-sm leading-6 text-[#A7B0AD]'>Sign in to continue to your workspace.</p>
        </div>

        <form onSubmit={submithandler} className='flex flex-col gap-5'>
          <div>
            <label htmlFor='login-email' className='mb-2 block text-sm font-medium text-[#CBD1CE]'>Email address</label>
            <input
              id='login-email'
              name='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              autoComplete='email'
              className='w-full rounded-xl border border-[#2A3433] bg-[#101717] px-4 py-3 text-sm text-[#F5F5F5] outline-none transition placeholder:text-[#7F8985] hover:border-[#46514F] focus:border-[#FF6700] focus:ring-2 focus:ring-[#FF6700]/20'
              type='email'
              placeholder='you@example.com'
            />
          </div>

          <div>
            <label htmlFor='login-password' className='mb-2 block text-sm font-medium text-[#CBD1CE]'>Password</label>
            <input
              id='login-password'
              name='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              autoComplete='current-password'
              className='w-full rounded-xl border border-[#2A3433] bg-[#101717] px-4 py-3 text-sm text-[#F5F5F5] outline-none transition placeholder:text-[#7F8985] hover:border-[#46514F] focus:border-[#FF6700] focus:ring-2 focus:ring-[#FF6700]/20'
              type='password'
              placeholder='Enter your password'
            />
          </div>

          <button
            type='submit'
            className='mt-1 inline-flex min-h-12 w-full items-center justify-center rounded-xl bg-[#FF6700] px-4 py-3 text-sm font-semibold text-[#070D0D] transition hover:bg-[#FF8533] focus:outline-none focus:ring-2 focus:ring-[#FF6700] focus:ring-offset-2 focus:ring-offset-[#131D1D]'
          >
            Sign in
          </button>
        </form>
      </section>
    </main>
  )
}

export default Login