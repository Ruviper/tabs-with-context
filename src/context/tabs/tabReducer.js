import { CHANGE_TAB } from '../../types'

export default (state, action) => {
  switch(action.type) {
    case CHANGE_TAB:
      return {
        ...state,
        activeTab: action.payload
      }
    default:
      return state;
  }
}