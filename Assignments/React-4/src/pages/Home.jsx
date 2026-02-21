import React from 'react'
import {useNavigate} from 'react-router-dom'

const Home = () => {

    const navigate = useNavigate()

  return (
    <div className='min-h-screen bg-[#242424] flex justify-center items-center flex-col'>
        <h1 className='text-6xl m-5'>This is HomePage</h1>
        <button className='bg-emerald-400 px-5 py-2 rounded active:scale-95 cursor-pointer' onClick={()=>{
            navigate('/products')
        }}>
            Explore Products
        </button>
    </div>
  )
}

export default Home