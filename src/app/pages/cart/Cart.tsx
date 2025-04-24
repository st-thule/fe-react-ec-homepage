import React from 'react';
import { CartList } from './components/CartList';
import { CartSummary } from './components/CartSummary';
import { CartProvider } from '@shared/contexts/CartContext';

export const Cart = () => {
  return (
    <section className="section-cart">
      <div className="container">
        <div className="wrapper">
          <CartList />
          <CartSummary />
        </div>
      </div>
    </section>
  );
};
