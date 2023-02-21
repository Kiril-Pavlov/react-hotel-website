import React from 'react'

const BestRoomCard = ({img , adults, size }) => {
  return (
    <div className='border-2 w-full h-96 relative'>
        <div className='w-full h-48 overflow-hidden'>
            <img src={img} alt=""  className='object-cover w-full'/>
            <div className='absolute top-40 bg-black text-white px-3 h-8 flex flex-row items-center gap-3 font-normal text-sm'>
                <div>Adults: {adults}</div>
                <div>Size: {size}ft</div>
            </div>
        </div>
    </div>
  )
}

export default BestRoomCard