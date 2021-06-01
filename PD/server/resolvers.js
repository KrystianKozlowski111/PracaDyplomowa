const { GraphQLScalarType } = require('graphql');
const { Kind } = require('graphql/language');
const { client } = require('./databaseConnection');
const { setQuery } = require('./utils/dbqueries');
const { setTransaction } = require('./utils/dbqueries');
const resolvers = {
  Query: {
    getUsers: async () => {
      const User = await setQuery('SELECT * FROM "User"');
      return User;
    },
    getGrids: async () => {
      const User = await setQuery('SELECT * FROM "Grids"');
      return User;
    },

    getUserByNameAndPassword: async (_, { name, password }) => {
      const User = await setQuery(
        `SELECT * FROM "User" WHERE name='${name}' AND "password"='${password}'`
      );
      return User;
    },
    getGridByID: async (_, { id }) => {
      const User = await setQuery(`SELECT * FROM "Grids" WHERE "id"='${id}'`);
      return User;
    },
    getGridByUserID: async (_, { id }) => {
      const User = await setQuery(
        `SELECT * FROM "Grids" WHERE "userId"='${id}'`
      );
      return User;
    },
  },
  Mutation: {
    updateUser: async (_, { id, name, password }) => {
      const User = await setTransaction(
        `UPDATE "User" SET "password"='${password}', "name"='${name}'  WHERE "id"='${id}' RETURNING *`
      );
      return User;
    },
    updateUserGrid: async (_, { id, grid }) => {
      const User = await setTransaction(
        `UPDATE "User" SET "grid"='${grid}' WHERE "id"='${id}' RETURNING *`
      );
      return User;
    },
    deleteUser: async (_, { id }) => {
      const User = await setTransaction(
        `DELETE FROM "User" WHERE "id"=${id} RETURNING *`
      );
      return User;
    },
    deleteGrid: async (_, { id }) => {
      const Grid = await setTransaction(
        `DELETE FROM "Grids" WHERE "id"=${id} RETURNING *`
      );
      return Grid;
    },
    addUser: async (_, { name, password }) => {
      const users = await setQuery('SELECT * FROM "User"');
      const exist = await setQuery('SELECT name FROM "User"');
      const NameTaken = exist.find((existed) => existed['name'] === name);
      console.log(NameTaken);
      if (NameTaken == undefined) {
        let id = users.length + 1;
        const User = await setTransaction(
          `INSERT INTO "User" ("id", "name","password","admin") VALUES ('${id}', '${name}', '${password}','false') RETURNING *`
        );
        return User;
      } else {
        throw new ApolloError('NAME_ALREADY_EXISTS', 400);
      }
    },
    addGrid: async (_, { name, grid, userId, isShared }) => {
      const grids = await setQuery('SELECT * FROM "Grids"');
      const exist = await setQuery('SELECT name FROM "Grids"');
      const NameTaken = exist.find((existed) => existed['name'] === name);
      console.log(NameTaken);
      if (NameTaken == undefined) {
        let id = grids.length + 1;
        const Grid = await setTransaction(
          `INSERT INTO "Grids" ("id", "grid", "name","userId","isShared") VALUES ('${id}', '${grid}','${name}', '${userId}','${isShared}') RETURNING *`
        );
        return Grid;
      } else {
        throw new ApolloError('NAME_ALREADY_EXISTS', 400);
      }
    },
  },
};

module.exports = resolvers;
