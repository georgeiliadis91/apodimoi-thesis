import { parseCookies } from "nookies";

const colorPalette = [
  "#12B0E8",
  "#38CC77",
  "#EDBF69",
  "#E07C24",
  "#6A1B4D",
  "#8D3DAF",
  "#B4161B",
  "#A77B06",
];

//Export and array of give length with random colors
export const getRandomColors = (length) => {
  const colors = [];
  for (let i = 0; i < length; i++) {
    colors.push(colorPalette[Math.floor(Math.random() * colorPalette.length)]);
  }
  return colors;
};

// checks and adds locale on url

export const localeUrl = (url, locale) => {
  if (!locale || locale === "en") return url;

  if (url.includes("?")) {
    return `${url}&locale=${locale}`;
  } else {
    return `${url}?locale=${locale}`;
  }
};

// Returns a Next.js `redirect` prop for getServerSideProps when there's no
// jwt cookie, or null when the request is authenticated. Must be used from
// getServerSideProps (not _app's getInitialProps) so Next's client-side
// router sees it as a proper redirect on page-data fetches too -- a raw
// ctx.res redirect written from _app only works on full page loads and
// leaves client-side navigations to a private page blank.
export const requireAuthRedirect = (ctx) => {
  const { jwt } = parseCookies(ctx);
  if (jwt) return null;
  const localePrefix =
    ctx.locale && ctx.locale !== ctx.defaultLocale ? `/${ctx.locale}` : "";
  return {
    redirect: {
      destination: `${localePrefix}/login?authRequired=1`,
      permanent: false,
    },
  };
};

// removes _ and capitalizes first letter of each word
export const capitalize = (str) => {
  return str
    .split("_")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join("");
};
