import React from 'react';

import { PetsSection } from '@app/pages/home/components/PetsSection';
import { ProductSection } from '@app/pages/home/components/ProductsSection';
import { KnowledgeSection } from './components/KnowledgeSection';

export const Home = () => {
  return (
    <>
      <PetsSection />
      <ProductSection />
      <KnowledgeSection />
    </>
  );
};
