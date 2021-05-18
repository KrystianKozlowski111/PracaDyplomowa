const { createTestClient } = require('apollo-server-testing');
const { ApolloServer } = require('apollo-server');
const typeDefs = require('../schema');
const resolvers = require('../resolvers');
const gql = require('graphql-tag');

const server = new ApolloServer({ typeDefs, resolvers });
const { query } = createTestClient(server);

it('Get one user by Name and Password', async () => {
  const GET_POST_BY_ID_AND_NAME = gql`
    query getUserByNameAndPassword($name: String!, $password: String!) {
      getUserByNameAndPassword(name: $name, password: $password) {
        id
        name
        password
      }
    }
  `;

  const result = await query({
    query: GET_POST_BY_ID_AND_NAME,
    variables: {
      name: 'a',
      password: 'a',
    },
  });

  expect(result.data.getUserByNameAndPassword).toBeTruthy();
});
