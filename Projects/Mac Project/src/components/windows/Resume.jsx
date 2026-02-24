import React from 'react'
import MacWindows from './MacWindows'
import "./resume.scss"

const Resume = () => {
  return (
    <MacWindows>
        <div className="resume-window">
            <embed src="/resume.pdf" frameborder="0"></embed>
        </div>
    </MacWindows>
  )
}

export default Resume