import { useContext, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Menu } from "lucide-react";
import { UserContext } from "../../store/store";
import { useTranslations } from "../../hooks/useTranslations";
import { NavBarItem } from "./components/NavBarItem";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export const Navbar = ({ navbar }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { logged, logOut } = useContext(UserContext);
  const router = useRouter();
  const { t } = useTranslations();

  const logOutUser = () => {
    logOut();
    router.replace("/");
  };

  return (
    <div className="relative z-50 flex h-[85px] items-center justify-between bg-primary px-[5%] text-primary-foreground">
      {/* mobile */}
      <div className="flex md:hidden">
        <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" aria-label={t.burgerMenuLabel}>
              <Menu className="size-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-72">
            <SheetHeader>
              <SheetTitle className="sr-only">{t.burgerMenuLabel}</SheetTitle>
            </SheetHeader>
            <nav className="flex flex-col gap-4 px-4">
              {Object.entries(navbar.leftSideMenu).map(([key, val]) => {
                if (!val.values) {
                  return (
                    <Link
                      key={key}
                      href={key !== "home" ? `/${key}` : "/"}
                      onClick={() => setMobileOpen(false)}
                      className="text-lg font-medium"
                    >
                      {val}
                    </Link>
                  );
                }
                return (
                  <div key={key} className="flex flex-col gap-2">
                    <span className="text-sm font-semibold text-muted-foreground">
                      {val.name}
                    </span>
                    {Object.entries(val.values).map(([subKey, subVal]) => (
                      <Link
                        key={subKey}
                        href={subKey !== "home" ? `/${subKey}` : "/"}
                        onClick={() => setMobileOpen(false)}
                        className="pl-2 text-lg font-medium"
                      >
                        {subVal}
                      </Link>
                    ))}
                  </div>
                );
              })}
            </nav>
          </SheetContent>
        </Sheet>
      </div>

      {/* desktop */}
      <div className="hidden md:flex">
        <NavigationMenu viewport={false}>
          <NavigationMenuList>
            {Object.entries(navbar.leftSideMenu).map(([key, val]) => (
              <NavBarItem key={key} keyVal={key} value={val} />
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      <div className="relative flex items-center gap-4">
        {logged ? (
          <>
            <Link href="/users/me" className="font-medium hover:underline">
              {t.navbarProfile}
            </Link>
            <Button size="sm" variant="secondary" onClick={logOutUser}>
              {t.navbarLogout}
            </Button>
          </>
        ) : (
          Object.entries(navbar.rightSideMenu).map(([key, val]) => (
            <Link key={key} href={key} className="font-medium hover:underline">
              {val}
            </Link>
          ))
        )}
      </div>
    </div>
  );
};
