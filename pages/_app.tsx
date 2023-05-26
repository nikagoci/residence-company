import "@/styles/globals.css";
import type { AppProps } from "next/app";

import Layout from "@/components/layout";
import { ApolloProvider } from "@apollo/client/react";
import client from "@/libs/graphql/provider";
import { SessionProvider } from "next-auth/react";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider>
      <ApolloProvider client={client}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ApolloProvider>
    </SessionProvider>
  );
}
