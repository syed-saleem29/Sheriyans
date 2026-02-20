import React, { createContext } from 'react'

export const UserDataContext = createContext()

const user = 'Sarthak'

const UserContext = (props) => {
  return (
    <div>
        <UserDataContext.Provider value={user}>
            {props.children}
        </UserDataContext.Provider>
    </div>
  )
}

export default UserContext