import React, { useState } from "react";
import { useTranslations } from "../../hooks/useTranslations";
import Link from "next/link";

export const NavbarMobileMenu = ({ leftSideMenu }) => {
  const [open, setOpen] = useState(false);
  const { t } = useTranslations();
  if (!leftSideMenu) return null;

  return (
    <div className="navbarMobileMenu">
      <button className="burger-menu" onClick={() => setOpen(true)}>
        {t.burgerMenuLabel}
      </button>
      {open && (
        <div className="mobile-menu-container">
          <button className="burger-menu-close" onClick={() => setOpen(false)}>
            X
          </button>
          <ul>
            {Object.entries(leftSideMenu).map(([key, val]) => {
              if (!val.values) {
                return (
                  <Link key={key} href={key !== "home" ? `/${key}` : "/"}>
                    <a
                      className="mobile-menu-link-label"
                      onClick={() => setShow(false)}
                    >
                      {val}
                    </a>
                  </Link>
                );
              }
              return (
                <>
                  {Object.entries(val.values).map(([key, val]) => {
                    return (
                      <Link key={key} href={key !== "home" ? `/${key}` : "/"}>
                        <a
                          className="mobile-menu-link-label"
                          onClick={() => setShow(false)}
                        >
                          {val}
                        </a>
                      </Link>
                    );
                  })}
                </>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
};
