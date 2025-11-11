import React, { useEffect, useState } from 'react'
import axios from 'axios'

const App = () => {

  const [userData, setUserData] = useState([])
  const [index, setIndex] = useState(1)

  const getData = async () => {
    try {
      const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=34`)

      setUserData(response.data)
    } catch (error) {
      console.log("Error Fetching data: " , error)
    }    
  }

  useEffect( function() {
    getData()
  },[index])

  let printUserData = <h3 className='text-gray-400 font-semibold top-1/2 left-1/2 translate-x-1/2 translate-y-1/2'> Loading.....</h3>

  if(userData.length>0) {
    printUserData = userData.map(function(elem , index) {

      return (
        <div key={index}>
          <a href={elem.url}>
            <div className='h-40 w-44 bg-white    rounded-xl overflow-hidden'>
            <img className='h-full w-full object-cover' src={elem.download_url} alt="" />          
          </div>
          <h2 className='font-bold text-lg'>{elem.author}</h2>
          </a>
        </div>
        
      )
    })
  }

  return (
    <div className='bg-black h-screen text-white p-4 overflow-auto'>
      <h1 className='flex text-xl fixed bg-amber-500 px-2 text-black rounded'>{index}</h1>      
      <div className='flex gap-4 flex-wrap py-2'>
        {printUserData}
      </div>

      <div className='flex justify-center gap-6 items-center'>
        <button
        onClick={ () => {

          if(index > 1) {
            setIndex(index-1)
            setUserData([])
          }
        }}
        className='bg-amber-400 active:scale-95 text-sm font-semibold cursor-pointer px-4 py-2 rounded text-black '>Prev</button>

         <h4>Page {index}</h4>
        <button 
        onClick={ () => {

        setIndex(index+1)
        setUserData([])
        }}
        className= 'bg-amber-400 active:scale-95 text-sm font-semibold cursor-pointer px-4 py-2 rounded text-black'>Next</button>      
      </div>
    </div>
  )
}

export default App