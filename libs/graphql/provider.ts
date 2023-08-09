// import { ApolloClient, InMemoryCache } from "@apollo/client";

import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";

// const client = new ApolloClient({
//     uri: '/api/graphql',
//     cache: new InMemoryCache()
// });

// export default client;

const createApolloClient = () => {
  const link = new HttpLink({
    uri: "/api/graphql",
  });

  return new ApolloClient({
    link,
    cache: new InMemoryCache(),
  });
};

export default createApolloClient;