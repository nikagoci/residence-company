import "@/styles/globals.css";
import type { AppProps } from "next/app";

import { useRouter } from "next/router";
import Head from "next/head";
import { SessionProvider } from "next-auth/react";
import { appWithTranslation } from "next-i18next";
import { ApolloProvider } from "@apollo/client/react";

import Layout from "@/components/layout";
import createApolloClient from "@/libs/graphql/provider";

function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  const {pathname} = useRouter();

  if (pathname === "/404") {
    return <Component {...pageProps} />;
  }

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
        <ApolloProvider client={createApolloClient()}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ApolloProvider>
      </SessionProvider>
    </>
  );
}

export default appWithTranslation(App);
