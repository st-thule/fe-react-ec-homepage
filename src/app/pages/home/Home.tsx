import React from 'react';

import { PetsSection } from '@app/pages/home/container/PetsSection';
import { ProductSection } from '@app/pages/home/container/ProductsSection';
import { KnowledgeSection } from './container/KnowledgeSection';

export const Home = () => {
  return (
    <>
      <PetsSection />
      <ProductSection />
      <KnowledgeSection />
    </>
  );
};
