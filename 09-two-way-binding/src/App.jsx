import React from 'react'

const App = () => {

  const [title, setTitle] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()
    console.log('form submitted by', title)
  }

  return (
    <div>
      <form action="">
        <input type="text"
         placeholder='Enter your name'
         value={title} 
         onChange={(e) => {setTitle(e.target.value)}}/>
        <button onClick={(e) => {
          submitHandler(e)
        }}>Sumbit</button>
      </form>
    </div>
  )
}

export default App