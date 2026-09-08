import { useEffect, useState } from "react";
import { permissionModel } from "../../constants";
import { flattenPermissions, createUserData, capitalize } from "../../utils";
import { useRouter } from "next/router";
import axios from "axios";
import { FieldRenderer } from "../FieldRenderer/FieldRenderer";
import { parseCookies } from "nookies";
import { useTranslations } from "../../hooks/useTranslations";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

function PermissionRadioGroup({ name, value, onChange, labels }) {
  return (
    <RadioGroup
      value={value}
      onValueChange={(val) => onChange({ target: { name, value: val } })}
      className="flex flex-row gap-4"
    >
      {[permissionModel.private, permissionModel.authed, permissionModel.public].map(
        (level, index) => (
          <div key={level} className="flex items-center gap-1.5">
            <RadioGroupItem
              value={level}
              id={`${name}-${level}`}
              aria-label={labels[index]}
            />
            <label
              htmlFor={`${name}-${level}`}
              className="text-xs text-muted-foreground sm:hidden"
            >
              {labels[index]}
            </label>
          </div>
        )
      )}
    </RadioGroup>
  );
}

function ProfileEdit({ profile_data, toggleEditOff }) {
  const router = useRouter();
  const { permissions, ...rest } = profile_data;
  const { t } = useTranslations();

  const [permSettings, setPermissions] = useState(
    flattenPermissions(permissions)
  );
  const [userData, setUserData] = useState({ ...rest });
  const [options, setOptions] = useState(null);

  const toggleChange = (e) => {
    const { name, value } = e.target;
    setPermissions({ ...permSettings, [name]: value });
  };

  const updateField = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const setAllPermissions = (val) => {
    const newPermissions = {};
    Object.keys(permSettings).forEach((key) => {
      newPermissions[key] = val;
    });
    setPermissions(newPermissions);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formattedData = createUserData(userData, permSettings);
    const jwt = parseCookies().jwt;

    axios
      .put(
        process.env.NEXT_PUBLIC_API_URL + "/api/users/me?populate=*",
        formattedData,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${jwt}`,
          },
        }
      )
      .then(() => {
        router.push("/users/me");
        toggleEditOff();
      })
      .catch((error) => {
        console.error("An error occurred:", error);
      });
  };

  useEffect(() => {
    const fetchOptions = async () => {
      const res = await fetch(
        process.env.NEXT_PUBLIC_API_URL + "/api/toponimia"
      );
      const { data } = await res.json();

      setOptions(data);
    };

    fetchOptions();
  }, []);

  if (!options) {
    return null;
  }

  const permissionLabels = [
    t[permissionModel.private],
    t[permissionModel.authed],
    t[permissionModel.public],
  ];

  const fields = Object.entries(permSettings).filter(
    ([key]) => !["profile_img", "username"].includes(key)
  );

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="hidden items-center justify-end gap-4 pr-1 sm:flex">
        {permissionLabels.map((label) => (
          <span
            key={label}
            className="w-24 text-center text-xs font-medium whitespace-nowrap"
          >
            {label}
          </span>
        ))}
      </div>

      <div className="flex items-center justify-between rounded-md border p-3">
        <h5 className="text-sm font-medium">{t.meSetAll}</h5>
        <div className="flex gap-2">
          <Button
            type="button"
            size="sm"
            variant="outline"
            onClick={() => setAllPermissions(permissionModel.private)}
          >
            {t.private}
          </Button>
          <Button
            type="button"
            size="sm"
            variant="outline"
            onClick={() => setAllPermissions(permissionModel.authed)}
          >
            {t.authenticated}
          </Button>
          <Button
            type="button"
            size="sm"
            variant="outline"
            onClick={() => setAllPermissions(permissionModel.public)}
          >
            {t.public}
          </Button>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        {fields.map(([key, value]) => (
          <div
            key={key}
            className="flex flex-col gap-2 rounded-md border p-3 sm:flex-row sm:items-center sm:gap-4"
          >
            <span className="text-sm font-medium sm:w-40 sm:shrink-0">
              {t[`me${capitalize(key)}`]}
            </span>
            <div className="flex-1">
              <FieldRenderer
                value={userData[key]}
                fieldName={key}
                setFieldVal={updateField}
                options={options}
                island={userData.island}
              />
            </div>
            <PermissionRadioGroup
              name={key}
              value={value}
              onChange={toggleChange}
              labels={permissionLabels}
            />
          </div>
        ))}
      </div>

      <Button type="submit" className="self-end">
        Submit
      </Button>
    </form>
  );
}

export default ProfileEdit;
