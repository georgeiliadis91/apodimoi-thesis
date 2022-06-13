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
