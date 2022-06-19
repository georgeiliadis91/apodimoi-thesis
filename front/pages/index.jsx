import Head from "next/head";
import { getSingleImageUrl } from "../utils";
import styles from "../styles/Home.module.css";

const Home = ({ data }) => {
  const { attributes } = data;
  return (
    <div className={styles.container}>
      <Head>
        <title>Απόδημοι Αιγαίου</title>
        <meta
          name="αποδημοι_αιγαίου"
          content="Ψηφιακό κέντρο αποδήμων ανατολικού Αιγαίου"
        />
        {/* TODO add logo */}
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://unpkg.com/leaflet@1.8.0/dist/leaflet.css"
          integrity="sha512-hoalWLoI8r4UszCkZ5kL8vayOGVae1oxXe/2A4AO6J9+580uKHDO3JdHb7NzwwzK5xr/Fs0W40kiNHxM9vyTtQ=="
        />
        <script
          src="https://unpkg.com/leaflet@1.8.0/dist/leaflet.js"
          integrity="sha512-BB3hKbKWOc9Ez/TAwyWxNXeoV9c1v6FIeYiBieIWkpLjauysF18NzgR1MBNBXf8/KABdlkX68nAhlwcDFLGPCQ=="
        ></script>
        <link
          rel="stylesheet"
          href="https://unpkg.com/react-leaflet-markercluster/dist/styles.min.css"
        />
        <link
          rel="stylesheet"
          href="https://unpkg.com/leaflet/dist/leaflet.css"
        />
        <link
          rel="stylesheet"
          href="https://unpkg.com/react-leaflet-markercluster/dist/styles.min.css"
        />
      </Head>
      <img
        className={styles.headerImg}
        alt="header-img"
        src={`${process.env.NEXT_PUBLIC_API_URL}${getSingleImageUrl(
          attributes.top_img,
          "url"
        )}`}
      />
      <div className={styles.homeContent}>
        <h1 className={styles.homeContentLabel}>{attributes.intro_label}</h1>
        <p className={styles.homeContentDescription}>
          {attributes.intro_description}
        </p>
        <img
          className={styles.homeContentLogo}
          alt="logo"
          src={`${process.env.NEXT_PUBLIC_API_URL}${getSingleImageUrl(
            attributes.logo,
            "url"
          )}`}
        />
      </div>

      <div className={styles.quoteContainer}>
        <img
          className={styles.quoteImg}
          alt="quote-img"
          src={`${process.env.NEXT_PUBLIC_API_URL}${getSingleImageUrl(
            attributes.quote_img,
            "url"
          )}`}
        />
        <span className={styles.quoteText}>{attributes.quote}</span>
      </div>
    </div>
  );
};

export async function getServerSideProps() {
  const res = await fetch(
    process.env.NEXT_PUBLIC_API_URL + "/api/home?populate=*"
  );
  const { data } = await res.json();
  return {
    props: { data },
  };
}

export default Home;
