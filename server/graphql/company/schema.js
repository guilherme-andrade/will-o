import { gql } from 'apollo-server-express'

export default gql`
  type Company {
    id: String!
    name: String
  }

  type Query {
    getCompanies: [Company]
  }

  type Mutation {
    createCompany(name: String!): Company!
  }
`
