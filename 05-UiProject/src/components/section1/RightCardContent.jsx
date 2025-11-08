import React from 'react'

const RightCardContent = (props) => {
  return (
    <div className="absolute top-0 left-0 h-full w-full p-8 flex flex-col justify-between">
            <h2 className='bg-white rounded-full h-12 w-12 flex text-2xl font-bold justify-center items-center'>{props.id+1}</h2>
            <div>
                <p className='text-lg leading-normal text-white mb-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam doloremque aut itaque, fugit voluptate illum!</p>
                <div className='justify-between flex'>
                    <button className='bg-blue-600 text-white font-medium px-8 py-2 rounded-full'>{props.tag}</button>
                    <button className='bg-blue-600 text-white font-medium px-4 py-2 text-lg rounded-full '> <i className='ri-arrow-right-line'></i></button>
                </div>
            </div>
    </div>
  )
}

export default RightCardContent