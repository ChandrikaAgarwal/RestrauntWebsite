import React from 'react'

function MealItem(props) {
  const price=`$${props.meal.price.toFixed(2)}`
  return <li>
    <div>
        <h3 className='text-lg font-bold ml-6 mb-1'>{props.meal.name}</h3>
        <div className='italic ml-6 mb-1'>{props.meal.description}</div>
        <div className='font-bold text-md ml-6 text-amber-950 mb-2'>{price}</div>
    </div>
    <hr className='mx-auto w-[45rem] ' />
  </li>
}

export default MealItem
