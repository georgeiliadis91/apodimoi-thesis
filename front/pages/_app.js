import "../styles/globals.css";
import { Layout } from "../components/views/Layout";
import Globalstate from "../store/store";

function MyApp({ Component, pageProps }) {
  // TODO: add jwt verification here to determine if the user is logged in on load
  return (
    <>
      <Globalstate>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Globalstate>
    </>
  );
}

export default MyApp;
