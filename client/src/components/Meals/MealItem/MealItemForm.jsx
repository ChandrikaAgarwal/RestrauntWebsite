import React, { Fragment, useContext } from 'react'
import CartContext from '../../../Contexts/Cart-Context'
import Cart from '../../Cart/Cart'
function MealItemForm(props) {
  const cartCtx=useContext(CartContext)

  function addToCartHandler(e){
    e.preventDefault()
    cartCtx.addItem(props.item)
  }

  return (
    <Fragment>
    <div>
    <form>
    <div className='flex items-end justify-end mb-2 mt-2'>
      <label htmlFor="amount" className='font-bold'>Amount</label>
      <input type="number" name="amount" id="amount" className='h-[30px] w-[3rem] rounded-md bg-white ml-2' />
    </div>

    <div>
     <button type="button" className='rounded-xl text-white bg-amber-900 ml-4 w-[5rem]' onClick={addToCartHandler}>+ Add</button>
    </div>
    </form>
    </div>
    
    </Fragment>

  )
}

export default MealItemForm
