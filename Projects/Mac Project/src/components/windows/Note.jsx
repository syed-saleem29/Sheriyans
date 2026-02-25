import React, {useEffect, useState} from 'react'
import Markdown from 'react-markdown'
import MacWindows from '../windows/MacWindows'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atelierDuneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import "./note.scss"

const Note = ({windowName, windowsState, setWindowsState}) => {

    const [markDown, setMarkDown] = useState(null)

    useEffect(()=>{
        fetch("/note.txt")
        .then(res => res.text())
        .then(text => setMarkDown(text))
    },[])

  return (
    <MacWindows windowName={windowName} windowsState={windowsState} setWindowsState={setWindowsState}>
        <div className="note-window">
            {markDown ? <SyntaxHighlighter language='typescript' style={atelierDuneDark} >{markDown}</SyntaxHighlighter> : <p>Loading...</p>}
        </div>
    </MacWindows>
  )
}

export default Note