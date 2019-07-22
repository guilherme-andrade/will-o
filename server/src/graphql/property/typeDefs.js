import { gql } from 'apollo-server-express'

export default gql`
  type Property {
    id: String!
    name: String
    Company: Company!
  }

  extend type Query {
    getProperties: [Property]
  }

  extend type Mutation {
    createProperty(name: String!): Property!
  }
`
