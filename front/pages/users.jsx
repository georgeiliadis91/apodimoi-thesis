import dynamic from "next/dynamic";
import { parseCookies } from "nookies";
import { UserStatChart } from "../components/UserLocationChart/UserLocationChart";
import { UserBlock } from "../components/UserBlock/UserBlock";
import { Skeleton } from "@/components/ui/skeleton";
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

  if (!data) return null;

  return (
    <div className="flex flex-col gap-10">
      <Map userData={countryList} />

      <div className="flex flex-wrap gap-3">
        <UserStatChart
          triggerLabel={t.chartUserCountryLabel}
          label={t.chartUserCountryLabel}
          dataMap={countryList}
        />
        <UserStatChart
          triggerLabel={t.chartUserIslandLabel}
          label={t.chartUserIslandLabel}
          dataMap={islandList}
        />
        <UserStatChart
          triggerLabel={t.chartUserDimotikiEnotitaLabel}
          label={t.chartUserDimotikiEnotitaLabel}
          dataMap={dimotikiEnotitaList}
        />
      </div>

      <div className="flex flex-col gap-6">
        <h1 className="text-center text-3xl font-bold">{t.userTitle}</h1>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
          {data.map((user) => {
            if (!user || !user.username || !user.email) return null;
            return (
              <UserBlock
                id={user.id}
                key={user.id}
                username={user.username}
                email={user.email}
                country={user.profile_data.current_country}
                island={user.profile_data.island}
              />
            );
          })}
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
