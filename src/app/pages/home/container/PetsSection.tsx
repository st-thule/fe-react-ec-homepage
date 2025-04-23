import React from 'react';
import { useEffect, useState } from 'react';

import { Pet } from '@shared/models/Pet';
import { CardTypeKey } from '@shared/utils/storage';
import Button from '@shared/components/partials/Button';
import { PetsList } from '@shared/constants/data';
import { CardList } from '@shared/components/partials/Card/CardList';

export const PetsSection = () => {
  const [pets, setPets] = useState<Pet[]>([]);

  useEffect(() => {
    setPets(PetsList);
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
            data={pets}
            type={CardTypeKey.PET}
            className="col-6 col-sm-6 col-md-3"
          />
        </div>
      </div>
    </section>
  );
};
