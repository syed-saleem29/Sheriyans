import React, { createContext, useState } from 'react'

export const ThemeData = createContext()
const ThemeContext = ({children}) => {

    const theme = 'Dark'
    const [allData, setAllData] = useState('Saleem')



  return (
    <div>
        <ThemeData.Provider value={[allData,setAllData]}>
            {children}
        </ThemeData.Provider>
    </div>
  )
}

export default ThemeContext