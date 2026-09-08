import { useTranslations } from "../hooks/useTranslations";
import { ArticlesBlock } from "../components/ArticlesBlock/ArticlesBlock";
import { parse250Chars, getImageUrl, localeUrl } from "../utils";

const News = ({ data }) => {
  const { t } = useTranslations();
  if (!data) {
    return null;
  }

  return (
    <div className="flex flex-col gap-8">
      <h1 className="text-center text-3xl font-bold">{t.newsTitle}</h1>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
        {data.map((item) => {
          const { attributes } = item;
          return (
            <ArticlesBlock
              key={item.id}
              id={item.id}
              title={attributes.title}
              description={parse250Chars(attributes.description)}
              imgUrl={`${process.env.NEXT_PUBLIC_API_URL}${getImageUrl(
                attributes.thumbnail_img,
                "thumbnail"
              )}`}
            />
          );
        })}
      </div>
    </div>
  );
};

export async function getServerSideProps(ctx) {
  const { locale } = ctx;
  const url =
    process.env.NEXT_PUBLIC_API_URL + "/api/articles?populate=thumbnail_img";
  const finalUrl = localeUrl(url, locale);

  const res = await fetch(finalUrl);
  const { data } = await res.json();
  return {
    props: { data },
  };
}

export default News;
