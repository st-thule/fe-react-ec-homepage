import { Product } from "../models/Product";
import { CardItem } from "./CardItem";

interface ICartList {
  products: Product[];
}
export const CardList: React.FC<ICartList> = ({ products }) => {
  return (
    <ul className="list-products row" id="list-pets">
      {products.map((item) => (
        <CardItem product={item} />
      ))}
    </ul>
  );
};
