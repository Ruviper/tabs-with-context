import React from 'react'

import TabProvider from './context/tabs/tabProvider'
import TabsWrapper from './containers/TabsWrapper/TabsWrapper.container'

function App() {
  return (
    <TabProvider>
      <TabsWrapper />
    </TabProvider>
  )
}

export default App
