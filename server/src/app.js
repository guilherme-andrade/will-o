require('dotenv').config()
import express from 'express'
import { ApolloServer } from 'apollo-server-express'
import schema from './graphql'
import { sequelize } from './models';

const server = new ApolloServer({ schema });

const app = express();
server.applyMiddleware({ app });

sequelize.sync()
  .then(() => {
    app.listen({ port: process.env.PORT }, () =>
      console.log(`🚀 Server ready at http://localhost:${process.env.PORT}${server.graphqlPath}`)
    );
  })
  .catch(() => console.log('Could not connect to Database'))
