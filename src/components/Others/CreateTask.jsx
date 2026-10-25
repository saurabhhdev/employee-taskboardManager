import React from 'react'

const CreateTask = () => {
  return (
    <main className='mx-auto mt-8 max-w-4xl pb-0 sm:mt-10'>
          <div className='mb-6'>
            <p className='mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-indigo-600'>Task management</p>
            <h2 className='text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl'>Create a task</h2>
            <p className='mt-3 max-w-xl text-sm leading-6 text-slate-500 sm:text-base'>
              Add the details below and assign the work to the right person.
            </p>
          </div>

          <form className='rounded-xl border border-slate-200 bg-white p-4 shadow-sm shadow-slate-200/50 sm:p-6'>
            <div className='grid gap-x-7 gap-y-5 md:grid-cols-2'>
              <div className='space-y-5'>
                <div>
                  <label htmlFor='task-title' className='mb-2 block text-sm font-medium text-slate-700'>Task title</label>
                  <input
                    id='task-title'
                    name='title'
                    type='text'
                    placeholder='e.g. Design the landing page'
                    className='w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 hover:border-slate-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/15'
                  />
                </div>
                <div>
                  <label htmlFor='task-description' className='mb-2 block text-sm font-medium text-slate-700'>Description</label>
                  <textarea
                    name='description'
                    id='task-description'
                    rows={7}
                    placeholder='Add a few details about what needs to be done...'
                    className='w-full resize-y rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm leading-6 text-slate-900 outline-none transition placeholder:text-slate-400 hover:border-slate-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/15'
                  />
                </div>
              </div>

              <div className='space-y-5'>
                <div>
                  <label htmlFor='task-date' className='mb-2 block text-sm font-medium text-slate-700'>Due date</label>
                  <input
                    id='task-date'
                    name='date'
                    type='date'
                    className='w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm text-slate-700 outline-none transition hover:border-slate-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/15'
                  />
                </div>
                <div>
                  <label htmlFor='task-assignee' className='mb-2 block text-sm font-medium text-slate-700'>Assign to</label>
                  <input
                    id='task-assignee'
                    name='assignee'
                    type='text'
                    placeholder='Employee name'
                    className='w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 hover:border-slate-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/15'
                  />
                </div>
                <div>
                  <label htmlFor='task-category' className='mb-2 block text-sm font-medium text-slate-700'>Category</label>
                  <input
                    id='task-category'
                    name='category'
                    type='text'
                    placeholder='Design, development, etc.'
                    className='w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 hover:border-slate-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/15'
                  />
                </div>
              </div>
            </div>

            <div className='mt-6 flex flex-col-reverse gap-3 border-t border-slate-200 pt-5 sm:flex-row sm:items-center sm:justify-between'>
              <p className='text-xs text-slate-500'>Fields can be updated after the task is created.</p>
              <button
                type='submit'
                className='inline-flex items-center justify-center gap-2 rounded-lg bg-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-sm shadow-indigo-600/20 transition hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
              >
                Create task
                <span aria-hidden='true'>→</span>
              </button>
            </div>
          </form>
        </main>
  )
}

export default CreateTask