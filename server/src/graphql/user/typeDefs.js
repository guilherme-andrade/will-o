import { gql } from 'apollo-server-express'

export default gql`
  type User {
    id: String!
    email: EmailAddress
    Company: Company
  }

  extend type Query {
    getUsers: [User]
    currentUser: User
  }

  extend type Mutation {
    createUser(email: String!, CompanyId: String!): User!
    updateUser(email: String!): User!
    destroyAllUsers: [User]
    register(email: String!, password: String!): LoginResponse!
    login(email: String!, password: String!): LoginResponse!
  }

  type LoginResponse {
    token: String
    user: User
  }
`;
