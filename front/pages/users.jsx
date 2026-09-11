import { useMemo, useState } from "react";
import dynamic from "next/dynamic";
import { parseCookies } from "nookies";
import { UserStatsSection } from "../components/UserStatsSection/UserStatsSection";
import { UserBlock } from "../components/UserBlock/UserBlock";
import { Skeleton } from "@/components/ui/skeleton";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useTranslations } from "../hooks/useTranslations";

const Map = dynamic(() => import("../components/UserMap/UserMap"), {
  loading: () => <Skeleton className="mb-12 h-[500px] w-full" />,
  ssr: false,
});

export const Users = ({
  data,
  countryList,
  islandList,
  dimotikiEnotitaList,
}) => {
  const { t } = useTranslations();
  const [search, setSearch] = useState("");
  const [islandFilter, setIslandFilter] = useState("all");
  const [countryFilter, setCountryFilter] = useState("all");

  const islandOptions = useMemo(() => Object.keys(islandList || {}), [islandList]);
  const countryOptions = useMemo(() => Object.keys(countryList || {}), [countryList]);

  const filteredData = useMemo(() => {
    if (!data) return [];
    const query = search.trim().toLowerCase();
    return data.filter((user) => {
      if (!user || !user.username || !user.email) return false;
      if (query && !user.username.toLowerCase().includes(query)) return false;
      if (islandFilter !== "all" && user.profile_data?.island !== islandFilter)
        return false;
      if (
        countryFilter !== "all" &&
        user.profile_data?.current_country !== countryFilter
      )
        return false;
      return true;
    });
  }, [data, search, islandFilter, countryFilter]);

  if (!data) return null;

  return (
    <div className="flex flex-col gap-10">
      <Map userData={countryList} />

      <UserStatsSection
        stats={[
          { value: "country", label: t.chartUserCountryLabel, dataMap: countryList },
          { value: "island", label: t.chartUserIslandLabel, dataMap: islandList },
          {
            value: "dimotikiEnotita",
            label: t.chartUserDimotikiEnotitaLabel,
            dataMap: dimotikiEnotitaList,
          },
        ]}
      />

      <div className="flex flex-col gap-6">
        <h1 className="text-center text-3xl font-bold">{t.userTitle}</h1>

        <div className="flex flex-wrap gap-3">
          <Input
            type="search"
            placeholder={t.userSearchPlaceholder}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="max-w-xs"
          />
          <Select value={islandFilter} onValueChange={setIslandFilter}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">{t.userFilterAllLabel}</SelectItem>
              {islandOptions.map((island) => (
                <SelectItem key={island} value={island}>
                  {island}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Select value={countryFilter} onValueChange={setCountryFilter}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">{t.userFilterAllLabel}</SelectItem>
              {countryOptions.map((country) => (
                <SelectItem key={country} value={country}>
                  {country}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
          {filteredData.map((user) => (
            <UserBlock
              id={user.id}
              key={user.id}
              username={user.username}
              email={user.email}
              country={user.profile_data.current_country}
              island={user.profile_data.island}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export async function getServerSideProps(ctx) {
  const jwt = parseCookies(ctx).jwt;
  // In case a cookie is not found, do not add the Auth header, cause it creates
  // issues with authenticated results.
  const headers = jwt && {
    Authorization: `Bearer ${jwt}`,
  };

  const res = await fetch(process.env.NEXT_PUBLIC_API_URL + "/api/users", {
    headers: headers,
  });

  const statResponse = await fetch(
    process.env.NEXT_PUBLIC_API_URL + "/api/users/countries",
    {
      headers: headers,
    }
  );

  const data = await res.json();
  const { countryList, islandList, birthPlaceList, dimotikiEnotitaList } =
    await statResponse.json();

  return {
    props: {
      data,
      countryList,
      islandList,
      birthPlaceList,
      dimotikiEnotitaList,
    },
  };
}

export default Users;
