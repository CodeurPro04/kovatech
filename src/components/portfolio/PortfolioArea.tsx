//import { Link } from "react-router-dom";

const PortfolioArea = () => {
  return (
    <section className="portfolio-section">
      <div className="container">
        <div className="row">
          {/* DeeShop */}
          <div className="col-lg-5 col-md-12 col-sm-12 block-column">
            <div className="portfolio-block-one">
              <div className="text-box">
                <h3>Deeshop - E-commerce</h3>
                {/* voir details link 
                <div className="link">
                  <Link to="/portfolio-details/deeshop">
                    <span>Voir les détails</span>
                    <i className="icon-1"></i>
                  </Link>
                </div> */}
              </div>
              <div className="image-box">
                <figure className="image">
                  <img
                    src="assets/images/portfolio/deedee1.png"
                    alt="DeeShop - Site e-commerce"
                  />
                </figure>
              </div>
            </div>
          </div>

          {/* Kof Go Consulting */}
          <div className="col-lg-7 col-md-12 col-sm-12 block-column">
            <div className="portfolio-block-one">
              <div className="text-box">
                <h3>KOF GO Consulting - Entreprise de consulting</h3>
                {/* voir details link 
                <div className="link">
                  <Link to="/portfolio-details/kof-go-consulting">
                    <span>Voir les détails</span>
                    <i className="icon-1"></i>
                  </Link>
                </div> */}
              </div>
              <div className="image-box">
                <figure className="image">
                  <img
                    src="assets/images/portfolio/kofgo.png"
                    alt="Kof Go Consulting - Solution digitale"
                  />
                </figure>
              </div>
            </div>
          </div>

          {/* Saint Barth Location */}
          <div className="col-lg-7 col-md-12 col-sm-12 block-column">
            <div className="portfolio-block-one">
              <div className="text-box">
                <h3>Saint Barth Location - Plateforme de gestion</h3>
                {/* voir details link
                <div className="link">
                  <Link to="/portfolio-details/saint-barth-location">
                    <span>Voir les détails</span>
                    <i className="icon-1"></i>
                  </Link>
                </div> */}
              </div>
              <div className="image-box">
                <figure className="image">
                  <img
                    src="assets/images/portfolio/scooterloczer1.png"
                    alt="Saint Barth Location - App mobile"
                  />
                </figure>
              </div>
            </div>
          </div>

          {/* Autres projets crédibles */}
          <div className="col-lg-5 col-md-12 col-sm-12 block-column">
            <div className="portfolio-block-one">
              <div className="text-box">
                <h3>Plateforme IA - Startup InnovTech</h3>
                {/* voir details link
                <div className="link">
                  <Link to="/portfolio-details/startup-ai">
                    <span>Voir les détails</span>
                    <i className="icon-1"></i>
                  </Link>
                </div>  */}
              </div>
              <div className="image-box">
                <figure className="image">
                  <img
                    src="assets/images/portfolio/innovatech.png"
                    alt="Startup InnovTech - Plateforme IA"
                  />
                </figure>
              </div>
            </div>
          </div>

          <div className="col-lg-5 col-md-12 col-sm-12 block-column">
            <div className="portfolio-block-one">
              <div className="text-box">
                <h3>EduConnect - Solution e-learning</h3>
                {/* voir details link
                <div className="link">
                  <Link to="/portfolio-details/educonnect">
                    <span>Voir les détails</span>
                    <i className="icon-1"></i>
                  </Link>
                </div> */}
              </div>
              <div className="image-box">
                <figure className="image">
                  <img
                    src="assets/images/portfolio/educonnect.png"
                    alt="EduConnect - Plateforme e-learning"
                  />
                </figure>
              </div>
            </div>
          </div>

          <div className="col-lg-7 col-md-12 col-sm-12 block-column">
            <div className="portfolio-block-one">
              <div className="text-box">
                <h3>AfrImmobi - Agence immobilière</h3>
                {/* voir details link
                <div className="link">
                  <Link to="/portfolio-details/africommerce">
                    <span>Voir les détails</span>
                    <i className="icon-1"></i>
                  </Link>
                </div> */}
              </div>
              <div className="image-box">
                <figure className="image">
                  <img
                    src="assets/images/portfolio/afrimmobi.png"
                    alt="AfriCommerce - Marketplace"
                  />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioArea;
