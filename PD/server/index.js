const { ApolloServer } = require('apollo-server');
const typeDefs = require('./schema');
const resolvers = require('./resolvers');

const server = new ApolloServer({ typeDefs, resolvers });

const { client } = require('./databaseConnection');
client.connect((err) => {
  if (err) {
    console.error('DB connection error', err.stack);
  } else {
    console.log(`🚀 Database ready.`);
  }
});
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});



module.exports = { server };
