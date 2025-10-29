const ProcessHomeFour = () => {
  return (
    <>
      <section className="process-section text-center">
        <div
          className="pattern"
          style={{ backgroundImage: `url(/assets/images/shape/shape-9.png)` }}
        ></div>
        <div
          className="pattern-2"
          style={{ backgroundImage: `url(/assets/images/shape/shape-10.png)` }}
        ></div>
        <div className="container">
          <div className="main-title">
            <h3>Notre Processus</h3>
            <h2>
              Un savoir-faire digital qui transforme vos idées en{" "}
              <span className="gradient-color">solutions concrètes</span> et{" "}
              <span className="gradient-color">impactantes</span>
            </h2>
            <p>
              Basés en Côte d’Ivoire, nous combinons créativité, technologie et
              stratégie pour concevoir des applications web, mobiles et
              solutions logicielles adaptées aux besoins de chaque entreprise.
            </p>
          </div>
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-12 block-column">
              <div className="process-block-one">
                <div
                  className="shape"
                  style={{ backgroundImage: `url(/assets/images/shape/shape-8.png)` }}
                ></div>
                <div className="icon-box"><i className="icon-7"></i></div>
                <h3>Analyse & Conseil</h3>
                <p>
                  Nous étudions vos besoins pour bâtir une stratégie claire et
                  efficace dès le départ.
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 block-column">
              <div className="process-block-one">
                <div
                  className="shape"
                  style={{ backgroundImage: `url(/assets/images/shape/shape-8.png)` }}
                ></div>
                <div className="icon-box"><i className="icon-8"></i></div>
                <h3>Design & Expérience</h3>
                <p>
                  Des interfaces modernes, intuitives et centrées sur
                  l’utilisateur pour capter et fidéliser.
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 block-column">
              <div className="process-block-one">
                <div
                  className="shape"
                  style={{ backgroundImage: `url(/assets/images/shape/shape-8.png)` }}
                ></div>
                <div className="icon-box"><i className="icon-9"></i></div>
                <h3>Développement sur mesure</h3>
                <p>
                  Applications web, mobiles et logiciels robustes, conçus pour
                  durer et évoluer avec vous.
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 block-column">
              <div className="process-block-one">
                <div
                  className="shape"
                  style={{ backgroundImage: `url(/assets/images/shape/shape-8.png)` }}
                ></div>
                <div className="icon-box"><i className="icon-10"></i></div>
                <h3>Accompagnement & Croissance</h3>
                <p>
                  Un suivi continu pour optimiser vos solutions et booster votre
                  visibilité digitale.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProcessHomeFour;
