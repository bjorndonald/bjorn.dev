"use client";
import { Variants, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Rotate as Hamburger } from "hamburger-react";
import NavItem from "./NavItem";
import MobileNavItem from "./MobileNavItem";

const navItems = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Blog",
    href: "/blog",
  },
  {
    name: "Projects",
    href: "/projects",
  },
  {
    name: "Templates",
    href: "/templates",
  },
  {
    name: "Contact",
    href: "/contact",
  },
];

const mobileMenuVariants: Variants = {
  open: {
    x: 0,
    display: "flex",
    transition: {
      type: "spring",
      duration: 0.6,
      staggerChildren: 0.07,
      delayChildren: 0.2,
    },
  },
  closed: {
    x: "100%",
    transition: {
      type: "spring",
      duration: 0.6,
    },
  },
};

const Nav = (): JSX.Element => {
  const pathname = usePathname();
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  useEffect(() => {
    setIsMobileNavOpen(false);

    return () => {};
  }, [pathname]);

  return (
    <>
      <ul className="hidden list-none space-x-2 md:flex">
        {navItems.map((item, index) => (
          <NavItem href={item.href} asPath={pathname} key={index}>
            {item.name}
          </NavItem>
        ))}
      </ul>
      <div className="md:hidden">
        <div className="relative block md:hidden">
          <Hamburger
            toggled={isMobileNavOpen}
            toggle={setIsMobileNavOpen}
            rounded
            size={24}
            direction="right"
            label="Navigation Menu"
          />
        </div>
        <motion.ul
          className="absolute left-0 z-50 flex h-screen w-full list-none flex-col space-y-6 bg-primary px-8 pt-8 md:hidden"
          variants={mobileMenuVariants}
          initial="closed"
          animate={isMobileNavOpen ? "open" : "closed"}
        >
          {navItems.map((item, index) => (
            <MobileNavItem href={item.href} asPath={pathname} key={index}>
              {item.name}
            </MobileNavItem>
          ))}
        </motion.ul>
      </div>
    </>
  );
};

export default Nav;
