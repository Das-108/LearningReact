import React from 'react'

const App = () => {

  const [num, setNum] = useState(10)
  
  const btn = () => {
    setNum(num+1)
    setNum(num+1)
    setNum(num+1)
  }

  return (
    <div>
      <h1>{num}</h1>
      <button onClick={btn}></button>
    </div>
  )
}

export default App