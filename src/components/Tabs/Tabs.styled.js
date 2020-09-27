import styled from 'styled-components'

import Tabs from './Tabs.component'

export default styled(Tabs).attrs({})`
  
  .tab-buttons-container {
    display: flex;
    justify-content: space-around;
  }

  .button {
    background-color: steelblue;
    padding: 10px;
    color: #FFF;

    &.active-button {
      background-color: red;
    }
  }
`
