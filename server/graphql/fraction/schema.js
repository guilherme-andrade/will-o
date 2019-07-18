import { gql } from 'apollo-server-express'

export default gql`
  type Fraction {
    id: String!
    name: String
    company: Company!
  }

  extend type Query {
    getFractions: [Fraction]
  }

  extend type Mutation {
    createFraction(name: String!): Fraction!
  }
`
