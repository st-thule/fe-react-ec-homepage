import { Pet } from '../../models/Pets';
import { Product } from '../../models/Product';

export enum CardType {
  PETS = 'pets',
  PRODUCTS = 'products',
}
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

export const PetsList: Pet[] = [
  {
    id: 'MO231',
    image: '../../assets/images/pets.png',
    breed: 'Pomeranian White',
    gender: 'Male',
    age: 2,
    price: 6900000,
  },
  {
    id: 'MO502',
    image: '../../assets/images/pets.png',
    breed: 'Poodle Tiny Yellow',
    gender: 'Female',
    age: 2,
    price: 6900000,
  },
  {
    id: 'MO102',
    image: '../../assets/images/pets.png',
    breed: 'Poodle Tiny Sepia',
    gender: 'Male',
    age: 2,
    price: 6900000,
  },
  {
    id: 'MO513',
    image: '../../assets/images/pets.png',
    breed: 'Alaskan Malamute Grey',
    gender: 'Male',
    age: 2,
    price: 6900000,
  },
  {
    id: 'MO232',
    image: '../../assets/images/pets.png',
    breed: 'Pembroke Corgi Cream',
    gender: 'Male',
    age: 2,
    price: 6900000,
  },
  {
    id: 'MO501',
    image: '../../assets/images/pets.png',
    breed: 'Pembroke Corgi Tricolor',
    gender: 'Female',
    age: 2,
    price: 6900000,
  },
  {
    id: 'MO233',
    image: '../../assets/images/pets.png',
    breed: 'Pomeranian White',
    gender: 'Female',
    age: 2,
    price: 6900000,
  },
  {
    id: 'MO512',
    image: '../../assets/images/pets.png',
    breed: 'Poodle Tiny Dairy Cow',
    gender: 'Female',
    age: 2,
    price: 6900000,
  },
];

export const ProductList: Product[] = [
  {
    id: '1',
    name: 'Reflex Plus Adult Cat Food Salmon',
    type: 'Dog Food',
    size: '385g',
    price: 140000,
    image: '../../assets/images/product.png',
  },
  {
    id: '2',
    name: 'Reflex Plus Adult Cat Food Salmon',
    type: 'Cat Food',
    size: '1.5kg',
    price: 165000,
    image: '../../assets/images/product.png',
  },
  {
    id: '3',
    name: 'Cat scratching ball toy kitten sisal rope ball',
    type: 'Toy',
    size: '',
    price: 1100000,
    image: '../../assets/images/product.png',
  },
  {
    id: '4',
    name: 'Cute Pet Cat Warm Nest',
    type: 'Toy',
    size: '',
    price: 410000,
    image: '../../assets/images/product.png',
  },
  {
    id: '5',
    name: 'NaturVet Dogs – Omega-Gold Plus Salmon Oil',
    type: 'Dog Food',
    size: '385g',
    price: 350000,
    image: '../../assets/images/product.png',
  },
  {
    id: '6',
    name: 'Costumes Fashion Pet Cloth Cowboy Rider',
    type: 'Costume',
    size: '1.5kg',
    price: 500000,
    image: '../../assets/images/product.png',
  },
  {
    id: '7',
    name: 'Costumes Chicken Drumstick Headband',
    type: 'Costume',
    size: '',
    price: 400000,
    image: '../../assets/images/product.png',
  },
  {
    id: '8',
    name: 'Plush Pet Toy',
    type: 'Toy',
    size: '',
    price: 250000,
    image: '../../assets/images/product.png',
  },
];
