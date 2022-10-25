import express from "express";
import { ApolloServer, gql } from "apollo-server-express";

const typeDefs = gql`
  type Query {
    welcomme: String
  }
`;

const resolvers = {
  Query: {
    welcomme: () => {
      return "Welcomme to QTR";
    },
  },
};

async function initServer() {
  const app = express();
  const apolloServer = new ApolloServer({ typeDefs, resolvers });
  await apolloServer.start();
  apolloServer.applyMiddleware({ app });
  app.use((req, res) => {
    res.send("Server start successfully");
  });
  const PORT = process.env.PORT || 5001;
  app.listen(PORT, () =>
    console.log(`Express server is running on port ${PORT}`)
  );
}

initServer();
