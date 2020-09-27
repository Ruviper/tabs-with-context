import React from 'react'

const TabItem = ({ className, children }) => {
  return (
    <div className={className}>
      {children}
    </div>
  );
}

export default TabItem