export interface NavItemProps {
  id: number;
  title: string;
  href: string;
}

export const NavItems: NavItemProps[] = [
  {
    id: 1,
    title: "Home",
    href: "/home",
  },
  {
    id: 2,
    title: "Category",
    href: "/category",
  },
  {
    id: 3,
    title: "About",
    href: "/about",
  },
  {
    id: 4,
    title: "Contact",
    href: "/contact",
  },
];

