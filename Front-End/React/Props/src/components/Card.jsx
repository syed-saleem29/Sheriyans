import React from 'react'

const Card = (props) => {
  return (
    <div className=' p-3 w-fit  px-10 bg-emerald-400 text-2xl font-bold rounded-md mb-2'>{props.user}</div>
    
  )
}

export default Card