import Profile from "../../components/Profile/Profile";

const UserProfilePage = ({ data }) => {
  if (!data) return null;
  const { email, username } = data;

  return (
    <div className="mx-auto max-w-4xl">
      <Profile profile_data={{ email, username, ...data.profile_data }} />
    </div>
  );
};

export async function getServerSideProps(context) {
  const res = await fetch(
    process.env.NEXT_PUBLIC_API_URL + "/api/users/" + context.params.id
  );
  const data = await res.json();

  return {
    props: { data },
  };
}

export default UserProfilePage;
