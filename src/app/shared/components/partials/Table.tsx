import { Cart } from '@shared/models/Cart';
import { CartItem } from '@shared/models/CartItem';
import React from 'react';

interface ITableProps {
  cartList: CartItem[];
}
export const Table: React.FC<ITableProps> = ({ cartList }) => {
  return (
    <table className="table table-customers">
      <thead>
        <tr>
          <th className="col">Product</th>
          <th className="col">Price</th>
          <th className="col">Quantity</th>
          <th className="col">Subtotal</th>
          <th className="col"></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="row">dfd</td>
          <td className="row">fdf</td>
          <td className="row">{customer.phone_number}</td>
          <td className="row">{customer.email}</td>
          <td className="row">{customer.country}</td>
          <td className="row">
            <Button
              isActive={isActive}
              label={isActive ? 'Active' : 'Inactive'}
            />
          </td>
        </tr>
      </tbody>
    </table>
  );
};
