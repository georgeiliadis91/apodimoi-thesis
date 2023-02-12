import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { UserBlock } from "../components/UserBlock/UserBlock";
import { parseCookies } from "nookies";
import { useTranslations } from "../hooks/useTranslations";
import { UserFilter } from "../components/UserFilter/UserFilter.tsx";

export const Users = ({ data, countryData }) => {
  const { t } = useTranslations();

  const [input, setInput] = useState("");

  const Map = dynamic(() => import("../components/UserMap/UserMap"), {
    loading: () => <p>loading map...</p>,
    ssr: false,
  });

  if (!data) return null;

  let filteredCountryData = {};
  if (input === "") {
    filteredCountryData = countryData;
  } else {
    Object.entries(countryData).find(([key, value]) => {
      if (key === input) {
        filteredCountryData[key] = value;
      }
    });
  }

  return (
    <>
      <UserFilter input={input} setInput={setInput} />
      <br />
      <details open>
        <summary>{t.usersMapDetails}</summary>
        <br />
        <Map userData={filteredCountryData} />
      </details>
      <br />
      <h1 className="pageTitle">{t.userTitle}</h1>
      <div className="content-block-container">
        {data
          .filter((user) => {
            if (input === "") return true;
            return user?.profile_data?.current_country === input;
          })
          .map((user) => {
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
