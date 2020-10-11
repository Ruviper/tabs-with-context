import React, { useReducer } from 'react'

import { CHANGE_TAB } from '../../types'

import TabContext from './tabContext'
import tabReducer from './tabReducer'
import { initialState } from './tabState'


const TabsState = ({ children }) => {
  // Dispatch para ejecutar las acciones
  const [state, dispatch] = useReducer(tabReducer, initialState)

  // Función que cambia el TAB
  const changeTab = tab => 
    dispatch({
      type: CHANGE_TAB,
      payload: tab
    })

  return (
    <TabContext.Provider
      value={{
        activeTab: state.activeTab,
        changeTab
      }}
    >
      {children}
    </TabContext.Provider>
  );
}

export default TabsState
