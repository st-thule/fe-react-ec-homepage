import React from 'react';

import { Header } from '@shared/components/layout/Header';
import { Outlet } from 'react-router-dom';
import { Footer } from '@shared/components/layout/Footer';

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
