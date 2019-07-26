import { moduleActions as moduleApiActions } from '@api/helpers'
import { defaultModuleReducers, defaultModuleActions } from '@store/helpers'

export const NAMESPACE = 'Auth'
export const BASE_PATH = ''

export const API_ACTIONS = {
  ...moduleApiActions(NAMESPACE),
  LOGIN: 'login'
}

export const ACTIONS = defaultModuleActions(NAMESPACE)
export const REDUCERS = defaultModuleReducers(NAMESPACE)
