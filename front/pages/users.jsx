import React from "react";
import { UserLocationChart } from "../components/UserLocationChart/UserLocationChart";
import { UserBlock } from "../components/UserBlock/UserBlock";
import { parseCookies } from "nookies";

export const Users = ({ data, countryData }) => {
  if (!data) return null;

  return (
    <>
      <h1 className="pageTitle">Χρήστες</h1>
      <div className="item-overview-display-grid">
        {data.map((user) => {
          if (!user) return null;
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

      <br />
      <UserLocationChart countryList={countryData} />
    </>
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

  const countryRes = await fetch(
    process.env.NEXT_PUBLIC_API_URL + "/api/users/countries",
    {
      headers: headers,
    }
  );

  const data = await res.json();
  const countryData = await countryRes.json();

  return {
    props: { data, countryData },
  };
}

export default Users;
