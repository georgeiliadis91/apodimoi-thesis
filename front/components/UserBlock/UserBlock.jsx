import Link from "next/link";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export const UserBlock = ({ id, username, email, country, island }) => {
  return (
    <Link href={`/users/${id}`}>
      <Card className="h-full transition-shadow hover:shadow-md">
        <CardHeader>
          <CardTitle>{username}</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-1 text-sm text-muted-foreground">
          <span>Email: {email}</span>
          <span>Τόπος Διαμονής: {country}</span>
          <span>Νησί: {island}</span>
        </CardContent>
      </Card>
    </Link>
  );
};
