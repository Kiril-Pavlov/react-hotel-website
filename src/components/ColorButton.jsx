import React from 'react'

const ColorButton = ({value}) => {
  return (
    <div className='bg-primaryClr hover:bg-primaryDark py-5 px-10 text-white hover:text-black font-btnFont uppercase duration-500'>{value}</div>
  )
}

export default ColorButton