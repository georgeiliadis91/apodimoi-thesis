import { useContext } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import { setCookie } from "nookies";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import * as z from "zod";
import { UserContext } from "../store/store";
import { useTranslations } from "../hooks/useTranslations";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

const Login = () => {
  const router = useRouter();
  const { logIn } = useContext(UserContext);
  const { t } = useTranslations();
  const form = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: { email: "", password: "" },
  });

  const onSubmit = (data) => {
    axios
      .post(process.env.NEXT_PUBLIC_API_URL + "/api/auth/local", {
        identifier: data.email,
        password: data.password,
      })
      .then((response) => {
        setCookie(null, "jwt", response.data.jwt, {
          maxAge: 30 * 24 * 60 * 60,
          path: "/",
        });
        logIn();
        router.push("/users/me");
      })
      .catch((error) => {
        form.setError("root", {
          message:
            error?.response?.data?.error?.message ||
            "Invalid credentials, please try again",
        });
      });
  };

  return (
    <div className="mx-auto max-w-sm">
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FieldGroup>
          <h2 className="text-xl font-semibold">{t.loginTitle}</h2>
          <Controller
            name="email"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor="email">{t.loginEmail}</FieldLabel>
                <Input
                  {...field}
                  id="email"
                  type="email"
                  placeholder={t.loginEmailPlaceholder}
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
                <FieldLabel htmlFor="password">{t.loginPassword}</FieldLabel>
                <Input
                  {...field}
                  id="password"
                  type="password"
                  placeholder={t.loginPasswordPlaceholder}
                  aria-invalid={fieldState.invalid}
                />
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
            {t.loginBtnLogin}
          </Button>
        </FieldGroup>
      </form>
    </div>
  );
};

export default Login;
