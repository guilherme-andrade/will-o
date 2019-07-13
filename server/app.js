const { prisma } = require('./generated/prisma-client')
const { GraphQLServer } = require('graphql-yoga')
const resolvers = require('./types')

const server = new GraphQLServer({
  typeDefs: './schema.graphql',
  resolvers,
  context: {
    prisma,
  },
})
server.start(() => console.log('Server is running on http://localhost:4000'))
