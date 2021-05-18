const { createTestClient } = require('apollo-server-testing');
const { ApolloServer } = require('apollo-server');
const typeDefs = require('../schema');
const resolvers = require('../resolvers');
const gql = require('graphql-tag');
const { PubSub } = require('graphql-subscriptions');
const { setQuery } = require('../utils/dbqueries');
const { setTransaction } = require('../utils/dbqueries');
pubsub = new PubSub();
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: () => pubsub,
});
const { mutate } = createTestClient(server);

it('Create a user', async () => {
  const ADD_USER = gql`
    mutation addUser($name: String!, $password: String!) {
      addUser(name: $name, password: $password) {
        name
        password
      }
    }
  `;

  const result = await mutate({
    mutation: ADD_USER,
    variables: {
      name: 'b',
      password: 'b',
    },
  });
  console.log(result);
  expect(result.data.addUser).toBeTruthy();
});
it('Create a user, name exists', async () => {
  const ADD_USER = gql`
    mutation addUser($name: String!, $password: String!) {
      addUser(name: $name, password: $password) {
        name
        password
      }
    }
  `;

  const result = await mutate({
    mutation: ADD_USER,
    variables: {
      name: 'a',
      password: 'a',
    },
  });
  console.log(result);
  expect(result.errors).toBeTruthy();
});
afterEach(() => {
  const User = setTransaction(
    `DELETE FROM "User" WHERE "name"='b' RETURNING *`
  );
  return User;
});
