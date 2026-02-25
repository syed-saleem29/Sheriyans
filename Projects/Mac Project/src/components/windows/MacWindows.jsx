import React from 'react'
import {Rnd } from 'react-rnd'
import "./window.scss"

const MacWindows = ({children,width = "800px",height="500px" , windowName, windowsState, setWindowsState}) => {
  return (
    <Rnd
    default={{
      width:width,
      height:height,
      x:300,
      y:100 

    }}
    >
      <div className="window">
        <div className="nav">
          <div className="dots">
            <div 
            
            onClick={() => setWindowsState({...windowsState, [windowName]: false})}
            
            className="dot red"></div>
            <div className="dot yellow"></div>
            <div className="dot green"></div>
          </div>
          <div className="title"><p>leyakier - zsx</p></div>
        </div>
        <div className="main-content">
          {children}
        </div>
      </div>
    </Rnd>
  )
}

export default MacWindows