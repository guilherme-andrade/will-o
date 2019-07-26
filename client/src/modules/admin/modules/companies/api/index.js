import RestClient from '@api/RestClient'
import { REST_ACTIONS } from '@api/config'
import { API_ACTIONS } from '../config'

const {
  LOAD,
} = API_ACTIONS;

export default {
  [LOAD]: RestClient[REST_ACTIONS.LOAD]('users/load'),
}
