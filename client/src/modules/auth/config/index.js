import { moduleActions as moduleApiActions } from '@api/helpers'
import { moduleReducers, moduleActions } from '@store/helpers'

export const NAMESPACE = 'Auth'
export const BASE_PATH = ''

export const API_ACTIONS = {
  ...moduleApiActions(NAMESPACE),
  LOGIN: 'login'
}

export const ACTIONS = moduleActions(NAMESPACE)
export const REDUCERS = moduleReducers(NAMESPACE)
