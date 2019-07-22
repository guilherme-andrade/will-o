import { gql } from 'apollo-server-express'

export default gql`
  type User {
    id: String!
    username: String
    Company: Company
  }

  extend type Query {
    getUsers: [User]
  }

  extend type Mutation {
    createUser(username: String!, CompanyId: String!): User!,
    updateUser(username: String!): User!,
    destroyAllUsers: [User]
  }
`
