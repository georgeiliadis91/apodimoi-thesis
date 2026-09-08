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
        <NavigationMenuLink asChild>
          <Link href={keyVal !== "home" ? `/${keyVal}` : "/"}>{value}</Link>
        </NavigationMenuLink>
      </NavigationMenuItem>
    );
  }

  return (
    <NavigationMenuItem>
      <NavigationMenuTrigger>{value.name}</NavigationMenuTrigger>
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
