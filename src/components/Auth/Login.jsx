import React, { useState } from 'react'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const submithandler = (e) => {
    e.preventDefault()
    setEmail('')
    setPassword('')
  }

  return (
    <main className='flex min-h-screen w-full items-center justify-center bg-slate-50 px-5 py-10 text-slate-900'>
      <section className='w-full max-w-md rounded-2xl border border-slate-200 bg-white p-7 shadow-lg shadow-slate-200/60 sm:p-9'>
        <div className='mb-8'>
          <p className='mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-indigo-600'>Task management</p>
          <h1 className='text-2xl font-semibold tracking-tight text-slate-900'>Welcome back</h1>
          <p className='mt-2 text-sm leading-6 text-slate-500'>Sign in to continue to your workspace.</p>
        </div>

        <form onSubmit={submithandler} className='flex flex-col gap-5'>
          <div>
            <label htmlFor='login-email' className='mb-2 block text-sm font-medium text-slate-700'>Email address</label>
          <input
            id='login-email'
            name='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            autoComplete='email'
            className='w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 hover:border-slate-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/15'
            type='email'
            placeholder='you@example.com'
          />
          </div>
          <div>
            <label htmlFor='login-password' className='mb-2 block text-sm font-medium text-slate-700'>Password</label>
          <input
            id='login-password'
            name='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            autoComplete='current-password'
            className='w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 hover:border-slate-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/15'
            type='password'
            placeholder='Enter your password'
          />
          </div>
          <button
            type='submit'
            className='mt-1 inline-flex w-full items-center justify-center rounded-lg bg-indigo-600 px-4 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
          >
            Sign in
          </button>
        </form>
      </section>
    </main>
  )
}

export default Login