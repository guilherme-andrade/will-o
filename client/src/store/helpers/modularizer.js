import { reducerTypes, actionTypes } from '../config'

export const statusTypes = ['PENDING', 'SUCCESS', 'FAILURE']

export const actionReducers = {
  default: (module, action) => [`${module}/${action}`],
  withStatus: (module, action) => statusTypes.map(type => `${module}/${action}_${type}`)
}

export function moduleReducers(namespace) {
  const result = {}
  Object.keys(reducerTypes).forEach(key => {
    result[key] = `${namespace}/${reducerTypes[key]}`
  })
  return result
}

export function moduleActions(namespace) {
  const result = {}
  Object.keys(actionTypes).forEach(key => {
    result[key] = `${namespace}/${actionTypes[key]}`
  })
  return result
}
