import { combineReducers } from 'redux'
import auth from '@modules/auth/store'
import admin from '@modules/admin/store'

export default combineReducers({
  ...auth,
  ...admin
})
