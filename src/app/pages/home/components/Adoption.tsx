import React from 'react';

import Button from '@shared/components/partials/Button';

import iconBtn from '@assets/icons/icon-btn.svg';

export const Adoption = () => {
  return (
    <section className="section section-banner section-adoption pc-only">
      <div className="container">
        <div className="wrapper">
          <div className="section-content">
            <div className="section-text">
              <h2 className="section-title">
                Adoption
                <img
                  src="assets/images/adoption/fontisto_paw.png"
                  alt="Fontisto Paw"
                />
                <span className="section-subtitle">
                  We need help. so do they.
                </span>
              </h2>
              <p className="section-desc">
                Adopt a pet and give it a home, it will be love you back
                unconditionally.
              </p>
            </div>
            <div className="section-action">
              <Button
                className="btn-secondary btn-flex"
                label="View Intro"
                iconSuffix={iconBtn}
              />
              <Button className="btn-primary btn-2xl" label="Explore Now" />
            </div>
          </div>
          <div className="section-image">
            <img src="assets/images/adoption/adoption.png" alt="Adoption" />
          </div>
        </div>
      </div>
    </section>
  );
};
