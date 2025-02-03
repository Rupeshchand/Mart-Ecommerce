import React, { createContext, useState } from 'react'
import App from '../App'
export const context = createContext()
const ContextProvider = () => {
    const [count,updateCount] = useState(0)
  return (
    <context.Provider value={{count,updateCount}}>
        <App/>
    </context.Provider>
  )
}

export default ContextProvider
