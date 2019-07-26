import RestClient from '@api/RestClient'
import AuthClient from '@modules/auth/api'

export default {
  ...RestClient,
  ...AuthClient
}
