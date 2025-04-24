import React from 'react';

import { Footer } from '@shared/components/layout/Footer';
import { Header } from '@shared/components/layout/Header';
import { Outlet } from 'react-router-dom';

export const Page = () => {
  return (
    <>
      <Header />
      <main className="main">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
