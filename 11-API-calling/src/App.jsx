import React from 'react'
import axios from 'axios'
import { useState } from 'react'

const App = () => {

  const [data, setData] = useState([])

  const getdata = async () => {
    const response = await axios.get('https://picsum.photos/v2/list')

    setData(response.data)
  }

  return (
    <div>
      <button onClick={getdata}>Get Data</button>
      <div>
        {data.map(function (elem,index) {

          return <h3>Hello {elem.author} {index}</h3>          
          })
        }
      </div>
    </div>
  )
}

export default App