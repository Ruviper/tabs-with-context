import React, { useContext } from 'react'

import tabContext from '../../context/tabs/tabContext'

import Tabs from '../Tabs/Tabs.container'
import TabItem from '../Tabs/component/TabItem/TabItem.container'

const TabsWrapper = ({ className }) => {
  const tabsContext = useContext(tabContext)
  const { activeTab, changeTab } = tabsContext

  return (
    <div className={className}>
      <div className="title">
        Nuestros productos
      </div>
      <Tabs
        tabs={[
          { title: 'Consolas', value: 1 },
          { title: 'Videojuegos', value: 2 },
          { title: 'Funko pop', value: 3 },
          { title: 'Camisetas', value: 4}
        ]}
        onChangeTab={changeTab}
        activeTab={activeTab}
      >
        <TabItem value={1}>
          <h1>Lista de consolas</h1>
        </TabItem>
        <TabItem value={2}>
          <h1>Lista de Videojuegos</h1>
        </TabItem>
        <TabItem value={3}>
          <h1>Lista de Funko pop</h1>
        </TabItem>
        <TabItem value={4}>
          <h1>Lista de Camisetas</h1>
        </TabItem>
      </Tabs>
    </div>
  );
}

export default TabsWrapper
