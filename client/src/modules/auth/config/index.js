import { moduleActions as moduleApiActions } from '@api/helpers'
import { defaultModuleReducers, defaultModuleActions } from '@store/helpers'

export const NAMESPACE = 'Auth'
export const BASE_PATH = ''

export const API_ACTIONS = {
  ...moduleApiActions(NAMESPACE),
  LOGIN: 'login'
}

export const ACTION_TYPES = defaultModuleActions(NAMESPACE)
export const REDUCER_TYPES = defaultModuleReducers(NAMESPACE)
