import { Pet } from '@shared/models/Pet';
import { Product } from '@shared/models/Product';

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
    image: '../../assets/images/pets/white-dog.png',
    breed: 'Pomeranian White',
    gender: 'Male',
    age: 2,
    price: 6900000,
  },
  {
    id: 'MO502',
    image: '../../assets/images/pets/tiny.png',
    breed: 'Poodle Tiny Yellow',
    gender: 'Female',
    age: 2,
    price: 6900000,
  },
  {
    id: 'MO102',
    image: '../../assets/images/pets/poodle.png',
    breed: 'Poodle Tiny Sepia',
    gender: 'Male',
    age: 2,
    price: 6900000,
  },
  {
    id: 'MO513',
    image: '../../assets/images/pets/alaskan.png',
    breed: 'Alaskan Malamute Grey',
    gender: 'Male',
    age: 2,
    price: 6900000,
  },
  {
    id: 'MO232',
    image: '../../assets/images/pets/pembroke.png',
    breed: 'Pembroke Corgi Cream',
    gender: 'Male',
    age: 2,
    price: 6900000,
  },
  {
    id: 'MO501',
    image: '../../assets/images/pets/corgi.png',
    breed: 'Pembroke Corgi Tricolor',
    gender: 'Female',
    age: 2,
    price: 6900000,
  },
  {
    id: 'MO233',
    image: '../../assets/images/pets/white-dog.png',
    breed: 'Pomeranian White',
    gender: 'Female',
    age: 2,
    price: 6900000,
  },
  {
    id: 'MO512',
    image: '../../assets/images/pets/dairy.png',
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

export const BlogList = [
  {
    id: 1,
    title: 'What is a Pomeranian?',
    category: 'Pet knowledge',
    description:
      'The Pomeranian, also known as the Pomeranian (Pom dog), is always in the top of the cutest pets. Not only that, the small, lovely, smart, friendly, and skillful circu...',
    image: '../../assets/images/dogrun.png',
  },
  {
    id: 2,
    title: 'Dog Diet You Need To Know',
    category: 'Pet knowledge',
    description:
      "Dividing a dog's diet may seem simple at first, but there are some rules you should know so that your dog can easily absorb the nutrients in the diet. For those who are just starting to raise dogs, especially...",
    image: '../../assets/images/dogrun.png',
  },
  {
    id: 3,
    title:
      'Why Dogs Bite and Destroy Furniture and How to Prevent It Effectively',
    category: 'Pet knowledge',
    description:
      'Dog bites are common during development. However, no one wants to see their furniture or important items being bitten by a dog.',
    image: '../../assets/images/dogrun.png',
  },
];
