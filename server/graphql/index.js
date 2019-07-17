// import all resolvers and types
import * as company from './company'
import { makeExecutableSchema } from 'graphql-tools'
import { merge } from 'lodash'

export default makeExecutableSchema({
  typeDefs: [
    company.typeDefs
  ],
  resolvers: merge(
    company.resolvers
  ),
});
