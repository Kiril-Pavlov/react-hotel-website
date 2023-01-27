import React from 'react'

import { SlHandbag } from 'react-icons/sl'

const CartModal = () => {
  return (
    <div className='w-10 flex items-center justify-center'>
      <SlHandbag size={20} fill='white'/>
      <span>1</span>
    </div>
  )
}

export default CartModal