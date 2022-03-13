import React from "react";
import { withAuth } from "../../utils";

const Me = ({ data }) => {
  return <div>{JSON.stringify(data)}</div>;
};

export async function getServerSideProps(context) {
  const res = await fetch(process.env.NEXT_PUBLIC_API_URL + "/users/me", {
    headers: {
      ContentType: "application/json",
      Authorization: `Bearer ${context.req.cookies.jwtToken}`,
    },
  });
  const data = await res.json();

  return {
    props: { data },
  };
}

export default withAuth(Me);
