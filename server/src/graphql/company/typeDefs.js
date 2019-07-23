import { gql } from 'apollo-server-express'

export default gql`
  type Company {
    id: String!
    name: String
    users: [User]
    createdAt: DateTime
    updatedAt: DateTime
  }

  type Query {
    company(id: String!): Company
    getCompanies: [Company]
  }

  type Mutation {
    createCompany(name: String!): Company!
    destroyAllCompanies: [Company]
  }
`
