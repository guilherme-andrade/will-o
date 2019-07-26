import { NAMESPACE } from '../config'
import initialState from './state'
import reducers from './reducers'

export default {
  [NAMESPACE]: (state = { ...initialState }, action = {}) => {
    if (reducers[action.type]) {
      return reducers[action.type](state, action);
    }
    return state;
  }
}
