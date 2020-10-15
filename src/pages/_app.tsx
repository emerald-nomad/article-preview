import Head from "next/head";
import "styles/global.scss";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Frontend Mentor | Article preview component</title>
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="./images/favicon-32x32.png"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
