import React from 'react'
import Card from './components/Card'

const App = () => {
  return (
    <div className='p-3 h-screen bg-black'>
      <Card user='Saleem' />
      <Card user='Anarkali' />
      <Card user='John' />
    </div>
  )
}

export default App