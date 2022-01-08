import React from 'react'
import { AppInitialState, AppReducer } from './AppReducer'

const AppStateContext = React.createContext()
const AppDispatchContext = React.createContext()

export function AppProvider({ children }) {
  const [state, dispatch] = React.useReducer(AppReducer, AppInitialState)

  return (
    <AppStateContext.Provider value={state}>
      <AppDispatchContext.Provider value={dispatch}>{children}</AppDispatchContext.Provider>
    </AppStateContext.Provider>
  )
}

export function useAppState() {
  const context = React.useContext(AppStateContext)
  if (context === undefined) {
    throw new Error('ERROR: useAppState must be used inside of AppProvider')
  }
  return context
}

export function useAppDispatch() {
  const context = React.useContext(AppDispatchContext)
  if (context === undefined) {
    throw new Error('ERROR: useAppDispatch must be used inside of AppProvider')
  }
  return context
}
