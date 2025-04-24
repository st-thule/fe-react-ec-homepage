import React from 'react';

import { CartList } from './components/CartList';
import { CartSummary } from './components/CartSummary';

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
