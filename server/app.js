require('dotenv').config()
import express from 'express'
import { ApolloServer } from 'apollo-server-express'
import schema from './graphql'
import { connectDb } from './models';

const server = new ApolloServer({ schema });

const app = express();
server.applyMiddleware({ app });
connectDb().then(async () => {
  app.listen({ port: 4000 }, () =>
    console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
  );
});
