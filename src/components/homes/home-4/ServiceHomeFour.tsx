//import { Link } from "react-router-dom";

const PortfolioHomeFour = () => {
  return (
    <>
      <section className="portfolio-section">
        <div className="container">
          <div className="title-box">
            <div className="main-title">
              <h3>Portfolio de Marque</h3>
              <h2>
                Voici nos derniers <br />
                <span className="gradient-color">projets</span>
              </h2>
            </div>
            <p>
              Découvrez quelques-unes de nos réalisations marquantes dans le
              développement de solutions digitales, allant des plateformes
              e-commerce aux applications mobiles innovantes.
            </p>
          </div>

          <div className="row">
            {/* Projet 1 */}
            <div className="col-lg-5 col-md-12 col-sm-12 block-column">
              <div className="portfolio-block-one">
                <div className="text-box">
                  <h3>Deeshop - E-commerce</h3>
                  {/* voir details link 
                  <div className="link">
                    <Link to="/portfolio-details">
                      <span>Voir les détails</span>
                      <i className="icon-1"></i>
                    </Link>
                  </div> */}
                </div>
                <div className="image-box">
                  <figure className="image">
                    <img
                      src="assets/images/portfolio/deedee1.png"
                      alt="Deeshop projet"
                    />
                  </figure>
                </div>
              </div>
            </div>

            {/* Projet 2 */}
            <div className="col-lg-7 col-md-12 col-sm-12 block-column">
              <div className="portfolio-block-one">
                <div className="text-box">
                  <h3>KOF GO Consulting - Entreprise de consulting</h3>
                  {/* voir details link
                  <div className="link">
                    <Link to="/portfolio-details">
                      <span>Voir les détails</span>
                      <i className="icon-1"></i>
                    </Link>
                  </div>  */}
                </div>
                <div className="image-box">
                  <figure className="image">
                    <img
                      src="assets/images/portfolio/kofgo.png"
                      alt="KOF GO Consulting projet"
                    />
                  </figure>
                </div>
              </div>
            </div>

            {/* Projet 3 */}
            <div className="col-lg-7 col-md-12 col-sm-12 block-column">
              <div className="portfolio-block-one">
                <div className="text-box">
                  <h3>Saint Barth Location - Plateforme de gestion</h3>
                  {/* voir details link
                  <div className="link">
                    <Link to="/portfolio-details">
                      <span>Voir les détails</span>
                      <i className="icon-1"></i>
                    </Link>
                  </div>  */}
                </div>
                <div className="image-box">
                  <figure className="image">
                    <img
                      src="assets/images/portfolio/scooterloczer1.png"
                      alt="Saint Barth Location projet"
                    />
                  </figure>
                </div>
              </div>
            </div>

            {/* Projet 4 */}
            <div className="col-lg-5 col-md-12 col-sm-12 block-column">
              <div className="portfolio-block-one">
                <div className="text-box">
                  <h3>Plateforme E-learning interactive</h3>
                  {/* voir details link 
                  <div className="link">
                    <Link to="/portfolio-details">
                      <span>Voir les détails</span>
                      <i className="icon-1"></i>
                    </Link>
                  </div> */}
                </div>
                <div className="image-box">
                  <figure className="image">
                    <img
                      src="assets/images/portfolio/elearning1.png"
                      alt="Plateforme E-learning"
                    />
                  </figure>
                </div>
              </div>
            </div>

            {/* Projet 5 */}
            <div className="col-lg-5 col-md-12 col-sm-12 block-column">
              <div className="portfolio-block-one">
                <div className="text-box">
                  <h3>Application mobile Santé+</h3>
                  {/* voir details link 
                  <div className="link">
                    <Link to="/portfolio-details">
                      <span>Voir les détails</span>
                      <i className="icon-1"></i>
                    </Link>
                  </div> */}
                </div>
                <div className="image-box">
                  <figure className="image">
                    <img
                      src="assets/images/portfolio/mobile+.png"
                      alt="Application mobile Santé+"
                    />
                  </figure>
                </div>
              </div>
            </div>

            {/* Projet 6 */}
            <div className="col-lg-7 col-md-12 col-sm-12 block-column">
              <div className="portfolio-block-one">
                <div className="text-box">
                  <h3>ERP de Gestion d’entreprise</h3>
                  {/* voir details link 
                  <div className="link">
                    <Link to="/portfolio-details">
                      <span>Voir les détails</span>
                      <i className="icon-1"></i>
                    </Link> 
                  </div> */}
                </div>
                <div className="image-box">
                  <figure className="image">
                    <img
                      src="assets/images/portfolio/erp.png"
                      alt="ERP de Gestion d’entreprise"
                    />
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PortfolioHomeFour;
