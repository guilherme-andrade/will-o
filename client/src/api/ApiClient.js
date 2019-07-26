import RestClient from '@api/RestClient'
import AuthClient from '@modules/auth/api'
import AdminClient from '@modules/admin/api'

export default {
  ...RestClient,
  ...AuthClient,
  ...AdminClient
}
