import Link from "next/link";
import {
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuTrigger,
  NavigationMenuContent,
} from "@/components/ui/navigation-menu";

export const NavBarItem = ({ value, keyVal }) => {
  if (!value.values) {
    return (
      <NavigationMenuItem>
        <NavigationMenuLink
          asChild
          className="bg-transparent text-primary-foreground hover:bg-primary-foreground/15 hover:text-primary-foreground focus:bg-primary-foreground/15 focus:text-primary-foreground"
        >
          <Link href={keyVal !== "home" ? `/${keyVal}` : "/"}>{value}</Link>
        </NavigationMenuLink>
      </NavigationMenuItem>
    );
  }

  return (
    <NavigationMenuItem>
      <NavigationMenuTrigger className="bg-transparent text-primary-foreground hover:bg-primary-foreground/15 hover:text-primary-foreground focus:bg-primary-foreground/15 focus:text-primary-foreground data-open:bg-primary-foreground/15 data-open:text-primary-foreground">
        {value.name}
      </NavigationMenuTrigger>
      <NavigationMenuContent>
        <ul className="grid w-48 gap-1">
          {Object.entries(value.values).map(([key, val]) => (
            <li key={key}>
              <NavigationMenuLink asChild>
                <Link href={key !== "home" ? `/${key}` : "/"}>{val}</Link>
              </NavigationMenuLink>
            </li>
          ))}
        </ul>
      </NavigationMenuContent>
    </NavigationMenuItem>
  );
};
