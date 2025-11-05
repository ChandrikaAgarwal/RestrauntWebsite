import React from 'react'
import MealItemForm from './MealItemForm'
function MealItem(props) { 
  const price= props.meal?.price?`$${props.meal.price.toFixed(2)}`:""
  return <li>
    <div className='flex justify-between items-center m-4'>
    <div>
        <h3 className='text-lg font-bold ml-6 mb-1'>{props.meal.name}</h3>
        <div className='italic ml-6 mb-1'>{props.meal.description}</div>
        <div className='font-bold text-md ml-6 text-amber-900 mb-2'>{price}</div>
    </div>
    <MealItemForm item={props}/>
    </div>
    <hr className='mx-auto w-[45rem]' />
  </li>
}

export default MealItem
