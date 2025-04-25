import React from 'react';

import Button from '@shared/components/partials/Button';

import arrow from '@assets/icons/arrow.svg';
import { sellerItem } from '@shared/constants/data';

export const Sellers = () => {
  return (
    <section className="section section-sellers pc-only">
      <div className="container">
        <div className="wrapper">
          <div className="section-header">
            <div className="section-text">
              <h2 className="section-title">
                Proud to be part of
                <span className="section-subtitle">Pet sellers</span>
              </h2>
            </div>
            <div className="section-action">
              <Button
                className="btn-secondary btn-flex btn-sm btn-font-small"
                label="View all our sellers"
                iconSuffix={arrow}
              />
            </div>
          </div>
          <div className="section-body">
            <ul className="list-products">
              {sellerItem.map((item) => (
                <li className="list-item" key={item.id}>
                  <img src={item.image} alt={item.alt} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
