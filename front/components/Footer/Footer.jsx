import Link from "next/link";
import { useRouter } from "next/router";

export const Footer = ({ footer }) => {
  const router = useRouter();

  return (
    <div className="flex flex-col items-start justify-between gap-2 border-t border-border bg-foreground px-[5%] py-5 text-background sm:flex-row sm:items-center">
      <div className="flex-1 text-lg font-light">{footer.content}</div>
      <span className="text-lg font-light">{footer.copyright}</span>
      <div className="flex gap-2">
        <Link
          href={router.pathname}
          locale="el"
          className="font-medium hover:underline"
        >
          GR
        </Link>
        <Link
          href={router.pathname}
          locale="en"
          className="font-medium hover:underline"
        >
          EN
        </Link>
      </div>
    </div>
  );
};
