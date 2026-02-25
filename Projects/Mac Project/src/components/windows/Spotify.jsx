import React from 'react'
import MacWindows from './MacWindows'
import "./spotify.scss"

const Spotify = ({windowName, windowsState, setWindowsState}) => {
  return (
    <MacWindows width='40vw' windowName={windowName} windowsState={windowsState} setWindowsState={setWindowsState}>
        <div className="spotify-window">
            <iframe data-testid="embed-iframe" style={{borderRadius:"12px"}} src="https://open.spotify.com/embed/playlist/3dlmaRKDEZfFb3uRjglB9A?utm_source=generator&theme=0" width="100%" height=""  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
        </div>
    </MacWindows>
  )
}

export default Spotify