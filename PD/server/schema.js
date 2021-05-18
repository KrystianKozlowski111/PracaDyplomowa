const { gql } = require('apollo-server');

const typeDefs = gql`
  type User {
    id: ID!
    name: String!
    password: String!
    admin: Boolean!
  }

  type Query {
    getUsers: [User]
    getUserByID(id: ID!): [User]
    getUserByNameAndPassword(name: String!, password: String!): [User]
  }
  type Mutation {
    updateUser(id: ID!, name: String, password: String): [User]
    deleteUser(id: ID!): [User]
    addUser(name: String!, password: String!): [User]
  }
`;

module.exports = typeDefs;
