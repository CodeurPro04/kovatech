const IntroHomeFour = ({ style_2 }: any) => {
  return (
    <>
      <section className={`intro-section ${style_2 ? "about-intro" : ""}`}>
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-12 intro-block">
              <div className="intro-block-one">
                <div className="decore"></div>
                <h3>500+ projets digitaux livrés avec succès</h3>
                <p>
                  De la conception de sites web à des applications mobiles
                  innovantes, nous avons accompagné des entreprises en Côte
                  d’Ivoire et à l’international vers la réussite numérique.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 intro-block">
              <div className="intro-block-one">
                <div className="decore"></div>
                <h3>
                  684+ clients satisfaits <br />
                  et en pleine croissance
                </h3>
                <p>
                  Chaque projet est pensé sur mesure pour offrir performance,
                  design et impact durable. Notre fierté : voir nos clients
                  grandir avec nous.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 intro-block">
              <div className="intro-block-one">
                <div className="decore"></div>
                <h3>
                  Présence dans plus de <br />
                  3+ pays
                </h3>
                <p>
                  Basés en Côte d’Ivoire, nous faisons rayonner le savoir-faire
                  digital africain au-delà des frontières, en collaborant avec
                  des partenaires dans toute l’Afrique et à l’international.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default IntroHomeFour;
