import React from 'react'

const Tabs = ({ className, children, tabs, activeTab, onChangeTab }) => {

  return (
    <div className={className}>
      <div className="tab-buttons-container">
        {tabs.map(({ title, value }) => (
          <button
            key={value}
            onClick={() => onChangeTab(value)}
            className={`button ${activeTab === value ? 'active-button' : ''}`}
          >
            {title}
          </button>
        ))}
      </div>
      {children.find(({ props: { value } }) => value === activeTab)}
    </div>
  )
}

export default Tabs