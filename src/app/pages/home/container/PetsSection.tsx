import React from 'react';
import { useEffect, useState } from 'react';

import { Pet } from '@shared/models/Pet';
import {
  CardTypeKey,
  getDataFromLocalStorage,
  setDataFromLocalStorage,
  StorageKeys,
} from '@shared/utils/storage';
import Button from '@shared/components/partials/Button';
import { PetsList } from '@shared/constants/data';
import { CardList } from '@shared/components/partials/Card/CardList';
import { CartItem } from '@shared/models/CartItem';

export const PetsSection = () => {
  const [pets, setPets] = useState<Pet[]>([]);

  useEffect(() => {
    const fetchPets = async () => {
      try {
        const response = await fetch('/data/product.json');
        if (!response.ok) throw new Error('Fail to fetch');
        const data: Pet[] = await response.json();
        setPets(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchPets();
  }, []);

  const handleAddToCart = (id: string | number) => {
    const selectedItem = pets.find((pet) => pet.id === id);

    if (!selectedItem) return;

    const currentCartData: CartItem[] = getDataFromLocalStorage(
      StorageKeys.PETS,
      []
    );
    const existData = currentCartData.find(
      (cartItem) => cartItem.pet.id === id
    );

    if (!existData) {
      const newCartItem: CartItem = {
        pet: selectedItem,
        quantity: 1,
      };
      const updatedCart = [...currentCartData, newCartItem];
      setDataFromLocalStorage(StorageKeys.PETS, updatedCart);
    } else {
      const updatedCart = currentCartData.map((cartItem) =>
        cartItem.pet.id === id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      );
      setDataFromLocalStorage(StorageKeys.PETS, updatedCart);
    }
  };

  return (
    <section className="section section-products section-pets">
      <div className="container">
        <div className="section-header">
          <div className="section-text">
            <p className="section-subtitle">Whats new?</p>
            <h2 className="section-title">Take A Look At Some Of Our Pets</h2>
          </div>
          <div className="section-action">
            <Button
              className="btn-secondary btn-flex btn-sm btn-font-small"
              label="View more"
              icon="./assets/icons/arrow.svg"
            />
          </div>
        </div>
        <div className="section-body">
          <CardList
            data={pets}
            type={CardTypeKey.PET}
            className="col-6 col-sm-6 col-md-3"
            onSubmit={handleAddToCart}
          />
        </div>
      </div>
    </section>
  );
};
