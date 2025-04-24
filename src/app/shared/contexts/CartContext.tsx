import React, { createContext, useContext, useEffect, useState } from 'react';
import {
  getDataFromLocalStorage,
  setDataFromLocalStorage,
  StorageKeys,
  StatusKeys,
} from '@shared/utils/storage';
import { CartItem } from '@shared/models/CartItem';

interface CartStatus {
  status: StatusKeys;
  message: string;
}

interface CartContextType {
  cartItems: CartItem[];
  cartStatus: CartStatus;
  updateQuantity: (id: string, quantity: number) => void;
  deleteItem: (id: string) => void;
  totalQuantity: number;
  totalPrice: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [cartStatus, setCartStatus] = useState<CartStatus>({
    status: StatusKeys.LOADING,
    message: 'Loading...',
  });

  useEffect(() => {
    try {
      const cartData = getDataFromLocalStorage(StorageKeys.PETS, []);
      setCartItems(cartData);

      if (cartData.length === 0) {
        setCartStatus({
          status: StatusKeys.EMPTY,
          message: 'Your cart is empty.',
        });
      } else {
        setCartStatus({
          status: StatusKeys.SUCCESS,
          message: 'Cart loaded successfully.',
        });
      }
    } catch (err) {
      setCartStatus({
        status: StatusKeys.ERROR,
        message: 'Failed to load cart data.',
      });
    }
  }, []);

  const updateQuantity = (id: string, quantity: number) => {
    const updatedItems = cartItems.map((item) =>
      item.pet.id === id ? { ...item, quantity } : item
    );
    setCartItems(updatedItems);
    setDataFromLocalStorage(StorageKeys.PETS, updatedItems);
  };

  const deleteItem = (id: string) => {
    const updatedItems = cartItems.filter((item) => item.pet.id !== id);
    setCartItems(updatedItems);
    setDataFromLocalStorage(StorageKeys.PETS, updatedItems);
  };

  const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.pet.price * item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cartItems,
        cartStatus,
        updateQuantity,
        deleteItem,
        totalQuantity,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used with a CartProvider');
  }
  return context;
};
