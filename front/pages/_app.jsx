import "../styles/globals.css";
import { useEffect } from "react";
import Router from "next/router";
import { Inter } from "next/font/google";
import { Layout } from "../components/views/Layout";
import { parseCookies } from "nookies";
import Globalstate from "../store/store";
import { parseDataFromRequestSingleType } from "../utils";
import { privatePaths } from "../constants";
import { localeUrl } from "../utils/helpers";
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({
  subsets: ["latin", "greek"],
  variable: "--font-sans",
});

function MyApp({ Component, pageProps, navigation, isLoggedIn }) {
  // Radix portals (Sheet, Select, Dialog, Sonner) render as direct children
  // of <body>, outside the wrapper below, so they need the font variable
  // there too. next/font can't touch <body> directly in the Pages Router
  // (no custom _document), so it's added client-side -- portals only ever
  // open after a user interaction, well after this has run.
  useEffect(() => {
    document.body.classList.add(inter.variable, "font-sans");
  }, []);

  return (
    <div className={`${inter.variable} font-sans`}>
      <Globalstate isLoggedIn={isLoggedIn}>
        <Layout navigation={navigation}>
          <Component {...pageProps} />
        </Layout>
      </Globalstate>
      <Toaster />
    </div>
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
