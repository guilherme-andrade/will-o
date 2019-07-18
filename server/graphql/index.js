// import all resolvers and types
import * as company from './company'
import * as fraction from './fraction'
import { makeExecutableSchema } from 'graphql-tools'
import { merge } from 'lodash'

export default makeExecutableSchema({
  typeDefs: [
    company.typeDefs,
    fraction.typeDefs
  ],
  resolvers: merge(
    company.resolvers,
    fraction.resolvers
  ),
});
