import { getSingleImageUrl, localeUrl } from "../utils";
import { useTranslations } from "../hooks/useTranslations";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Classes = ({ data }) => {
  const { t } = useTranslations();
  if (!data) return null;
  return (
    <div className="flex flex-col gap-10">
      <h1 className="text-center text-3xl font-bold">{t.classesTitle}</h1>

      {data.map((item) => {
        const { attributes } = item;
        return (
          <div key={attributes.Topic} className="flex flex-col gap-4">
            <h2 className="text-xl font-semibold">{attributes.Topic}</h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
              {attributes.list.map((listItem) => (
                <Card key={listItem.title} className="relative">
                  {listItem.kids && (
                    <Badge className="absolute top-3 right-3">
                      {t.classesKidsBubbleLabel}
                    </Badge>
                  )}
                  <CardContent className="flex flex-col gap-3">
                    <span className="font-medium">{listItem.title}</span>
                    <a href={listItem.link}>
                      <img
                        alt={`${listItem.title}-img`}
                        className="aspect-video w-full rounded-md object-cover"
                        src={`${
                          process.env.NEXT_PUBLIC_API_URL
                        }${getSingleImageUrl(listItem.img_lnk, "url")}`}
                      />
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export async function getServerSideProps(ctx) {
  const { locale } = ctx;
  const url =
    process.env.NEXT_PUBLIC_API_URL + "/api/lessons?populate=list.img_lnk";
  const finalUrl = localeUrl(url, locale);

  const res = await fetch(finalUrl);
  const { data } = await res.json();

  return {
    props: { data },
  };
}

export default Classes;
