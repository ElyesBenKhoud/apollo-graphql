const { gql } = require("apollo-server");

// what is gql : It's a tagged template literal, used for wrapping GraphQL strings like the schema definition we're about to write.
// This converts GraphQL strings into the format that Apollo libraries expect when working with operations and schemas,
//and it also enables syntax highlighting.

const typeDefs = gql`
  type Query {
    tracksForHome: [Track!]!
  }

  "Track is a group of modules that teaches aout a specific topic"
  type Track {
    id: ID!
    title: String!
    author: Author!
    thumbnail: String
    length: Int
    modulesCount: Int
  }

  type Author {
    id: ID!
    name: String!
    photo: String
  }
`;
//exports

module.exports = typeDefs;
