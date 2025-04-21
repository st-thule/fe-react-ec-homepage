import Button from "../../../shared/components/Button";
import arrow from "../../../../assets/icons/arrow.svg";
export const Knowledge = () => {
  return (
    <section className="section section-products section-knowledge">
      <div className="container">
        <div className="wrapper">
          <div className="section-header">
            <div className="section-text">
              <p className="section-subtitle">You already know ?</p>
              <h2 className="section-title">Useful pet knowledge</h2>
            </div>
            <div className="section-action">
              <Button
                className="btn-secondary btn-flex btn-sm btn-font-small"
                label="View more"
                icon={arrow}
              />
            </div>
          </div>
          <div className="section-body">
            <ul className="list-products row">
              <li className="list-item col-12 col-sm-12 col-md-4">
                <a className="card" href="#">
                  <div className="card-img">
                    <img
                      src="assets/images/dogrun.png"
                      alt="Identify Pomeranian"
                    />
                  </div>
                  <div className="card-content">
                    <div className="card-tag">
                      <p>Pet knowledge</p>
                    </div>
                    <h3 className="card-title">
                      What is a Pomeranian? How to Identify Pomeranian Dogs
                    </h3>
                    <p className="card-desc">
                      The Pomeranian, also known as the Pomeranian (Pom dog), is
                      always in the top of the cutest pets. Not only that, the
                      small, lovely, smart, friendly, and skillful circus dog
                      breed.
                    </p>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
