import React from 'react'
import "./App.scss"
import Dock from './components/Dock'
import Nav from './components/Nav'
import MacWindows from './components/windows/MacWindows'
import Github from './components/Windows/Github'

const App = () => {
  return (
    <main>
      <Nav/>
      <Github/>
      <Dock/>
    </main>
  )
}

export default App