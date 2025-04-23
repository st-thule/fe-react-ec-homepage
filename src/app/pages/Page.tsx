import React from 'react';

import { Footer } from '@shared/components/layout/Footer';
import { Header } from '@shared/components/layout/Header';
import { Home } from '@app/pages/home/Home';

export const Page = () => {
  return (
    <>
      <Header />
      <Home />
      <Footer />
    </>
  );
};
