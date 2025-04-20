import dropdown from "@assets/icons/dropdown.svg";
import flag from "@assets/images/flag.png";
import logo from "@assets/images/logo.png";
import { NavBar } from "../NavBar";
import { Input } from "../Input";

export const Header = () => {
  return (
    <header className="header">
      <div className="container">
        {/* <div className="header-mobile">
          <img
            className="toggle-menu"
            src="assets/icons/toogle.svg"
            alt="Menu"
          />
          <h2 className="logo">
            <a href="#">
              <img
                className="logo-image"
                src={logo}
                alt="One more friend Thousands more fun!"
              />
            </a>
          </h2>
          <img
            className="search-toggle"
            src="assets/icons/search-responsive.svg"
            alt="Search"
          />
        </div> */}
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
            <a className="btn btn-primary btn-bold btn-xl">
              Join the community
            </a>
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
