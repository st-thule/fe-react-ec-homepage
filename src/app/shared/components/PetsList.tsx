import { CardType } from '../constants/Nav/nav';
import { Pet } from '../models/Pets';
import { Product } from '../models/Product';
import { CardItem } from './CardItem';

export interface ICardList {
  data: Pet[] | Product[];
  type: CardType;
}
export const CardList: React.FC<ICardList> = ({ data, type }) => {
  return (
    <ul className="list-products row" id="list-pets">
      {data.map((item) => (
        <CardItem data={item} cardType={type} />
      ))}
    </ul>
  );
};
