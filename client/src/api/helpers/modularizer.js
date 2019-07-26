import * as actionTypes from '../config/actionTypes'

export function moduleActions(namespace) {
  const result = {}
  Object.keys(actionTypes).forEach(key => {
    result[key] = `${namespace}/${actionTypes[key]}`
  })
  return result
}
