import deleteIcon from '@assets/icons/delete.svg';
import Button from '@shared/components/partials/Button';
import { Input } from '@shared/components/partials/Input';
import { useCart } from '@shared/contexts/CartContext';
import { CartItem } from '@shared/models/CartItem';
import React, { useRef } from 'react';

interface ICartItemProps {
  productItem: CartItem;
}

export const CartItemComponent: React.FC<ICartItemProps> = ({
  productItem,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const { updateQuantity, deleteItem } = useCart();

  const handleChangeQuantity = () => {
    const value = inputRef.current?.value || '';
    const quantity = parseInt(value, 10);

    if (!isNaN(quantity)) {
      if (quantity < 1) {
        deleteItem(productItem.pet.id);
      } else {
        updateQuantity(productItem.pet.id, quantity);
      }
    }
  };

  return (
    <tr>
      <td className="cart-row cart-img">
        <img src={productItem.pet.image} alt={productItem.pet.id} />
      </td>
      <td className="cart-row">{productItem.pet.breed}</td>
      <td className="cart-row">{productItem.pet.price}VND</td>
      <td className="cart-row">
        {productItem.pet.price * productItem.quantity} VND
      </td>
      <td className="cart-row">
        <div className="quantity-control">
          <Input
            className="input-square"
            placeHolder={productItem.quantity.toString()}
            value={productItem.quantity}
            type="number"
            ref={inputRef}
            onInputChange={handleChangeQuantity}
          />
        </div>
      </td>
      <td className="cart-row">
        <Button
          icon={deleteIcon}
          className="btn btn-icon"
          onClick={() => deleteItem(productItem.pet.id)}
        />
      </td>
    </tr>
  );
};
