import { getDataFromLocalStorage, StorageKeys } from '@shared/utils/storage';
import React, { useEffect, useState } from 'react';
import cartIcon from '@assets/icons/cart-icon.svg';

const CartBadge: React.FC = () => {
  const [totalQuantity, setTotalQuantity] = useState<number>(0);

  useEffect(() => {
    const cartListData = getDataFromLocalStorage(StorageKeys.PETS, []);
    const total = cartListData.reduce(
      (total, item) => total + item.quantity,
      0
    );
    setTotalQuantity(total);
  }, []);

  return (
    <div className="cart-container">
      <img className="cart-icon" src={cartIcon} alt="Cart" />
      {totalQuantity > 0 && <span className="cart-badge">{totalQuantity}</span>}
    </div>
  );
};

export default CartBadge;
