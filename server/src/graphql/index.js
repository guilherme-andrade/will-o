'use strict';
import { makeExecutableSchema } from 'graphql-tools'
import { merge } from 'lodash'
import fs from 'fs'
import scalars, { OKGScalarDefinitions as scalarDefs } from 'graphql-scalars';

const typeDefs = []
const resolvers = []

function isDirectory(path) {
  return fs.lstatSync(`${__dirname}/${path}`).isDirectory();
}

fs.readdirSync(__dirname)
  .filter(isDirectory)
  .forEach(path => {
    typeDefs.push(require(`${__dirname}/${path}/typeDefs`).default);
    resolvers.push(require(`${__dirname}/${path}/resolvers`).default);
  });

export default makeExecutableSchema({
  typeDefs: [...typeDefs, ...scalarDefs],
  resolvers: merge([...resolvers, ...scalars]),
});
