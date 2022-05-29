import React from "react";
import styles from "./UserProfile.module.css";
import Profile from '../../components/Profile/Profile';
const Users = ({ data }) => {
  const {   email,usernamen } = data;

  if (!data) return null;

  // Add the profile component here for the display
  return (
    <div className={styles.root}>
      {/* <h1 className={styles.username}>{username}</h1>
      <span className={styles.email}>{email}</span> */}
        <Profile profile_data={{email,usernamen,...data.profile_data}} />
    </div>


  );
};

export async function getServerSideProps(context) {
  const res = await fetch(
    process.env.NEXT_PUBLIC_API_URL + "/api/users/" + context.params.id
  );


  const data = await res.json();
  
  console.log('the data',data)
  return {
    props: { data },
  };
}

export default Users;
