import { reducerTypes, actionTypes } from '../config'

export const statusTypes = ['PENDING', 'SUCCESS', 'FAILURE']

export const actionReducers = {
  default: (action) => [action],
  withStatus: (action) => statusTypes.map(type => `${action}_${type}`)
}

export function defaultModuleReducers(namespace) {
  const result = {}
  Object.keys(reducerTypes).forEach(key => {
    result[key] = `${namespace}/${reducerTypes[key]}`
  })
  return result
}

export function defaultModuleActions(namespace) {
  const result = {}
  Object.keys(actionTypes).forEach(key => {
    result[key] = `${namespace}/${actionTypes[key]}`
  })
  return result
}

export function moduleActions(namespace, actions) {
  const result = {}
  Object.keys(actions).forEach(key => {
    result[key] = `${namespace}/${actions[key]}`
  })
  return result
}

export function moduleReducers(namespace, reducers) {
  const result = {}
  Object.keys(reducers).forEach(key => {
    result[key] = `${namespace}/${actionTypes[key]}`
  })
  return result
}
