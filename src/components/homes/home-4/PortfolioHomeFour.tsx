import { Link } from "react-router-dom";

const PortfolioHomeFour = () => {
  return (
    <>
      <section className="portfolio-section">
        <div className="container">
          <div className="title-box">
            <div className="main-title">
              <h3>Portfolio de Marque</h3>
              <h2>Voici nos derniers <br /><span className="gradient-color">projets</span></h2>
            </div>
            <p>Similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio possimus.</p>
          </div>
          <div className="row">
            <div className="col-lg-5 col-md-12 col-sm-12 block-column">
              <div className="portfolio-block-one">
                <div className="text-box">
                  <h3><Link to="/portfolio-details">Stratégie d'entreprise D-Form</Link></h3>
                  <div className="link"><Link to="/portfolio-details"><span>Voir les détails</span><i className="icon-1"></i></Link></div>
                </div>
                <div className="image-box">
                  <figure className="image"><img src="assets/images/portfolio/portfolio-1.jpg" alt="" /></figure>
                </div>
              </div>
            </div>
            <div className="col-lg-7 col-md-12 col-sm-12 block-column">
              <div className="portfolio-block-one">
                <div className="text-box">
                  <h3><Link to="/portfolio-details">Stratégie marketing Mark Wide</Link></h3>
                  <div className="link"><Link to="/portfolio-details"><span>Voir les détails</span><i className="icon-1"></i></Link></div>
                </div>
                <div className="image-box">
                  <figure className="image"><img src="assets/images/portfolio/portfolio-2.jpg" alt="" /></figure>
                </div>
              </div>
            </div>
            <div className="col-lg-7 col-md-12 col-sm-12 block-column">
              <div className="portfolio-block-one">
                <div className="text-box">
                  <h3><Link to="/portfolio-details">Décoration moquette dure</Link></h3>
                  <div className="link"><Link to="/portfolio-details"><span>Voir les détails</span><i className="icon-1"></i></Link></div>
                </div>
                <div className="image-box">
                  <figure className="image"><img src="assets/images/portfolio/portfolio-3.jpg" alt="" /></figure>
                </div>
              </div>
            </div>
            <div className="col-lg-5 col-md-12 col-sm-12 block-column">
              <div className="portfolio-block-one">
                <div className="text-box">
                  <h3><Link to="/portfolio-details">Beauté visage White-line</Link></h3>
                  <div className="link"><Link to="/portfolio-details"><span>Voir les détails</span><i className="icon-1"></i></Link></div>
                </div>
                <div className="image-box">
                  <figure className="image"><img src="assets/images/portfolio/portfolio-4.jpg" alt="" /></figure>
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