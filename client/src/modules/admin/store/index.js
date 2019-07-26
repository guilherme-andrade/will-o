import { combineReducers } from 'redux'
import { NAMESPACE } from '../config'
import usersReducer from '@admin-modules/users/store'
import companiesReducer from '@admin-modules/companies/store'

export default {
  [NAMESPACE]: combineReducers({
    ...usersReducer,
    ...companiesReducer
  })
}
