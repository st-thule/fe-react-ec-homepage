import { useEffect, useState } from "react";
import { Product } from "../../../shared/models/Product";
import { CardList } from "../../../shared/components/CardList";
import Button from "../../../shared/components/Button";
import data from "../../../../../public/data/product.json";

export const ProductSection = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch("/data/product.json")
      .then((res) => res.json())
      .then((data: Product[]) => setProducts(data))
      .catch(console.error);
  }, []);

  return (
    <section className="section section-products section-pets">
      <div className="container">
        <div className="section-header">
          <div className="section-text">
            <p className="section-subtitle">Whats new?</p>
            <h2 className="section-title">Take A Look At Some Of Our Pets</h2>
          </div>
          <div className="section-action">
            <Button className="btn-secondary" label="View more" />
          </div>
        </div>
        <div className="section-body">
          <CardList products={products} />
        </div>
      </div>
    </section>
  );
};
