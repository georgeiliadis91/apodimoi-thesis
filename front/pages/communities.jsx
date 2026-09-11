import { localeUrl, requireAuthRedirect } from "../utils";
import { useTranslations } from "../hooks/useTranslations";
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "@/components/ui/table";

const Communities = ({ data }) => {
  const { t } = useTranslations();

  if (!data) {
    return null;
  }

  return (
    <div className="flex flex-col gap-8">
      <h1 className="text-center text-3xl font-bold">
        {t.communitiesTitle}
      </h1>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>{t.communitiesCommunityLabel}</TableHead>
            <TableHead>{t.communitiesEmailLabel}</TableHead>
            <TableHead>{t.communitiesPhoneLabel}</TableHead>
            <TableHead>{t.communitiesAddressLabel}</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((item) => {
            const { attributes } = item;
            return (
              <TableRow key={item.id}>
                <TableCell className="font-medium">
                  {attributes.name}
                </TableCell>
                <TableCell>
                  {attributes.email && (
                    <a
                      className="hover:underline"
                      href={`mailto:${attributes.email}`}
                    >
                      {attributes.email}
                    </a>
                  )}
                </TableCell>
                <TableCell>
                  {attributes.tel && (
                    <a
                      className="hover:underline"
                      href={`tel:+30${attributes.tel}`}
                    >
                      {attributes.tel}
                    </a>
                  )}
                </TableCell>
                <TableCell>{attributes.address}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
};

export async function getServerSideProps(ctx) {
  const authRedirect = requireAuthRedirect(ctx);
  if (authRedirect) return authRedirect;

  const { locale } = ctx;
  const url = process.env.NEXT_PUBLIC_API_URL + "/api/communities?populate=*";
  const finalUrl = localeUrl(url, locale);

  const res = await fetch(finalUrl);
  const { data } = await res.json();
  return {
    props: { data },
  };
}

export default Communities;
