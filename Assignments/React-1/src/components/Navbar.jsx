import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="left">
            Horizon Courts
        </div>
        <div className="middle">
            <a href="#">About Us</a>
            <a href="#">Services</a>
            <a href="#">Coaches</a>
            <a href="#">Events</a>
            <a href="#">Contacts</a>
        </div>
        <div className="right">Book now <i class="ri-arrow-right-up-line"></i></div>
    </div>
  )
}

export default Navbar