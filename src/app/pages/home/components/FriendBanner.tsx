import React from "react";

import Button from "@shared/components/partials/Button";

import arrow from "@assets/icons/arrow.svg";

export const FriendBanner = () => {
  return (
    <section className="section section-banner section-friend">
      <div className="container">
        <div className="wrapper">
          <div className="section-content">
            <div className="section-text">
              <h2 className="section-title">
                One More Friend<span>Thousands More Fun!</span>
              </h2>
              <p className="section-desc">
                Having a pet means you have more joy, a new friend, a happy
                person who will always be with you to have fun. We have 200+
                different pets that can meet your needs!
              </p>
            </div>
            <div className="section-action">
              <Button
                className="btn-secondary btn-flex"
                label="View Intro"
                icon={arrow}
              />
              <Button className="btn-primary btn-2xl" label="Explore Now" />
            </div>
          </div>
          <div className="section-image pc-only">
            <img src="assets/images/friend-banner.png" alt="Girl and dog" />
          </div>
          <div className="section-image sp-only">
            <img src="assets/images/sp-friend-banner.png" alt="Girl and dog" />
          </div>
        </div>
      </div>
    </section>
  );
};
