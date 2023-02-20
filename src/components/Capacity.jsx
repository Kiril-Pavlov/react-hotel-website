import React from 'react'

const Capacity = () => {
    let statistics=[
        {quantity:"4+",item:"Hotels"},
        {quantity:"127+",item:"Rooms"},
        {quantity:"6+",item:"Beaches"},
        {quantity:"458+",item:"Guests"},
    ]
  return (
    <div className="max-w-5xl px-5 mx-auto grid grid-cols-2 lg:grid-cols-4 gap-10 justify-between">
        {statistics.map((statistic)=>(
            <div>
                <div>{statistic.quantity}</div>
                <div>{statistic.item}</div>
            </div>
        ))}
    </div>
  )
}

export default Capacity