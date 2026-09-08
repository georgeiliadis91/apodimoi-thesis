import { useContext, useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import { setCookie } from "nookies";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import * as z from "zod";
import { UserContext } from "../store/store";
import countryList from "../json-data-files/countryList.json";
import { useTranslations } from "../hooks/useTranslations";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";

const registerSchema = z
  .object({
    email: z.string().email(),
    password: z.string().min(8),
    password2: z.string().min(8),
    name: z.string().min(1),
    surname: z.string().min(1),
    island: z.string().min(1),
    dimotiki_enotita: z.string().min(1),
    current_country: z.string().min(1),
  })
  .refine((data) => data.password === data.password2, {
    message: "Passwords don't match",
    path: ["password2"],
  });

const Register = ({ data }) => {
  const { t } = useTranslations();
  const router = useRouter();
  const { logIn } = useContext(UserContext);
  const islands = Object.keys(data.attributes.toponimia);

  const form = useForm({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      email: "",
      password: "",
      password2: "",
      name: "",
      surname: "",
      island: islands[0],
      dimotiki_enotita: "",
      current_country: "",
    },
  });

  const selectedIsland = form.watch("island");
  const municipalities = Object.values(
    data.attributes.toponimia[selectedIsland] || {}
  );

  // reset the dependent municipality whenever the island changes
  useEffect(() => {
    form.setValue("dimotiki_enotita", "");
  }, [selectedIsland]);

  const onSubmit = (formData) => {
    axios
      .post(process.env.NEXT_PUBLIC_API_URL + "/api/auth/local/register", {
        email: formData.email,
        username: formData.email,
        password: formData.password,
        profile_data: {
          name: formData.name,
          surname: formData.surname,
          current_country: formData.current_country,
          island: formData.island,
          dimotiki_enotita: formData.dimotiki_enotita,
        },
      })
      .then((response) => {
        setCookie(null, "jwt", response.data.jwt, {
          maxAge: 30 * 24 * 60 * 60,
          path: "/",
        });
        logIn();
        router.replace("/users/me");
      })
      .catch((error) => {
        form.setError("root", {
          message:
            error?.response?.data?.error?.message ||
            "Please check your data once more",
        });
      });
  };

  return (
    <div className="mx-auto max-w-sm">
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FieldGroup>
          <h2 className="text-xl font-semibold">{t.registerTitle}</h2>

          <Controller
            name="email"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor="email">{t.registerEmail}</FieldLabel>
                <Input
                  {...field}
                  id="email"
                  type="email"
                  placeholder={t.registerEmailPlaceholder}
                  aria-invalid={fieldState.invalid}
                />
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />

          <Controller
            name="password"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor="password">
                  {t.registerPassword}
                </FieldLabel>
                <Input
                  {...field}
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  aria-invalid={fieldState.invalid}
                />
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />

          <Controller
            name="password2"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor="password2">
                  {t.registerPasswordPlaceholder}
                </FieldLabel>
                <Input
                  {...field}
                  id="password2"
                  type="password"
                  placeholder="Confirm your password"
                  aria-invalid={fieldState.invalid}
                />
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />

          <Controller
            name="name"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor="name">{t.registerName}</FieldLabel>
                <Input
                  {...field}
                  id="name"
                  placeholder={t.registerNamePlaceholder}
                  aria-invalid={fieldState.invalid}
                />
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />

          <Controller
            name="surname"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor="surname">{t.registerSurname}</FieldLabel>
                <Input
                  {...field}
                  id="surname"
                  placeholder={t.registerSurnamenPlaceholder}
                  aria-invalid={fieldState.invalid}
                />
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />

          <Controller
            name="island"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor="island">{t.registerIsland}</FieldLabel>
                <Select value={field.value} onValueChange={field.onChange}>
                  <SelectTrigger id="island" aria-invalid={fieldState.invalid}>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {islands.map((island) => (
                      <SelectItem key={island} value={island}>
                        {island}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />

          <Controller
            name="dimotiki_enotita"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor="dimotiki_enotita">
                  {t.registerMunicipality}
                </FieldLabel>
                <Select
                  value={field.value}
                  onValueChange={field.onChange}
                  disabled={!selectedIsland}
                >
                  <SelectTrigger
                    id="dimotiki_enotita"
                    aria-invalid={fieldState.invalid}
                  >
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {municipalities.map((municipality) => (
                      <SelectItem key={municipality} value={municipality}>
                        {municipality}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />

          <Controller
            name="current_country"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor="current_country">
                  {t.registerCountry}
                </FieldLabel>
                <Select value={field.value} onValueChange={field.onChange}>
                  <SelectTrigger
                    id="current_country"
                    aria-invalid={fieldState.invalid}
                  >
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {countryList.map(({ label }) => (
                      <SelectItem key={label} value={label}>
                        {label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />

          {form.formState.errors.root && (
            <p className="text-sm text-destructive">
              {form.formState.errors.root.message}
            </p>
          )}

          <Button type="submit" disabled={form.formState.isSubmitting}>
            {t.registerBtn}
          </Button>
        </FieldGroup>
      </form>
    </div>
  );
};

export async function getServerSideProps() {
  const res = await fetch(process.env.NEXT_PUBLIC_API_URL + "/api/toponimia");
  const { data } = await res.json();

  return {
    props: { data },
  };
}

export default Register;
