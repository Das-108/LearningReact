import React, { useState } from 'react'

const App = () => {

  const submitHandler = (e) => {
    e.preventDefault()
    console.log("Form submitted!") 

    const copyTask = [...task]

    copyTask.push({title,details})

    setTask(copyTask)
    setTitle('')
    setDetails('')
  }

  const deleteNote = (index) => {
    const copyTask =[...task]
    copyTask.splice(index,1)
    setTask(copyTask)
  }

  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')
  const [task, setTask] = useState([])

  return (
    <div className='h-screen lg:flex bg-black text-white'>
      <form 
        onSubmit={submitHandler} 
        className='flex p-10 gap-4 flex-col lg:w-1/2'
      >
        <h1>Add Notes</h1>

        <input 
          type="text"
          placeholder='Enter Notes Heading'
          className='px-5 py-2 w-full outline-none border-2 font-medium rounded'
          value={title}
          onChange={(e) => {
            setTitle(e.target.value)
          }} 
        />

        <textarea
          placeholder="Enter Details"
          className='px-5 py-2 w-full outline-none flex font-medium items-start h-20 border-2 rounded'
          value={details}
          onChange={(e) => {
            setDetails(e.target.value)
          }}
        />

        <button 
          type="submit" 
          className='w-full bg-white text-black active:scale-95 font-medium px-5 py-2 rounded'
        >
          Add Note
        </button>
      </form>

      <div className='flex flex-wrap p-10 lg:border-l-2 lg:w-1/2'>
        <h1 className='text-3xl font-bold w-full'>Recent Notes</h1>
        <div className='flex flex-wrap overflow-auto h-[90%] mt-5 gap-4'>
          {task.map(function(elem, index) {

            return (
              <div key={index} className='h-52 flex flex-col justify-between  w-40 rounded-2xl text-black p-4 bg-white'>
                <div>
                  <h3 className='leading-tight text-xl font-bold'>{elem.title}</h3>
                  <p className='mt-3 leading-tight font-medium text-gray-500'>{elem.details}</p>
                </div>

                <button onClick={() => {
                  deleteNote(index)
                  }}
                 className='w-full py-2 text-xs rounded font-bold bg-red-400 text-white active:scale-95'
                 >Delete
                </button>

              </div>
            )
          })}          
        </div>
      </div>
    </div>
  )
}

export default App
