import React, { useReducer } from "react"

import AppContextReducer from "./AppContextReducer"

const AppContext = React.createContext()

function AppContextProvider(props) {
  const [ state, dispatch ] = useReducer(AppContextReducer, {
    theme: `light`
  })

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {props.children}
    </AppContext.Provider>
  )
}

export { AppContext, AppContextProvider }