import React from 'react'
import RightCardContent from './RightCardContent'

const RightCard = (props) => {
  return (
    <div className='h-full w-80 bg-red-500 shrink-0 overflow-hidden relative rounded-4xl'>
        <img className='h-full w-full object-cover' src={props.img} alt="" />
        <RightCardContent tag={props.tag} id ={props.id} />
    </div>
  )
}

export default RightCard