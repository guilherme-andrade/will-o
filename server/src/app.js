require('dotenv').config()
import express from 'express'
import { ApolloServer } from 'apollo-server-express'
import schema from './graphql'
import { sequelize } from './models';


const getUser = token => {
  try {
    if (token) {
      return jwt.verify(token, 'my-secret-from-env-file-in-prod')
    }
    return null
  } catch (err) {
    return null
  }
}

const server = new ApolloServer({
  schema,
  context: ({ req }) => {
    const tokenWithBearer = req.headers.authorization || ''
    const token = tokenWithBearer.split(' ')[1]
    const user = getUser(token)
    return { user }
  },
});

const app = express();
server.applyMiddleware({ app });

sequelize.sync()
  .then(() => {
    app.listen({ port: process.env.PORT }, () =>
      console.log(`🚀 Server ready at http://localhost:${process.env.PORT}${server.graphqlPath}`)
    );
  })
  .catch(() => console.log('Could not connect to Database'))
