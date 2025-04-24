import React, { useEffect, useState } from 'react';
import { CartList } from './components/CartList';
import { CartSummary } from './components/CartSummary';
import { CartItem } from '@shared/models/CartItem';
import {
  getDataFromLocalStorage,
  setDataFromLocalStorage,
  StatusKeys,
  StorageKeys,
} from '@shared/utils/storage';

export const Cart = () => {
  const [cartList, setCartListData] = useState<CartItem[]>([]);
  const [message, setMessage] = useState<string>('');
  const [status, setStatus] = useState<StatusKeys>(StatusKeys.LOADING);

  useEffect(() => {
    setStatus(StatusKeys.LOADING);
    setMessage('Loading...');
    try {
      const cartListData = getDataFromLocalStorage(StorageKeys.PETS, []);
      setCartListData(cartListData);
      if (cartListData.length === 0) {
        setStatus(StatusKeys.EMPTY);
        setMessage('Your cart is empty.');
      } else {
        setStatus(StatusKeys.SUCCESS);
      }
    } catch (err) {
      setStatus(StatusKeys.ERROR);
      setMessage('Some error occurred while loading your cart.');
    }
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
    setDataFromLocalStorage(StorageKeys.PETS, updatedCartList);
  };

  const handleDeleteItem = (petId: string) => {
    const updatedCartList = cartList.filter((item) => item.pet.id !== petId);
    setCartListData(updatedCartList);
    setDataFromLocalStorage(StorageKeys.PETS, updatedCartList);
  };

  return (
    <section className="section-cart">
      <div className="container">
        <div className="wrapper">
          {status === StatusKeys.LOADING && <div>Loading...</div>}
          {status === StatusKeys.ERROR && <div>{message}</div>}
          {status === StatusKeys.EMPTY && <div>{message}</div>}
          {status === StatusKeys.SUCCESS && (
            <>
              <CartList
                cartList={cartList}
                onChangeQuantity={handleChangeQuantity}
                onDelete={handleDeleteItem}
              />
              <CartSummary
                totalPrice={totalPrice}
                totalQuantity={totalQuantity}
              />
            </>
          )}
        </div>
      </div>
    </section>
  );
};
