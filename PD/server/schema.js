const { gql } = require('apollo-server');

const typeDefs = gql`
  type User {
    id: ID!
    name: String!
    password: String!
    admin: Boolean!
    grid: String
  }
  type Grid {
    id: ID!
    userId: ID!
    name: String!
    grid: String!
    isShared: Boolean!
  }
  type Query {
    getUsers: [User]
    getGrids: [Grid]
    getGridByID(id: ID!): [Grid]
    getGridByUserID(userId: ID!): [Grid]
    getUserByID(id: ID!): [User]
    getUserByNameAndPassword(name: String!, password: String!): [User]
  }
  type Mutation {
    updateUser(id: ID!, name: String, password: String): [User]
    updateUserGrid(id: ID!, grid: String): [User]
    deleteUser(id: ID!): [User]
    deleteGrid(id: ID!): [Grid]
    addUser(name: String!, password: String!): [User]
    addGrid(
      userId: ID!
      name: String!
      grid: String!
      isShared: Boolean!
    ): [Grid]
  }
`;

module.exports = typeDefs;
