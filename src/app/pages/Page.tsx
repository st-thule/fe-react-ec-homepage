import React from 'react';

import { Footer } from '@shared/components/layout/Footer';
import { Header } from '@shared/components/layout/Header';
import { Outlet } from 'react-router-dom';
import { CartProvider } from '@shared/contexts/CartContext';

export const Page = () => {
  return (
    <>
      <CartProvider>
        <Header />
      </CartProvider>
      <main className="main">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
