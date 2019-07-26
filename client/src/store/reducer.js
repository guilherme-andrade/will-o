import { combineReducers } from 'redux'
import auth from '@modules/auth/store'

export default combineReducers({
  ...auth
})
