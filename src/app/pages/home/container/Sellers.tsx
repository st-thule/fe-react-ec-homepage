import Button from "../../../shared/components/Button";
import arrow from "../../../../assets/icons/arrow.svg";
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
                icon={arrow}
              />
            </div>
          </div>
          <div className="section-body">
            <ul className="list-products">
              <li className="list-item">
                <img src="assets/images/sellers/sheba.png" alt="Sheba" />
              </li>
              <li className="list-item">
                <img src="assets/images/sellers/whiskas.png" alt="Whiskas" />
              </li>
              <li className="list-item">
                <img src="assets/images/sellers/bakers.png" alt="Bakers" />
              </li>
              <li className="list-item">
                <img src="assets/images/sellers/felix.png" alt="Felix" />
              </li>
              <li className="list-item">
                <img src="assets/images/sellers/goodboy.png" alt="Good Boy" />
              </li>
              <li className="list-item">
                <img src="assets/images/sellers/butchers.png" alt="Butcher's" />
              </li>
              <li className="list-item">
                <img src="assets/images/sellers/pedigree.png" alt="Pedigree" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
