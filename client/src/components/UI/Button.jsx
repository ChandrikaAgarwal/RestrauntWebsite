import React from 'react'

function Button(props) {
  return (
    <div>
        <div class="row flex">
  <button
    class="rounded-md rounded-r-none bg-white py-0.5 px-4 border  border-amber-900 text-center text-md text-amber-900 transition-all shadow-md hover:shadow-lg focus:bg-amber-950 focus:text-white focus:shadow-none hover:bg-amber-900 hover:text-white active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
    type="button"
  >
    {props.minus}
  </button>
  <button
    class="rounded-md rounded-l-none bg-white py-0.5 px-4 border border-amber-900 text-center text-md text-amber-900 transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none hover:bg-amber-900 hover:text-white active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
    type="button"
  >
    {props.plus}
  </button>
  
</div>
      
    </div>
  )
}

export default Button
