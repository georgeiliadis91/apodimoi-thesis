import Head from "next/head";
import { getSingleImageUrl } from "../utils";
import { useTranslations } from "../hooks/useTranslations";
import { localeUrl } from "../utils";

const Home = ({ data }) => {
  const { attributes } = data;

  const { t } = useTranslations();
  return (
    <div className="mb-24">
      <Head>
        <title>{t.homeTitle}</title>
        <meta
          name="αποδημοι_αιγαίου"
          content="Ψηφιακό κέντρο αποδήμων ανατολικού Αιγαίου"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <img
        className="h-60 w-full object-cover sm:h-[650px]"
        alt="header-img"
        src={`${process.env.NEXT_PUBLIC_API_URL}${getSingleImageUrl(
          attributes.top_img,
          "url"
        )}`}
      />
      <div className="flex flex-col items-center justify-center px-6 py-12 text-center sm:px-[20%]">
        <h1 className="mb-4 text-2xl font-bold sm:mb-6 sm:text-5xl">
          {attributes.intro_label}
        </h1>
        <p className="mb-6 text-base text-muted-foreground sm:text-xl">
          {attributes.intro_description}
        </p>
        <img
          className="h-36 w-auto object-cover sm:h-60"
          alt="logo"
          src={`${process.env.NEXT_PUBLIC_API_URL}${getSingleImageUrl(
            attributes.logo,
            "url"
          )}`}
        />
      </div>

      <div className="relative h-60 sm:h-[350px]">
        <img
          className="h-60 w-full object-cover sm:h-[350px]"
          alt="quote-img"
          src={`${process.env.NEXT_PUBLIC_API_URL}${getSingleImageUrl(
            attributes.quote_img,
            "url"
          )}`}
        />
        <span className="absolute top-1/2 left-1/2 w-[85%] -translate-x-1/2 -translate-y-1/2 text-lg leading-6 text-white sm:w-3/5 sm:text-3xl sm:leading-10">
          {attributes.quote}
        </span>
      </div>
    </div>
  );
};

export async function getServerSideProps(ctx) {
  const { locale } = ctx;
  const url = process.env.NEXT_PUBLIC_API_URL + "/api/home?populate=*";
  const finalUrl = localeUrl(url, locale);

  const res = await fetch(finalUrl);
  const { data } = await res.json();
  return {
    props: { data },
  };
}

export default Home;
