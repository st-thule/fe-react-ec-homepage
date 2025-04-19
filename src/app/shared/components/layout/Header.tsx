export const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header-mobile">
          <img
            className="toggle-menu"
            src="assets/icons/toogle.svg"
            alt="Menu"
          />
          <h2 className="logo">
            <a href="#">
              <img
                className="logo-image"
                src="assets/images/logo.png"
                alt="One more friend Thousands more fun!"
              />
            </a>
          </h2>
          <img
            className="search-toggle"
            src="assets/icons/search-responsive.svg"
            alt="Search"
          />
        </div>
        <div className="wrapper">
          <div className="header-navigation">
            <h2 className="logo">
              <a href="#">
                <img
                  className="logo-image"
                  src="assets/images/logo.png"
                  alt="One more friend Thousands more fun!"
                />
              </a>
            </h2>
            <nav className="nav">
              <ul className="list-menu">
                <li className="list-item menu-item">
                  <a className="item-link" href="#">
                    Home
                  </a>
                </li>
                <li className="list-item menu-item">
                  <a className="item-link" href="#">
                    Category
                  </a>
                </li>
                <li className="list-item menu-item">
                  <a className="item-link" href="#">
                    About
                  </a>
                </li>
                <li className="list-item menu-item">
                  <a className="item-link" href="#">
                    Contact
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="header-utility">
            <form className="form-search">
              <input
                className="utility-search"
                type="search"
                placeholder="Search something here!"
              />
            </form>
            <a className="btn btn-primary btn-bold btn-xl">
              Join the community
            </a>
            <div className="utitlity-currency">
              <img className="currency-flag" src="assets/images/flag.png" />
              <span className="currency-text">VND</span>
              <img
                className="currency-dropdown"
                src="assets/icons/dropdown.svg"
                alt="dropdown"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
