import ImageCarousel from "../components/ImageCarousel/ImageCarousel";
import { formatImage, localeUrl } from "../utils";
import { useTranslations } from "../hooks/useTranslations";

const About = ({ data }) => {
  const { description, images } = data?.attributes;
  const { t } = useTranslations();

  if (!data) return null;
  const formatterImageArray = formatImage(images.data);
  return (
    <div className="mx-auto flex max-w-3xl flex-col gap-8">
      <h1 className="text-center text-3xl font-bold">{t.aboutTitle}</h1>
      <ImageCarousel imageArray={formatterImageArray} />
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
};

export async function getServerSideProps(ctx) {
  const { locale } = ctx;

  const url = process.env.NEXT_PUBLIC_API_URL + "/api/about?populate=images";
  const finalUrl = localeUrl(url, locale);

  let res = await fetch(finalUrl);
  let { data } = await res.json();

  // fall back to default in case the locale data is not found
  if (!data) {
    res = await fetch(url);
    const response = await res.json();
    data = response.data;
  }

  return {
    props: { data },
  };
}
export default About;
