import { Pet } from './Pet';

export interface CartItem {
  pet: Pet;
  quantity: number | 1;
}
