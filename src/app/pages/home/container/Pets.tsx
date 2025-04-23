import { useEffect, useState } from 'react';
import Button from '../../../shared/components/Button';
import { CardList } from '../../../shared/components/PetsList';
import { CardType, PetsList } from '../../../shared/constants/Nav/nav';
import { Pet } from '../../../shared/models/Pets';

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
          <CardList data={pets} type={CardType.PETS} />
        </div>
      </div>
    </section>
  );
};
