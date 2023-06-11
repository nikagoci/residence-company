import "@/styles/globals.css";
import type { AppProps } from "next/app";

import Layout from "@/components/layout";
import { ApolloProvider } from "@apollo/client/react";
import client from "@/libs/graphql/provider";
import { SessionProvider } from "next-auth/react";
import { appWithTranslation } from "next-i18next";
import Head from "next/head";

function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <>
      <Head>
        <title>Elite Residence</title>
        <link
          rel="shortcut icon"
          type="image/x-icon"
          href="/svgs/tab-logo.svg"
        />
        <meta
          name="description"
          content="Low price flats, easy to purchase. Residence with modern design,"
        />
        <meta name="keywords" content="Residence, Flat, Sale Flats" />
      </Head>
      <SessionProvider session={session} basePath="/api/auth">
        <ApolloProvider client={client}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ApolloProvider>
      </SessionProvider>
    </>
  );
}

export default appWithTranslation(App);
