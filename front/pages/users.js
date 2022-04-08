import React from "react";
import { UserBlock } from "../components/UserBlock/UserBlock";
import { parseCookies } from "nookies";

export const Users = ({ data }) => {
  if (!data) return null;

  return (
    <>
      <h1 className="pageTitle">Χρήστες</h1>
      {data.map((user) => {
        const imgUrl = user?.profile_data?.profile_img?.formats?.thumbnail?.url
          ? `${process.env.NEXT_PUBLIC_API_URL}${user?.profile_data?.profile_img?.formats?.thumbnail?.url}`
          : "/assets/profile_pic.jpeg";
        return (
          <UserBlock
            id={user.id}
            key={user.id}
            username={user.username}
            email={user.email}
            profile_img={imgUrl}
          />
        );
      })}
    </>
  );
};

export async function getServerSideProps(ctx) {
  const jwt = parseCookies(ctx).jwt;
  const res = await fetch(process.env.NEXT_PUBLIC_API_URL + "/api/users", {
    headers: {
      Authorization: `Bearer ${jwt}`,
    },
  });
  const data = await res.json();
  return {
    props: { data },
  };
}

export default Users;
