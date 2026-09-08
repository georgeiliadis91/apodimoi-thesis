import "../styles/globals.css";
import Router from "next/router";
import { Layout } from "../components/views/Layout";
import { parseCookies } from "nookies";
import Globalstate from "../store/store";
import { parseDataFromRequestSingleType } from "../utils";
import { privatePaths } from "../constants";
import { localeUrl } from "../utils/helpers";
import { Toaster } from "@/components/ui/sonner";

function MyApp({ Component, pageProps, navigation, isLoggedIn }) {
  return (
    <>
      <Globalstate isLoggedIn={isLoggedIn}>
        <Layout navigation={navigation}>
          <Component {...pageProps} />
        </Layout>
      </Globalstate>
      <Toaster />
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

  const { locale } = ctx;
  const url = process.env.NEXT_PUBLIC_API_URL + "/api/layout";
  const finalUrl = localeUrl(url, locale);
  const layoutData = await fetch(finalUrl);
  const navigation = await layoutData.json();

  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }

  if (!jwt) {
    if (privatePaths.includes(ctx.pathname)) {
      redirectUser(ctx, "/login");
    }
  }

  return {
    pageProps,
    navigation: parseDataFromRequestSingleType(navigation),
    isLoggedIn: !!jwt,
  };
};

export default MyApp;
