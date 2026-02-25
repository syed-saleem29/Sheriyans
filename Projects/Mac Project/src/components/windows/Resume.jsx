import React from 'react'
import MacWindows from './MacWindows'
import "./resume.scss"

const Resume = ({windowName, windowsState, setWindowsState}) => {
  return (
    <MacWindows windowName={windowName} windowsState={windowsState} setWindowsState={setWindowsState}>
        <div className="resume-window">
            <embed src="/resume.pdf" frameBorder="0"></embed>
        </div>
    </MacWindows>
  )
}

export default Resume