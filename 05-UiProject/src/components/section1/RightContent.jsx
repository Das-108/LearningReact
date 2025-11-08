import React from 'react'
import RightCard from './RightCard'

const RightContent = (props) => {
  return (
    <div id='right' className='h-full overflow-x-auto p-4 flex flex-nowrap gap-6 w-2/3'>
      {props.users.map(function (elem, index) {
        return (
          <RightCard key={index} id={index} img={elem.img} tag={elem.tag} />
        )
      })}
    </div>
  )
}

export default RightContent