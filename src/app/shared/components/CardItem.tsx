import React from 'react';
import { Pet } from '../models/Pets';
import { Product } from '../models/Product';
import Button from './Button';
import { CardType } from '../constants/Nav/nav';

interface CardProps {
  data: Pet | Product;
  cardType: CardType;
}

export const CardItem: React.FC<CardProps> = ({ data, cardType }) => {
  return (
    <li className="list-item col-6 col-sm-6 col-md-3" key={data.id}>
      <a className="card" href="#">
        <div className="card-img">
          <img src={data.image} alt={data.id.toString()} />
        </div>

        <div className="card-content">
          {cardType === 'pets' ? (
            <>
              <h3 className="card-title">
                {data.id} - {(data as Pet).id}
              </h3>
              <p className="card-detail detail">
                <span className="detail-group">
                  <span className="detail-label">Gene:</span>
                  <span className="detail-value">{(data as Pet).gender}</span>
                </span>
                <img className="detail-dot" src="assets/icons/dot.svg" />
                <span className="detail-group">
                  <span className="detail-label">Age:</span>
                  <span className="detail-value">
                    {(data as Pet).gender} months
                  </span>
                </span>
              </p>
              <span className="card-price">{data.price} VND</span>
              <Button className="btn-add-cart" label="Add to cart" />
            </>
          ) : (
            <>
              <h3 className="card-title">{(data as Product).name}</h3>
              <p className="card-detail detail">
                <span className="detail-label">Product:</span>
                <span className="detail-value">{(data as Product).type}</span>
                <img className="detail-dot" src="/assets/icons/dot.svg" />
                <span className="detail-label">Size:</span>
                <span className="detail-value">{(data as Product).size}</span>
              </p>
              <span className="card-price">{data.price} VND</span>
              <div className="card-action">
                <img
                  className="card-icon"
                  src="./assets/icons/gift.svg"
                  alt="Gift"
                />
                <img className="card-dot" src="/assets/icons/dot.svg" />
                <span className="card-gift">Free Toy & Free Shaker</span>
              </div>
            </>
          )}
        </div>
      </a>
    </li>
  );
};
