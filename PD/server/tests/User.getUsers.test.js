const { createTestClient } = require('apollo-server-testing');
const { ApolloServer } = require('apollo-server');
const typeDefs = require('../schema');
const resolvers = require('../resolvers');
const gql = require('graphql-tag');

const server = new ApolloServer({ typeDefs, resolvers });
const { query } = createTestClient(server);

it('Get all users', async () => {
  const GET_USERS = gql`
    query getUsers {
      getUsers {
        id
        name
        password
      }
    }
  `;

  const result = await query({
    query: GET_USERS,
  });

  expect(result.data.getUsers).toBeTruthy();
  result.data.getUsers.forEach((post) => {
    expect(post).toBeTruthy();
  });
});
