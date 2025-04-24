import React from 'react';

import { HeroBanner } from '@app/pages/home/container/HeroBanner';
import { FriendBanner } from '@app/pages/home/container/FriendBanner';
import { Sellers } from '@app/pages/home/container/Sellers';
import { Adoption } from '@app/pages/home/container/Adoption';
import { PetsSection } from '@app/pages/home/container/PetsSection';
import { ProductSection } from '@app/pages/home/container/ProductsSection';
import { KnowledgeSection } from './container/KnowledgeSection';
import { CartProvider } from '@shared/contexts/CartContext';

export const Home = () => {
  return (
    <>
      <HeroBanner />
      <PetsSection />
      <FriendBanner />
      <ProductSection />
      <Adoption />
      <Sellers />
      <KnowledgeSection />
    </>
  );
};
