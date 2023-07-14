import Head from "next/head"; //it is the default library of next to add header into the webpages
import Layout from "../components/Layout/layout";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <title>Theater Event</title>
        {/* this is the mobile responsiveness of the website */}
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
