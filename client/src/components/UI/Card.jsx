import React from 'react'

function Card(props) {
  return (
    <div className='bg-gray-400 mx-auto w-[50rem] mt-5 rounded-lg'>
      {props.children}
    </div>
  )
}

export default Card
