import React, { useContext } from 'react'
import { ThemeData } from '../context/ThemeContext'

const Section1 = () => {

  const data = useContext(ThemeData)


  return (
    <div >Section1 {data[0]}</div>
  )
}

export default Section1