import { Pet } from './Pet';

export interface CartItem {
  pets: Pet[];
  quantity: number | 1;
}
