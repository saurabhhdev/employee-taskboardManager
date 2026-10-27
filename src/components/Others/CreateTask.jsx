import React, { useState } from 'react'
import { AuthContext } from '../../context/AuthProvider'
import { useContext } from 'react'

const CreateTask = () => {

  const [userData, setUserData] = useContext(AuthContext)


  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [date, setDate] = useState('')
  const [assignee, setAssignee] = useState('')
  const [category, setCategory] = useState('')
  const [task, setTask] = useState({})

  const submitHandler = (e) => {
    e.preventDefault()

    setTask({title,description,date,assignee,category,active:false,newTask:true,failed:false,completed:false})

    const eData = userData
    eData.forEach(function(elem){
      if(assignee == elem.name){
        elem.tasks.push(task)
        elem.taskNumbers.newTask =  elem.taskNumbers.newTask + 1
      }

    })

    setUserData(eData)
    console.log(eData);

    

    

    if (!title || !description || !date || !assignee || !category) {
      return
    }

    setTitle('')
    setDescription('')
    setDate('')
    setAssignee('')
    setCategory('')
  }

  return (
    <main className='mx-auto max-w-4xl'>
      <div className='mb-6'>
        <p className='mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#FF8533]'>Task management</p>
        <h2 className='text-2xl font-semibold tracking-tight text-[#F5F5F5] sm:text-3xl'>Create a task</h2>
        <p className='mt-2 max-w-xl text-sm leading-6 text-[#A7B0AD]'>
          Add the details below and assign the work to the right person.
        </p>
      </div>

      <form onSubmit={submitHandler} className='rounded-2xl border border-[#2A3433] bg-[#131D1D] p-4 sm:p-6'>
        <div className='grid gap-x-7 gap-y-5 md:grid-cols-2'>
          <div className='space-y-5'>
            <div>
              <label htmlFor='task-title' className='mb-2 block text-sm font-medium text-[#CBD1CE]'>Task title</label>
              <input
                id='task-title'
                name='title'
                type='text'
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder='e.g. Design the landing page'
                className='min-h-11 w-full rounded-xl border border-[#2A3433] bg-[#101717] px-4 py-3 text-sm text-[#F5F5F5] outline-none transition placeholder:text-[#7F8985] hover:border-[#46514F] focus:border-[#FF6700] focus:ring-2 focus:ring-[#FF6700]/20'
              />
            </div>
            <div>
              <label htmlFor='task-description' className='mb-2 block text-sm font-medium text-[#CBD1CE]'>Description</label>
              <textarea
                name='description'
                id='task-description'
                rows={7}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder='Add a few details about what needs to be done...'
                className='w-full resize-y rounded-xl border border-[#2A3433] bg-[#101717] px-4 py-3 text-sm leading-6 text-[#F5F5F5] outline-none transition placeholder:text-[#7F8985] hover:border-[#46514F] focus:border-[#FF6700] focus:ring-2 focus:ring-[#FF6700]/20'
              />
            </div>
          </div>

          <div className='space-y-5'>
            <div>
              <label htmlFor='task-date' className='mb-2 block text-sm font-medium text-[#CBD1CE]'>Due date</label>
              <input
                id='task-date'
                name='date'
                type='date'
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className='min-h-11 w-full rounded-xl border border-[#2A3433] bg-[#101717] px-4 py-3 text-sm text-[#F5F5F5] outline-none transition hover:border-[#46514F] focus:border-[#FF6700] focus:ring-2 focus:ring-[#FF6700]/20'
              />
            </div>
            <div>
              <label htmlFor='task-assignee' className='mb-2 block text-sm font-medium text-[#CBD1CE]'>Assign to</label>
              <input
                id='task-assignee'
                name='assignee'
                type='text'
                value={assignee}
                onChange={(e) => setAssignee(e.target.value)}
                placeholder='Employee name'
                className='min-h-11 w-full rounded-xl border border-[#2A3433] bg-[#101717] px-4 py-3 text-sm text-[#F5F5F5] outline-none transition placeholder:text-[#7F8985] hover:border-[#46514F] focus:border-[#FF6700] focus:ring-2 focus:ring-[#FF6700]/20'
              />
            </div>
            <div>
              <label htmlFor='task-category' className='mb-2 block text-sm font-medium text-[#CBD1CE]'>Category</label>
              <input
                id='task-category'
                name='category'
                type='text'
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                placeholder='Design, development, etc.'
                className='min-h-11 w-full rounded-xl border border-[#2A3433] bg-[#101717] px-4 py-3 text-sm text-[#F5F5F5] outline-none transition placeholder:text-[#7F8985] hover:border-[#46514F] focus:border-[#FF6700] focus:ring-2 focus:ring-[#FF6700]/20'
              />
            </div>
          </div>
        </div>

        <div className='mt-6 flex flex-col-reverse gap-3 border-t border-[#2A3433] pt-5 sm:flex-row sm:items-center sm:justify-between'>
          <p className='text-xs text-[#7F8985]'>Fields can be updated after the task is created.</p>
          <button
            type='submit'
            className='inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-[#FF6700] px-5 py-3 text-sm font-semibold text-[#070D0D] transition hover:bg-[#FF8533] focus:outline-none focus:ring-2 focus:ring-[#FF6700] focus:ring-offset-2 focus:ring-offset-[#131D1D]'
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