import React from 'react';
import { CartItem } from '@shared/models/CartItem';
import { CartItemComponent } from './CartItemComponent';

interface ICartListProps {
  cartList: CartItem[];
  onChangeQuantity: (petId: string, quantity: number) => void;
  onDelete: (petId: string) => void;
}
export const CartList: React.FC<ICartListProps> = ({
  cartList,
  onChangeQuantity,
  onDelete,
}) => {
  return (
    <table className="cart-table">
      <thead className="cart-header">
        <tr>
          <th className="cart-col"></th>
          <th className="cart-col">Product</th>
          <th className="cart-col">Price</th>
          <th className="cart-col">Subtotal</th>
          <th className="cart-col">Quantity</th>
          <th className="cart-col"></th>
        </tr>
      </thead>
      <tbody className="cart-body">
        {cartList.map((cart, index) => (
          <CartItemComponent
            productItem={cart}
            key={cart.pet.id}
            onChangeQuantity={onChangeQuantity}
            onDelete={onDelete}
          />
        ))}
      </tbody>
    </table>
  );
};
