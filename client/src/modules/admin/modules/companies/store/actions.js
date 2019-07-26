import { ACTION_TYPES, API_ACTIONS } from '../config'
import { actionReducers } from '@store/helpers'

const {
  LOAD,
} = ACTION_TYPES;

export default {
  [LOAD]: () => ({
    types: actionReducers.withStatus(LOAD),
    promise: client => client[API_ACTIONS.LOAD]
  }),
}

