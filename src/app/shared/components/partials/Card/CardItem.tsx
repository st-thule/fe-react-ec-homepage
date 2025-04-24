import React from 'react';

import Button from '@shared/components/partials/Button';
import { Product } from '@shared/models/Product';
import { Pet } from '@shared/models/Pet';
import { CardTypeKey } from '@shared/utils/storage';
import { Blog } from '@shared/models/Blog';

interface CardProps {
  data: Pet | Product | Blog;
  cardType: CardTypeKey;
  className: string;
}

export const CardItem: React.FC<CardProps> = ({
  data,
  cardType,
  className,
}) => {
  return (
    <li className={`list-item ${className}`} key={data.id}>
      <a className="card" href="#">
        <div className="card-img">
          <img src={data.image} alt={data.id.toString()} />
        </div>

        <div className="card-content">
          <h3 className="card-title">
            {cardType === 'pets'
              ? `${data.id} - ${(data as Pet).breed}`
              : (data as Product).name}
          </h3>

          <p className="card-detail detail">
            {cardType === 'pets' && (
              <>
                <span className="detail-group">
                  <span className="detail-label">Gene:</span>
                  <span className="detail-value">{(data as Pet).gender}</span>
                </span>
                <img className="detail-dot" src="assets/icons/dot.svg" />
                <span className="detail-group">
                  <span className="detail-label">Age:</span>
                  <span className="detail-value">
                    {(data as Pet).age} months
                  </span>
                </span>
              </>
            )}

            {cardType === 'products' && (
              <>
                <span className="detail-group">
                  <span className="detail-label">Product:</span>
                  <span className="detail-value">{(data as Product).type}</span>
                </span>
                <img className="detail-dot" src="assets/icons/dot.svg" />
                <span className="detail-group">
                  <span className="detail-label">Size:</span>
                  <span className="detail-value">{(data as Product).size}</span>
                </span>
              </>
            )}
          </p>

          {/* Price and Button for pets */}
          {cardType === 'pets' && (
            <>
              <span className="card-price">{(data as Pet).price} VND</span>
              <Button className="btn-add-cart" label="Add to cart" />
            </>
          )}

          {/* Price and special offer for products */}
          {cardType === 'products' && (
            <>
              <span className="card-price">{(data as Product).price} VND</span>
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

          {/* Blog details */}
          {cardType === 'blogs' && (
            <>
              <div className="card-tag">
                <p>{(data as Blog).category}</p>
              </div>
              <h3 className="card-title">{(data as Blog).title}</h3>
              <p className="card-desc">{(data as Blog).description}</p>
            </>
          )}
        </div>
      </a>
    </li>
  );
};
