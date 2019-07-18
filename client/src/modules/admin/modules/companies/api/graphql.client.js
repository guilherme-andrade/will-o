import { loader } from 'graphql.macro'

module.exports = {
  GET_COMPANIES: loader('./graphql/getCompanies.graphql'),
  CREATE_COMPANY: loader('./graphql/createCompany.graphql')
}
