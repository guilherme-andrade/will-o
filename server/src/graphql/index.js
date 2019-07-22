// import all resolvers and types
import * as company from './company'
import * as fraction from './fraction'
import * as user from './user'

import { makeExecutableSchema } from 'graphql-tools'
import { merge } from 'lodash'

export default makeExecutableSchema({
  typeDefs: [
    company.typeDefs,
    user.typeDefs,
    fraction.typeDefs
  ],
  resolvers: merge(
    company.resolvers,
    user.resolvers,
    fraction.resolvers
  ),
});
