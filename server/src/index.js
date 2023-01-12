const { ApolloServer } = require("apollo-server");
const typeDefs = require("./schema");
const resolvers = require("./resolvers");
const TrackAPI = require("./datasources/track-api");

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => {
    return {
      TrackAPI: new TrackAPI(),
    };
  },
});
//mocks provided from apollo for mocking data

server.listen().then(() => {
  console.log(`
    server is running!
    listening on port 4000
    Query at http://localhost:4000`);
});
