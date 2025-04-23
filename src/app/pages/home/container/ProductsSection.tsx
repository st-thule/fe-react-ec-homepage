import React from 'react';
import { useEffect, useState } from 'react';

import { Product } from '@shared/models/Product';
import Button from '@shared/components/partials/Button';
import { CardList } from '@shared/components/partials/Card/CardList';
import { ProductList } from '@shared/constants/data';
import { CardTypeKey } from '@shared/utils/storage';

export const ProductSection = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    setProducts(ProductList);
  }, []);

  return (
    <section className="section section-products section-pets">
      <div className="container">
        <div className="section-header">
          <div className="section-text">
            <p className="section-subtitle">Whats new?</p>
            <h2 className="section-title">Take A Look At Some Of Our Pets</h2>
          </div>
          <div className="section-action">
            <Button className="btn-secondary" label="View more" />
          </div>
        </div>
        <div className="section-body">
          <CardList
            data={products}
            type={CardTypeKey.PRODUCT}
            className="col-6 col-sm-6 col-md-3"
          />
        </div>
      </div>
    </section>
  );
};
