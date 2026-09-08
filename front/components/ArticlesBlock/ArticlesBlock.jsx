import Link from "next/link";
import { replaceSpacesToDash } from "../../utils";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

export const ArticlesBlock = ({ id, title, imgUrl, description }) => {
  return (
    <Link href={`/news/${id}`}>
      <Card className="h-full transition-shadow hover:shadow-md">
        <img
          className="aspect-video w-full rounded-t-xl object-cover"
          src={imgUrl}
          alt={replaceSpacesToDash(title)}
        />
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
      </Card>
    </Link>
  );
};
