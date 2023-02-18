import React from 'react'

const ServicesCard = ({tag, url}) => {
  return (
    <div className='flex items-center justify-center w-full h-52 bg-slate-400 my-16 overflow-hidden relative'>
        <span className='font-bold text-md text-yellow-100 absolute top-2 right-2 bg-black p-2'>{tag}</span>
        <img src={url} alt="content" className='h-full object-cover'/>
    </div>
  )
}

export default ServicesCard