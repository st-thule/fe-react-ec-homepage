import React from 'react';
import { CartItemComponent } from './CartItemComponent';
import { useCart } from '@shared/contexts/CartContext';
import { StatusKeys } from '@shared/utils/storage';

export const CartList: React.FC = () => {
  const { cartItems, cartStatus } = useCart();

  if (cartStatus.status === StatusKeys.LOADING) {
    return <p>Loading...</p>;
  }

  if (cartStatus.status === StatusKeys.ERROR) {
    return <p>{cartStatus.message}</p>;
  }

  if (cartStatus.status === StatusKeys.EMPTY) {
    return <p>Your cart is empty.</p>;
  }
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
        {cartItems.map((cart) => (
          <CartItemComponent key={cart.pet.id} productItem={cart} />
        ))}
      </tbody>
    </table>
  );
};
