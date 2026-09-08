import { useTranslations } from "../../hooks/useTranslations";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

function Field({ label, value }) {
  if (!value) return null;
  return (
    <div className="flex flex-col gap-0.5">
      <span className="text-sm text-muted-foreground">{label}</span>
      <span>{value}</span>
    </div>
  );
}

function Profile({ profile_data }) {
  const {
    email,
    birth_place,
    birthdate,
    current_country,
    father_name,
    father_surname,
    island,
    mother_name,
    mother_surname,
    name,
    surname,
    current_city,
    postal_code,
    current_street,
    occupation,
    phone_number,
    other_groups,
  } = profile_data;

  const { t } = useTranslations();

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
      <Card>
        <CardContent className="flex flex-col gap-3">
          <Field label={t.meEmail} value={email} />
          <Field label={t.meName} value={name} />
          <Field label={t.meSurname} value={surname} />
          <Field label={t.meIslandOfOrigin} value={island} />
          <Field label={t.meCurrLocation} value={current_country} />
          <Field label={t.meBirthdate} value={birthdate} />
        </CardContent>
      </Card>

      <div className="flex flex-col gap-6">
        <Card>
          <CardHeader>
            <CardTitle>{t.meFamilyData}</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-3">
            <Field label={t.meBirthPlace} value={birth_place} />
            <Field label={t.meFathersName} value={father_name} />
            <Field label={t.meFathersSurname} value={father_surname} />
            <Field label={t.meMothersName} value={mother_name} />
            <Field label={t.meMothersSurname} value={mother_surname} />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>{t.mePersonalData}</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-3">
            <Field label={t.meCurrCity} value={current_city} />
            <Field label={t.mePostalCode} value={postal_code} />
            <Field label={t.meStreet} value={current_street} />
            <Field label={t.meOccupation} value={occupation} />
            <Field label={t.mePhone} value={phone_number} />
            {other_groups && (
              <div className="flex flex-col gap-0.5">
                <span className="text-sm text-muted-foreground">
                  {t.meOtherCommunities}
                </span>
                <p>{other_groups}</p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default Profile;
