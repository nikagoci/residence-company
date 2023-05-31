import "@/styles/globals.css";
import type { AppProps } from "next/app";

import Layout from "@/components/layout";
import { ApolloProvider } from "@apollo/client/react";
import client from "@/libs/graphql/provider";
import { SessionProvider } from "next-auth/react";
import { appWithTranslation } from "next-i18next";

function App({ Component, pageProps }: AppProps) {
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

export default appWithTranslation(App)
