import { RestClient } from '@api'
import { API_ACTIONS } from '../config'

const {
  LOAD,
  LOGIN
} = API_ACTIONS;

export default {
  [LOAD]:     () => RestClient.get('users/load'),
  [LOGIN]:    credentials => RestClient.post('users/login', credentials)
}
