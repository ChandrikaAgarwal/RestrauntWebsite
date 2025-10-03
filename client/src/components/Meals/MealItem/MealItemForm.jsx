import React, { Fragment } from 'react'

function MealItemForm() {
  return (
    <Fragment>
    <div>
      
    <div className='flex items-end justify-end mb-2 mt-2'>
      <label htmlFor="amount" className='font-bold'>Amount</label>
      <input type="number" name="amount" id="amount" className='h-[30px] w-[3rem] rounded-md bg-white ml-2' />
    </div>

    <div>
     <button type="button" className='rounded-xl text-white bg-amber-900 ml-4 w-[5rem]'>+ Add</button>
    </div>
    </div>
    </Fragment>

  )
}

export default MealItemForm
