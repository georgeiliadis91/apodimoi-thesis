import axios from "axios";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import * as z from "zod";
import { toast } from "sonner";
import { useTranslations } from "../hooks/useTranslations";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";

const contactSchema = z.object({
  email: z.string().email(),
  name: z.string().min(1),
  message: z.string().min(1),
});

const initState = { email: "", name: "", message: "" };

const Contact = () => {
  const { t } = useTranslations();
  const form = useForm({
    resolver: zodResolver(contactSchema),
    defaultValues: initState,
  });

  const onSubmit = (data) => {
    axios
      .post(process.env.NEXT_PUBLIC_API_URL + "/api/contacts", { data })
      .then(() => {
        toast.success(t.contactSuccessMessage);
        form.reset(initState);
      })
      .catch((error) => {
        toast.error(error?.response?.data?.error?.message || "An error occurred");
      });
  };

  return (
    <div className="mx-auto max-w-xl">
      <h1 className="mb-8 text-center text-3xl font-bold">
        {t.contactTitle}
      </h1>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FieldGroup>
          <Controller
            name="email"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor="email">
                  {t.contactEmailLabel}
                </FieldLabel>
                <Input
                  {...field}
                  id="email"
                  type="email"
                  placeholder={t.contactEmailPlaceholder}
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
                <FieldLabel htmlFor="name">{t.contactNameLabel}</FieldLabel>
                <Input
                  {...field}
                  id="name"
                  placeholder={t.contactNamePlaceholder}
                  aria-invalid={fieldState.invalid}
                />
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />
          <Controller
            name="message"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor="message">
                  {t.contactMessageLabel}
                </FieldLabel>
                <Textarea
                  {...field}
                  id="message"
                  placeholder={t.contactMessagePlaceholder}
                  rows={10}
                  aria-invalid={fieldState.invalid}
                />
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />
          <Button type="submit" disabled={form.formState.isSubmitting}>
            Submit
          </Button>
        </FieldGroup>
      </form>
    </div>
  );
};

export default Contact;
