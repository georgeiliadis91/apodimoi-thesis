import "../styles/globals.css";
import { Layout } from "../components/views/Layout";
import Globalstate from "../store/store";
import { parseCookies } from "nookies";

function MyApp({ Component, pageProps }) {
  return (
    <>
      {/* <Globalstate> */}
      <Layout>
        <Component {...pageProps} />
      </Layout>
      {/* </Globalstate> */}
    </>
  );
}

function redirectUser(ctx, location) {
  if (ctx.req) {
    ctx.res.writeHead(302, {
      Location: location,
      "Content-Type": "text/html; charset=utf-8",
    });
    ctx.res.end();
  } else {
    Router.push(location);
  }
}

MyApp.getInitialProps = async ({ Component, ctx }) => {
  let pageProps = {};
  const jwt = parseCookies(ctx).jwt;

  // const res = await fetch(`${publicRuntimeConfig.API_URL}/navigations`);
  // const navigation = await res.json();

  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }

  if (!jwt) {
    if (ctx.pathname === "/users") {
      redirectUser(ctx, "/login");
    }
  }

  return {
    pageProps,
    // navigation,
  };
};

export default MyApp;
