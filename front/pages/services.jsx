import { useMemo, useState } from "react";
import { useTranslations } from "../hooks/useTranslations";
import { localeUrl, requireAuthRedirect } from "../utils/helpers";
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";

const Services = ({ data }) => {
  const [search, setSearch] = useState("");
  const { t } = useTranslations();

  const filteredData = useMemo(() => {
    if (!data) return [];
    const query = search.trim().toLowerCase();
    if (!query) return data;
    return data.filter(({ attributes }) =>
      attributes.service_name?.toLowerCase().includes(query)
    );
  }, [data, search]);

  if (!data) return null;

  return (
    <div className="mx-auto flex max-w-2xl flex-col gap-6">
      <h1 className="text-center text-3xl font-bold">{t.servicesTitle}</h1>

      <Input
        type="search"
        placeholder="Αναζήτηση υπηρεσίας..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Υπηρεσία</TableHead>
            <TableHead>E-mail</TableHead>
            <TableHead>Τηλέφωνο</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredData.map(({ attributes, id }) => {
            const { service_name, email, number } = attributes;
            return (
              <TableRow key={id}>
                <TableCell className="font-medium">{service_name}</TableCell>
                <TableCell>
                  {email && (
                    <a className="hover:underline" href={`mailto:${email}`}>
                      {email}
                    </a>
                  )}
                </TableCell>
                <TableCell>
                  {number && (
                    <a className="hover:underline" href={`tel:+30${number}`}>
                      {number}
                    </a>
                  )}
                </TableCell>
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
  const url = process.env.NEXT_PUBLIC_API_URL + "/api/services";
  const finalUrl = localeUrl(url, locale);

  const res = await fetch(finalUrl);
  const { data } = await res.json();

  return {
    props: { data },
  };
}

export default Services;
