import axios from 'axios'
import { BASE_URL } from './config'

import {
  FETCH,
  LOAD,
  CREATE,
  UPDATE,
  DESTROY
} from './config/actionTypes'

const instance = axios.create({
  baseURL: BASE_URL,
  timeout: 1000,
  headers: { 'X-Custom-Header': 'foobar' }
});

export default {
  [FETCH]:  (resource) => instance.get(resource),
  [LOAD]:   (resource, id) => instance.get(resource, { params: { id } }),
  [CREATE]: (resource, data) => instance.post(resource, { data }),
  [UPDATE]: (resource, id, data) => instance.put(resource, { params: { id }, data }),
  [DESTROY]: (resource, id) => instance.delete(resource, { params: { id } }),
}
