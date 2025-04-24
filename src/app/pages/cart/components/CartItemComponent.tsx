import Button from '@shared/components/partials/Button';
import { Input } from '@shared/components/partials/Input';
import { CartItem } from '@shared/models/CartItem';
import { Pet } from '@shared/models/Pet';
import deleteIcon from '@assets/icons/delete.svg';
import React, { useRef } from 'react';

interface ICartItemProps {
  productItem: CartItem;
  onChangeQuantity: (petId: string, quantity: number) => void;
  onDelete: (petId: string) => void;
}
export const CartItemComponent: React.FC<ICartItemProps> = ({
  productItem,
  onChangeQuantity,
  onDelete,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const handleChangeQuantity = (value: string) => {
    const quantity = parseInt(value, 10);
    if (!isNaN(quantity) && quantity > 0) {
      onChangeQuantity(productItem.pet.id, quantity);
    }
  };

  const handleDeleteCartItem = (petId: string) => {};
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
          onClick={() => onDelete(productItem.pet.id)}
        />
      </td>
    </tr>
  );
};
