import "../styles/globals.css";
import { Layout } from "../components/views/Layout";
import Globalstate from "../store/store";

function MyApp({ Component, pageProps }) {
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
