import { moduleActions as moduleApiActions } from '@api/helpers'
import { moduleReducers, moduleActions } from '@store/helpers'
import actionTypes from './actionTypes'
import reducerTypes from './reducerTypes'

export const NAMESPACE = 'Users'
export const BASE_PATH = '/users'

export const API_ACTIONS = moduleApiActions(NAMESPACE)

export const ACTIONS = moduleActions(NAMESPACE, actionTypes)
export const REDUCERS = moduleReducers(NAMESPACE, reducerTypes)
