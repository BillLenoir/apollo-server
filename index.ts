import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { games } from './data/data.js';

const typeDefs = `#graphql

type Query {
        games: [Game]
    }

    type Game {
        id: String
        title: String
        yearpublished: String
        thumbnail: String
        publisher: String
        description: String
    }
`;

const resolvers = {
  Query: {
    games: () => games,
  },
};

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

// Passing an ApolloServer instance to the `startStandaloneServer` function:
//  1. creates an Express app
//  2. installs your ApolloServer instance as middleware
//  3. prepares your app to handle incoming requests
const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log(`🚀  Server ready at: ${url}`);
