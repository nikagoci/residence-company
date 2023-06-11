import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
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
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
