import styled from 'styled-components'

import TabsWrapper from './TabsWrapper.component'

export default styled(TabsWrapper).attrs({})`
  display: flex;
  flex-direction: column;
  padding: 10px;
  margin: 10px;
  border: 1px solid black;

  .title {
    display: flex;
    justify-content: center;
    font-size: 25px;
    text-transform: uppercase;
    margin-bottom: 30px;
  }
`
