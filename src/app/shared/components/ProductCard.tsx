import React from "react";
import { Product } from "../models/Product";
import Button from "./Button";

interface CardProps {
  product: Product;
}

export const CardItem: React.FC<CardProps> = ({ product }) => {
  return (
    <li className="list-item col-6 col-sm-6 col-md-3" key={product.id}>
      <a className="card" href="#">
        <div className="card-img">
          <img src={product.image} alt={product.breed} />
        </div>
        <div className="card-content">
          <h3 className="card-title">
            {product.id} - {product.breed}
          </h3>
          <p className="card-detail detail">
            <span className="detail-group">
              <span className="detail-label">Gene:</span>
              <span className="detail-value">{product.gender}</span>
            </span>
            <img className="detail-dot" src="assets/icons/dot.svg" />
            <span className="detail-group">
              <span className="detail-label">Age:</span>
              <span className="detail-value">{product.age} months</span>
            </span>
          </p>
          <span className="card-price">{product.price} VND</span>
        </div>
        <Button className="btn-add-cart" label="Add to cart" />
      </a>
    </li>
  );
};
