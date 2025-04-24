import Button from '@shared/components/partials/Button';
import { Pet } from '@shared/models/Pet';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export const ProductDetail = () => {
  const { id } = useParams();
  const [petData, setPetData] = useState<Pet | null>(null);
  useEffect(() => {
    const fetchPet = async () => {
      try {
        const response = await fetch('/data/product.json');
        if (!response.ok) throw new Error('Failed to fetch');
        const petList: Pet[] = await response.json();
        console.log(petList);

        const foundPet = petList.find((item) => item.id === id);
        if (foundPet) {
          setPetData(foundPet);
        } else {
          console.log('Not found');
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchPet();
  }, [id]);

  if (!petData) {
    return <div>Loading...</div>;
  }

  return (
    <section className="section-detail">
      <div className="container">
        <div className="wrapper">
          <div className="section-image">
            <img className="" src={petData.image} alt={petData.id.toString()} />
          </div>
          <div className="section-text">
            <h2 className="section-title">{`${petData.id} - ${petData.breed}`}</h2>
            <p className="section-subtitle">{`${petData.price} VND`}</p>
            <div className="section-action">
              <Button
                label="Add to cart"
                className="btn-primary btn-bold btn-xl"
                type="button"
              />
            </div>
            <div className="section-info">
              <div className="info">
                <h3 className="info-label">Gene: </h3>
                <p className="info-value">{petData.gender}</p>
              </div>
              <div className="info">
                <h3 className="info-label">Age:</h3>
                <p className="info-value">{`${petData.age} months`}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
