import { getImageUrl } from "../../utils";

const NewsArticle = ({ data }) => {
  if (!data) return null;
  const { title, description, thumbnail_img } = data.attributes;

  return (
    <div className="mx-auto flex max-w-2xl flex-col gap-6">
      <h1 className="text-center text-3xl font-bold">{title}</h1>
      <img
        className="w-full rounded-lg object-contain"
        src={`${process.env.NEXT_PUBLIC_API_URL}${getImageUrl(thumbnail_img)}`}
        alt={title}
      />
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
};

export async function getServerSideProps(context) {
  const res = await fetch(
    process.env.NEXT_PUBLIC_API_URL +
      "/api/articles/" +
      context.params.id +
      "?populate=*"
  );
  const { data } = await res.json();
  return {
    props: { data },
  };
}

export default NewsArticle;
