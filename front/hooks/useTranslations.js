import en from "../translations/en.js";
import el from "../translations/el.js";
import { useRouter } from "next/router";

export const useTranslations = () => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : el;
  return { t };
};
