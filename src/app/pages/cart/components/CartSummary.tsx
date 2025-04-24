import React from 'react';

import Button from '@shared/components/partials/Button';
import { useCart } from '@shared/contexts/CartContext';

export const CartSummary: React.FC = () => {
  const { totalPrice, totalQuantity } = useCart();
  return (
    <div className="cart-summary">
      <h2 className="cart-title">Cart Totals</h2>
      <div className="cart-info">
        <div className="cart-detail">
          <h3 className="cart-label">Quantity</h3>
          <p className="cart-value">{totalQuantity}</p>
        </div>
        <div className="cart-detail">
          <h3 className="cart-label">Total</h3>
          <p className="cart-value">{totalPrice} VND</p>
        </div>
      </div>
      <div className="cart-action">
        <Button label={'Checkout'} className="btn btn-secondary" />
      </div>
    </div>
  );
};
