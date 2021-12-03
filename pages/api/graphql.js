import connectDb from './lib/db'
import typeDefs from '../api/lib/typeDefs'
import resolvers from '../api/lib/resolvers/index'
import { ApolloServer } from 'apollo-server-micro'
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";
connectDb()
console.log('graphql')
const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  playground: true,
  introspection: true,
  plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
});

const startServer = apolloServer.start();

export default async function handler(req, res) {
  await startServer;
  await apolloServer.createHandler({
    path: "/api/graphql",
  })(req, res);
}

export const config = {
  api: {
    bodyParser: false,
  },
};