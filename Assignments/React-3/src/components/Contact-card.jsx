import React from 'react'

const Contact = (props) => {
    console.log(props)
  return (
    <div className='card'>
        <div className="profile">{props.data.userName.charAt(0).toUpperCase()}</div>
        <div className="details">
            <h2>{props.data.userName}</h2>
            <p>{props.data.userEmail}</p>
        </div>
    </div>
  )
}

export default Contact