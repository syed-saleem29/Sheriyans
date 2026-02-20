import React, { createContext } from 'react'
import { UserDataContext } from '../context/UserContext'

const Footer = () => {

    const data = createContext(UserDataContext)


  return (
    <div className='absolute w-screen bg-orange-400 bottom-0 h-10 text-2xl font-semibold'>
        <h2>This is Footer {data}</h2>
    </div>
  )
}

export default Footer