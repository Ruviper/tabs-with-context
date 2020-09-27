import React from 'react'

import TabProvider from './context/tabs/tabState'
import TabsWrapper from './components/TabsWrapper/TabsWrapper.container'

function App() {
  return (
    <TabProvider>
      <TabsWrapper />
    </TabProvider>
  )
}

export default App
