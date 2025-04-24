import React from 'react';

import { Header } from '@shared/components/layout/Header';
import { Home } from '@app/pages/home/Home';
import { Outlet } from 'react-router-dom';

export const Page = () => {
  return (
    <>
      <Header />
      <main className="main">
        <Outlet />
      </main>
    </>
  );
};
