export interface NavItemProps {
  id: number;
  title: string;
  href: string;
}

export const NavItems: NavItemProps[] = [
  {
    id: 1,
    title: 'Home',
    href: '/home',
  },
  {
    id: 2,
    title: 'Category',
    href: '/category',
  },
  {
    id: 3,
    title: 'About',
    href: '/about',
  },
  {
    id: 4,
    title: 'Contact',
    href: '/contact',
  },
];

export const sellerItem = [
  {
    id: 1,
    alt: 'Sheba',
    image: 'assets/images/sellers/sheba.png',
  },
  {
    id: 2,
    alt: 'Whiskas',
    image: 'assets/images/sellers/whiskas.png',
  },
  {
    id: 3,
    alt: 'Bakers',
    image: 'assets/images/sellers/bakers.png',
  },
  {
    id: 4,
    alt: 'Felix',
    image: 'assets/images/sellers/felix.png',
  },
  {
    id: 5,
    alt: 'Good Boy',
    image: 'assets/images/sellers/goodboy.png',
  },
  {
    id: 6,
    alt: 'Butchers',
    image: 'assets/images/sellers/butchers.png',
  },
  {
    id: 7,
    alt: 'Pedigree',
    image: 'assets/images/sellers/pedigree.png',
  },
];
export const listIconSocial = [
  {
    id: 1,
    alt: 'Facebook',
    image: 'assets/images/footer/facebook.png',
  },
  {
    id: 2,
    alt: 'Twitter',
    image: 'assets/images/footer/twitter.png',
  },
  {
    id: 3,
    alt: 'Instagram',
    image: 'assets/images/footer/instagram.png',
  },
  {
    id: 4,
    alt: 'Youtube',
    image: 'assets/images/footer/youtube.png',
  },
];

export const listFooterLegal = [
  {
    id: 1,
    label: 'Terms of Service',
  },
  {
    id: 2,
    label: 'Privacy Policy',
  },
];
