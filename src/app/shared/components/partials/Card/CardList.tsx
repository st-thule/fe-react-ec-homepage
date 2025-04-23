import React from 'react';

import { Pet } from '@shared/models/Pet';
import { Product } from '@shared/models/Product';
import { CardTypeKey } from '@shared/utils/storage';
import { CardItem } from './CardItem';
import { Blog } from '@shared/models/Blog';

export interface ICardList {
  data: Pet[] | Product[] | Blog[];
  type: CardTypeKey;
  className: string;
  onSubmit: (id: number | string) => void;
}
export const CardList: React.FC<ICardList> = ({
  data,
  type,
  className,
  onSubmit,
}) => {
  return (
    <ul className="list-products row">
      {data.map((item) => (
        <CardItem
          data={item}
          cardType={type}
          className={className}
          onSubmit={onSubmit}
        />
      ))}
    </ul>
  );
};
