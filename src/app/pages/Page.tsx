import React from 'react';

import { Header } from '@shared/components/layout/Header';
import { Home } from '@app/pages/home/Home';
import { Footer } from '@shared/components/layout/Footer';

export const Page = () => {
  return (
    <>
      <Header />
      <Home />
      <Footer />
    </>
  );
};
