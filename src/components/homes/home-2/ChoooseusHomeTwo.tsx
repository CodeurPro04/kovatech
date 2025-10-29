import { Link } from "react-router-dom";

const ChoooseusHomeTwo = ({ style_2 }: any) => {
  return (
    <section className={`chooseus-section ${style_2 ? 'about-chooseus' : ''}`}>
      {!style_2 && (
        <div className="pattern" style={{ backgroundImage: `url(/assets/images/shape/shape-48.png)` }}></div>
      )}

      <div className="container">
        <div className="title-box d-flex flex-end space-between">
          <div className="main-title">
            <h3>Pourquoi nous choisir</h3>
            <h2>
              L’agence digitale <br />
              <span className="gradient-color">créative & innovante</span> pour votre marque
            </h2>
          </div>
          <div className="title-text">
            <p>
              Nous transformons vos idées en expériences digitales performantes. De la stratégie au design, 
              nous assurons la cohérence de votre identité et l’impact de vos projets.
            </p>
          </div>
        </div>

        <div className="row align-items-center">
          <div className="col-lg-6 col-md-12 col-sm-12 block-column">
            <div className="chooseus-image">
              <figure className="image">
                <img src="assets/images/digi2.jpg" alt="Agence digitale" />
              </figure>
            </div>
          </div>

          <div className="col-lg-6 col-md-12 col-sm-12 block-column">
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-12 block-column">
                <div className="chooseus-block-one">
                  <div className="icon-box"><i className="icon-57"></i></div>
                  <h3>Développement sur mesure</h3>
                  <p>Nous créons des solutions digitales uniques, adaptées à vos besoins et à votre vision de marque.</p>
                </div>
              </div>

              <div className="col-lg-6 col-md-6 col-sm-12 block-column">
                <div className="chooseus-block-one">
                  <div className="icon-box"><i className="icon-57"></i></div>
                  <h3>Analyse & stratégie</h3>
                  <p>Nous analysons votre marché et définissons des stratégies digitales efficaces pour maximiser votre impact.</p>
                </div>
              </div>

              <div className="col-lg-6 col-md-6 col-sm-12 block-column">
                <div className="chooseus-block-one">
                  <div className="icon-box"><i className="icon-57"></i></div>
                  <h3>Design & branding</h3>
                  <p>Nous concevons des identités visuelles fortes et cohérentes pour renforcer la notoriété de votre marque.</p>
                </div>
              </div>

              <div className="col-lg-6 col-md-6 col-sm-12 block-column">
                <div className="chooseus-block-one">
                  <div className="icon-box"><i className="icon-57"></i></div>
                  <h3>Accompagnement complet</h3>
                  <p>Nous vous accompagnons à chaque étape, de la création à la mise en ligne, pour garantir la réussite de vos projets.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChoooseusHomeTwo;
