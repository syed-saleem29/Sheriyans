import React from 'react'
import "./App.scss"
import Dock from './components/Dock'
import Nav from './components/Nav'
import MacWindows from './components/windows/MacWindows'
import Github from './components/Windows/Github'
import Note from './components/windows/Note'
import Resume from './components/windows/Resume'

const App = () => {
  return (
    <main>
      <Nav/>
      <Github/>
      <Note/>
      <Resume/>
      <Dock/>
    </main>
  )
}

export default App