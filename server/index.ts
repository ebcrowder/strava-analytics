const Koa = require('koa');
const app = new Koa();
const { ApolloServer, gql } = require('apollo-server-koa');
const StravaAPIModule = require('./StravaAPI.ts');

// Construct a schema, using GraphQL schema language
const typeDefs = gql`
  type Query {
    strava: [Activities]
  }

  type Activities {
    name: String
    type: String
    distance: Int
    elapsed_time: Int
    average_heartrate: String
    start_date: String
  }
`;

// Provide resolver functions for your schema fields
const resolvers = {
  Query: {
    strava: async (_source, _args, { dataSources }) => {
      const stravaData = await dataSources.stravaAPI.getStravaData();
      return stravaData;
    }
  }
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => {
    return {
      stravaAPI: new StravaAPIModule()
    };
  }
});

server.applyMiddleware({ app });

app.listen({ port: 4000 }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
);
