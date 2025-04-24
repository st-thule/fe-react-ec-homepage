import React, { useEffect, useState } from 'react';
import { CartList } from './components/CartList';
import { CartSummary } from './components/CartSummary';
import { CartItem } from '@shared/models/CartItem';
import {
  getDataFromLocalStorage,
  setDataFromLocalStorage,
  StorageKeys,
} from '@shared/utils/storage';

export const Cart = () => {
  const [cartList, setCartListData] = useState<CartItem[]>([]);

  useEffect(() => {
    const cartListData = getDataFromLocalStorage(StorageKeys.PETS, []);
    console.log(cartListData);
    setCartListData(cartListData);
  }, []);

  const totalQuantity = cartList.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cartList.reduce(
    (sum, item) => sum + item.pet.price * item.quantity,
    0
  );

  const handleChangeQuantity = (petId: string, quantity: number) => {
    const updatedCartList = cartList.map((item) =>
      item.pet.id === petId ? { ...item, quantity } : item
    );
    setCartListData(updatedCartList);
    setDataFromLocalStorage(StorageKeys.PETS, cartList);
  };

  const handleDeleteItem = (petId: string) => {
    const updateCartList = cartList.filter((item) => item.pet.id !== petId);
    setCartListData(updateCartList);
    setDataFromLocalStorage(StorageKeys.PETS, cartList);
  };
  return (
    <section className="section-cart">
      <div className="container">
        <div className="wrapper">
          <CartList
            cartList={cartList}
            onChangeQuantity={handleChangeQuantity}
            onDelete={handleDeleteItem}
          />
          <CartSummary totalPrice={totalPrice} totalQuantity={totalQuantity} />
        </div>
      </div>
    </section>
  );
};
