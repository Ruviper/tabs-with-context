import { CHANGE_TAB } from '../../types'

export default (state, { type, payload }) => {
  switch(type) {
    case CHANGE_TAB:
      return {
        ...state,
        activeTab: payload
      }
    default:
      return state;
  }
}