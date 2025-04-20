import dropdown from "@assets/icons/dropdown.svg";
import searchResponsive from "@assets/icons/search-responsive.svg";
import toogle from "@assets/icons/toogle.svg";
import flag from "@assets/images/flag.png";
import logo from "@assets/images/logo.png";

import Button from "@shared/components/partials/Button";
import { Input } from "@shared/components/partials/Input";
import { NavBar } from "@shared/components/partials/NavBar";

import React from "react";

export const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header-mobile">
          <img className="toggle-menu" src={toogle} alt="Menu" />
          <h2 className="logo">
            <a href="#">
              <img
                className="logo-image"
                src={logo}
                alt="One more friend Thousands more fun!"
              />
            </a>
          </h2>
          <img className="search-toggle" src={searchResponsive} alt="Search" />
        </div>
        <div className="wrapper">
          <div className="header-navigation">
            <h2 className="logo">
              <a href="#">
                <img
                  className="logo-image"
                  src={logo}
                  alt="One more friend Thousands more fun!"
                />
              </a>
            </h2>
            <NavBar />
          </div>
          <div className="header-utility">
            <form className="form-search">
              <Input
                className="utitlity-search"
                type="search"
                placeholder="Search something here!"
              />
            </form>
            <Button
              label="Join the community"
              className="btn-primary btn-bold btn-xl"
            />
            <div className="utitlity-currency">
              <img className="currency-flag" src={flag} />
              <span className="currency-text">VND</span>
              <img
                className="currency-dropdown"
                src={dropdown}
                alt="dropdown"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
