import { getDataFromLocalStorage, StorageKeys } from '@shared/utils/storage';
import React, { useEffect, useState } from 'react';
import cartIcon from '@assets/icons/cart-icon.svg';
import { useCart } from '@shared/contexts/CartContext';

const CartBadge: React.FC = () => {
  const { totalQuantity } = useCart();

  return (
    <div className="cart-container">
      <img className="cart-icon" src={cartIcon} alt="Cart" />
      {totalQuantity > 0 && <span className="cart-badge">{totalQuantity}</span>}
    </div>
  );
};

export default CartBadge;
