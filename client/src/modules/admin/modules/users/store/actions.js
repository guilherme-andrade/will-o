import { NAMESPACE, ACTIONS, API_ACTIONS } from '../config'
import { actionReducers } from '@store/helpers'

const {
  LOAD,
  LOGIN,
  REGISTER,
  LOGOUT,
  UPDATE_FIELD
} = ACTIONS;

console.log(LOAD);

export default {
  [LOAD]: () => ({
    types: actionReducers.withStatus(LOAD),
    promise: client => client[API_ACTIONS.LOAD]
  }),
  [LOGIN]: () => ({
    types: actionReducers.withStatus(LOGIN),
    promise: client => client[API_ACTIONS.LOGIN]
  }),
  [REGISTER]: () => ({
    types: actionReducers.withStatus(REGISTER),
    promise: () => {}
  }),
  [LOGOUT]: () => ({
    types: actionReducers.default(LOGOUT),
    promise: () => { }
  }),
  [UPDATE_FIELD]: () => ({
    types: actionReducers.default(UPDATE_FIELD),
    promise: () => { }
  }),
}

