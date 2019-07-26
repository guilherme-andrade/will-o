import { moduleActions as moduleApiActions } from '@api/helpers'
import { defaultModuleReducers, moduleActions, defaultModuleActions } from '@store/helpers'
import { NAMESPACE as PARENT_NAMESPACE } from '@modules/admin/config'

export const NAMESPACE = 'Companies'
export const BASE_PATH = '/companies'

export const API_ACTIONS = moduleActions(
  PARENT_NAMESPACE,
  moduleApiActions(NAMESPACE)
)

export const ACTION_TYPES = moduleActions(
  PARENT_NAMESPACE,
  defaultModuleActions(NAMESPACE)
)

export const REDUCER_TYPES = moduleActions(
  PARENT_NAMESPACE,
  defaultModuleReducers(NAMESPACE)
)
