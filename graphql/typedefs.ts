export const typeDefs = `#graphql

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
