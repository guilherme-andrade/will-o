import { gql } from 'apollo-server-express'

export default gql`
  type Unit {
    id: String!
    name: String
    Company: Company!
    Property: Property!
  }

  extend type Query {
    getUnits: [Unit]
  }

  extend type Mutation {
    createUnit(name: String!): Unit!
  }
`
