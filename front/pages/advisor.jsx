import { localeUrl, requireAuthRedirect } from "../utils";
import { useTranslations } from "../hooks/useTranslations";
import { Card, CardContent } from "@/components/ui/card";

const Advisor = ({ data }) => {
  const { t } = useTranslations();

  if (!data) {
    return null;
  }

  return (
    <div className="flex flex-col gap-10">
      <h1 className="text-center text-3xl font-bold">{t.advisorTitle}</h1>
      {data.map((item) => {
        const { attributes } = item;
        return (
          <div key={attributes.island} className="flex flex-col gap-4">
            <h2 className="text-xl font-semibold">{attributes.island}</h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {attributes.list.map((listItem, index) => (
                <Card key={index}>
                  <CardContent className="flex flex-col gap-2">
                    <span>{listItem.description}</span>
                    {listItem.email && (
                      <a
                        className="text-sm text-muted-foreground hover:underline"
                        href={`mailto:${listItem.email}`}
                      >
                        {listItem.email}
                      </a>
                    )}
                    {listItem.phone && (
                      <a
                        className="text-sm text-muted-foreground hover:underline"
                        href={`tel:+30${listItem.phone}`}
                      >
                        {listItem.phone}
                      </a>
                    )}
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
  const authRedirect = requireAuthRedirect(ctx);
  if (authRedirect) return authRedirect;

  const { locale } = ctx;
  const url = process.env.NEXT_PUBLIC_API_URL + "/api/advisors?populate=*";
  const finalUrl = localeUrl(url, locale);

  const res = await fetch(finalUrl);
  const { data } = await res.json();
  return {
    props: { data },
  };
}

export default Advisor;
