

import { GraphQLServer } from "graphql-yoda";

import resolvers from './graphql/resolvers';


export const server = new GraphQLServer({
 typeDefs: Path.join(__dirname,'graphql/schema.graphql'),
 resolvers
})
