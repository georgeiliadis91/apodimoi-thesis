import { getSingleImageUrl, localeUrl, requireAuthRedirect } from "../utils";
import { useTranslations } from "../hooks/useTranslations";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const Radio = ({ data }) => {
  const { t } = useTranslations();

  if (!data) {
    return null;
  }

  return (
    <div className="flex flex-col gap-8">
      <h1 className="text-center text-3xl font-bold">{t.radioTitle}</h1>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {data.map((item) => {
          const { attributes } = item;
          return (
            <Card key={attributes.Title}>
              <CardHeader>
                <CardTitle>{attributes.Title}</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col gap-3">
                <a href={attributes.link}>
                  <img
                    alt={`${attributes.Title}-img`}
                    className="aspect-video w-full rounded-md object-cover"
                    src={`${
                      process.env.NEXT_PUBLIC_API_URL
                    }${getSingleImageUrl(attributes.image, "url")}`}
                  />
                </a>
                <p className="text-muted-foreground">{attributes.body}</p>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export async function getServerSideProps(ctx) {
  const authRedirect = requireAuthRedirect(ctx);
  if (authRedirect) return authRedirect;

  const { locale } = ctx;
  const url = process.env.NEXT_PUBLIC_API_URL + "/api/radios?populate=image";
  const finalUrl = localeUrl(url, locale);

  const res = await fetch(finalUrl);
  const { data } = await res.json();
  return {
    props: { data },
  };
}

export default Radio;
