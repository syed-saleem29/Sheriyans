import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-between px-10 py-5 bg-emerald-300 '>
        <h2 className='text-2xl font-medium'>Sheriyans Coding School</h2>
        <div className="flex justify-between font-medium w-90 text-xl">
            <h4>Home</h4>
            <h4>About</h4>
            <h4>Services</h4>
            <h4>Contact Us</h4>
        </div>
    </div>
  )
}

export default Navbar