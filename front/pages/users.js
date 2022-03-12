import React from "react";
import { UserBlock } from "../components/UserBlock/UserBlock";

export const Users = ({ data }) => {
  return (
    <>
      <h1 className="pageTitle">Χρήστες</h1>
      {data.map((user) => (
        <UserBlock
          id={user.id}
          key={user.id}
          username={user.username}
          email={user.email}
          profile_img={`${process.env.NEXT_PUBLIC_API_URL}${user.profile_img.formats.thumbnail.url}`}
        />
      ))}
    </>
  );
};

export async function getServerSideProps(context) {
  const res = await fetch(process.env.NEXT_PUBLIC_API_URL + "/users");
  const data = await res.json();
  return {
    props: { data },
  };
}

export default Users;
