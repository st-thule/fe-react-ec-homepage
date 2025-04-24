import React from 'react';

import Button from '@shared/components/partials/Button';
interface ICartSummaryProps {
  totalQuantity: number | 0;
  totalPrice: number | 0;
}
export const CartSummary: React.FC<ICartSummaryProps> = ({
  totalPrice,
  totalQuantity,
}) => {
  return (
    <div className="cart-summary">
      <h2 className="cart-title">Cart Totals</h2>
      <div className="cart-info">
        <div className="cart-detail">
          <h3 className="cart-label">Quantity</h3>
          <p className="cart-value">{totalPrice}</p>
        </div>
        <div className="cart-detail">
          <h3 className="cart-label">Total</h3>
          <p className="cart-value">{totalQuantity} VND</p>
        </div>
      </div>
      <div className="cart-action">
        <Button label={'Checkout'} className="" />
      </div>
    </div>
  );
};
