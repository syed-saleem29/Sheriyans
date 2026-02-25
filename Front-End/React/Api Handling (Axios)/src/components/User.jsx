import React from 'react'

const User = (props) => {
    console.log(props.elem)
    const clr1 = Math.floor(Math.random()*256)
    const clr2 = Math.floor(Math.random()*256)
    const clr3 = Math.floor(Math.random()*256)


  return (
    <div className='card' style={{backgroundColor: `rgb(${clr1},${clr2},${clr3})`}}>
        <h2>{props.elem.name}</h2>
        <h4>{props.elem.company.name}</h4>
    </div>
  )
}

export default User