"use client";

import { Logo } from "./icons/logo";
import Link from "next/link";
import { Container } from "./container";
import { Button } from "./button";
import { HamburgerIcon } from "./icons/hamburger";
import { useEffect, useState } from "react";
import classNames from "classnames";

export const Header = () => {
  const [hamburgerMenuIsOpen, setHamburgerMenuIsOpen] = useState(false);

  useEffect(() => {
    const html = document.querySelector("html");
    if (html) html.classList.toggle("overflow-hidden", hamburgerMenuIsOpen);
  }, [hamburgerMenuIsOpen]);

  return (
    <header className="fixed left-0 top-0 w-full border-b border-border-white backdrop-blur-[12px]">
      <Container className="flex h-navigation-height">
        <Link className="flex items-center text-lg" href="/">
          <Logo className="mr-4 h-[1.8rem] w-[1.8rem]" />
          Linear
        </Link>
        <div
          className={classNames(
            "transition-[visibility] md:visible",
            hamburgerMenuIsOpen ? "visible" : "invisible delay-500"
          )}
        >
          <nav
            className={classNames(
              "transition-opacity duration-500 md:opacity-100 md:bg-transparent fixed left-0 top-navigation-height h-[calc(100vh_-_var(--navigation-height))] w-full overflow-auto bg-background md:relative md:top-0 md:block md:h-auto md:w-auto md:translate-x-0 md:transition-none",
              hamburgerMenuIsOpen
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-[-100vw]"
            )}
          >
            <ul
              className={classNames(
                "flex h-full flex-col md:flex-row md:items-center [&_li]:ml-6 [&_li]:border-b [&_li]:border-grey-dark md:[&_li]:border-none",
                "[&_a:hover]:text-grey [&_a]:duration-300 ease-in [&_a]:flex [&_a]:h-navigation-height [&_a]:w-full [&_a]:items-center [&_a]:text-lg [&_a]:transition-[color,transform] md:[&_a]:text-md [&_a]:translate-y-8 md:[&_a]:translate-y-0 [&_a]:md:transition-colors",
                hamburgerMenuIsOpen && "[&_a]:translate-y-0"
              )}
            >
              <li>
                <Link href="#">Features </Link>
              </li>
              <li>
                <Link href="#">Method</Link>
              </li>
              <li className="md:hidden lg:block">
                <Link href="#">Customers</Link>
              </li>
              <li className="md:hidden lg:block">
                <Link href="#">Changelog</Link>
              </li>
              <li className="md:hidden lg:block">
                <Link href="#">Integrations</Link>
              </li>
              <li>
                <Link href="#">Pricing</Link>
              </li>
              <li>
                <Link href="#">Company</Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="ml-auto flex h-full items-center [&_a]:text-md">
          <Link className="mr-6" href="#">
            Log in
          </Link>
          <Button href="#">Sign up</Button>
        </div>
        <button
          className="ml-6 md:hidden"
          onClick={() => setHamburgerMenuIsOpen((open) => !open)}
        >
          <span className="sr-only">Toggle Menu</span>
          <HamburgerIcon />
        </button>
      </Container>
    </header>
  );
};
