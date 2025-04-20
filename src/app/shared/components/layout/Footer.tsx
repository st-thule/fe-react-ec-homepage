import Button from "../Button";
import { Input } from "../Input";
import { NavBar } from "../NavBar";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="wrapper">
          <div className="footer-register row">
            <div className="register-title col-12 col-sm-12 col-md-4">
              <p>Register now so you don't miss our programs</p>
            </div>
            <form className="register-form col-12 col-sm-12 col-md-8">
              <Input type="email" placeholder="Enter your email" />
              <Button
                className="btn-primary btn-border btn-xl"
                label="Subcribe Now"
              />
              {/* <button className="btn btn-primary btn-border btn-xl">
                Subcribe Now
              </button> */}
            </form>
          </div>
          <div className="footer-link">
            <NavBar />
            <div className="footer-social">
              <ul className="list-social">
                <li className="list-item">
                  <a className="item-link" href="#">
                    <img
                      className="item-img"
                      src="assets/images/footer/facebook.png"
                      alt="Facebook"
                    />
                  </a>
                </li>
                <li className="list-item">
                  <a className="item-link" href="#">
                    <img
                      className="item-img"
                      src="assets/images/footer/twitter.png"
                      alt="Twitter"
                    />
                  </a>
                </li>
                <li className="list-item">
                  <a className="item-link" href="#">
                    <img
                      className="item-img"
                      src="assets/images/footer/instagram.png"
                      alt="Instagram"
                    />
                  </a>
                </li>
                <li className="list-item">
                  <a className="item-link" href="#">
                    <img
                      className="item-img"
                      src="assets/images/footer/youtube.png"
                      alt="Youtube"
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-info">
            <div className="footer-copyright">
              <p>© 2022 Monito. All rights reserved.</p>
            </div>
            <div className="footer-logo">
              <h2 className="logo">
                <img className="logo-img" src="assets/images/logo.png" />
              </h2>
            </div>
            <div className="footer-legal">
              <ul className="list-legal">
                <li className="list-item">
                  <a className="item-link" href="#">
                    Terms of Service
                  </a>
                </li>
                <li className="list-item">
                  <a className="item-link" href="#">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
