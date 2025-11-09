import React from 'react'

const App = () => {

  const submitHandler = (e) => {
    e.preventDefault()
    console.log('form submitted')
  }

  return (
    <div>
      <form action="">
        <input type="text" placeholder='Enter your name' />
        <button onClick={(e) => {
          submitHandler(e)
        }}>Sumbit</button>
      </form>
    </div>
  )
}

export default App