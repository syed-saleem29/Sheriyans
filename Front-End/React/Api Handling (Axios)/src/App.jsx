import React, { useEffect, useState } from 'react'
import axios, { all } from 'axios'
import User from './components/User'


const App = () => {

  const [allData, setAllData] = useState([])

  useEffect(function(){
    getData()
  },[])
  
  async function getData(){
    const response = await axios.get('https://jsonplaceholder.typicode.com/users')
    setAllData(response.data)
    // console.log(allData)
  }
  // console.log(allData)
  return (
    <div className='all-cards'>
      {allData.map((elem,idx)=>{
        return <div className="container" key = {idx}>
          <User elem={elem} />
        </div>
      })}
    </div>
  )
}

export default App