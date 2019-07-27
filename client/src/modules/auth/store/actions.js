import { NAMESPACE, ACTION_TYPES, API_ACTIONS } from '../config'
import { actionReducers } from '@store/helpers'

const {
  LOAD,
  LOGIN,
  REGISTER,
  LOGOUT,
  UPDATE_FIELD
} = ACTION_TYPES

export default {
  [LOAD]: () => ({
    types: actionReducers.withStatus(NAMESPACE, LOAD),
    promise: client => client[API_ACTIONS.LOAD]
  }),
  [LOGIN]: () => ({
    types: actionReducers.withStatus(NAMESPACE, LOGIN),
    promise: client => client[API_ACTIONS.LOGIN]
  }),
  [REGISTER]: () => ({
    types: actionReducers.withStatus(NAMESPACE, REGISTER),
    promise: () => {}
  }),
  [LOGOUT]: () => ({
    types: actionReducers.default(NAMESPACE, LOGOUT),
    promise: () => { }
  }),
  [UPDATE_FIELD]: () => ({
    types: actionReducers.default(NAMESPACE, UPDATE_FIELD),
    promise: () => { }
  }),
}

