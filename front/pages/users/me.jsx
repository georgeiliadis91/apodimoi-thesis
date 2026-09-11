import { useState } from "react";
import { parseCookies } from "nookies";
import { useTranslations } from "../../hooks/useTranslations";
import Profile from "../../components/Profile/Profile";
import ProfileEdit from "../../components/Profile/ProfileEdit";
import { Button } from "@/components/ui/button";
import { requireAuthRedirect } from "../../utils/helpers";

const Me = ({ data }) => {
  const { email, profile_data } = data;
  const { t } = useTranslations();
  const [isEdit, setEdit] = useState(false);

  const toggleEdit = () => setEdit(!isEdit);

  return (
    <div className="mx-auto flex max-w-4xl flex-col gap-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">{t.meTitle}</h1>
        <Button
          variant={isEdit ? "outline" : "default"}
          onClick={toggleEdit}
        >
          {isEdit ? t.meCancel : t.meEdit}
        </Button>
      </div>
      {isEdit ? (
        <ProfileEdit
          profile_data={{ ...profile_data, email }}
          toggleEditOff={() => setEdit(false)}
        />
      ) : (
        <Profile profile_data={{ ...profile_data, email }} />
      )}
    </div>
  );
};

export async function getServerSideProps(ctx) {
  const authRedirect = requireAuthRedirect(ctx);
  if (authRedirect) return authRedirect;

  const jwt = parseCookies(ctx).jwt;

  const res = await fetch(process.env.NEXT_PUBLIC_API_URL + "/api/users/me", {
    headers: {
      ContentType: "application/json",
      Authorization: `Bearer ${jwt}`,
    },
  });
  const data = await res.json();

  return {
    props: { data },
  };
}

export default Me;
