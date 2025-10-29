import Count from "../../../common/Count";

const counter_data = [
  {
    symbol: "+",
    count: 5,
    title: `Années<br />d'expérience`,
  },
  {
    symbol: "+",
    count: 500,
    title: `Projets <br />livrés avec succès`,
  },
  {
    symbol: "+",
    count: 600,
    title: `Clients <br />satisfaits à travers le monde`,
  },
];

const BrandsHomeTwo = ({ style_2 }: any) => {
  return (
    <section className={`brands-section ${style_2 ? "about-brands" : ""}`}>
      <div
        className="pattern"
        style={{
          backgroundImage: `url(/assets/images/shape/shape-${
            style_2 ? "57" : "46"
          }.png)`,
        }}
      ></div>

      <div className="container">
        <div className="main-title text-center">
          <h2>
            Nous donnons vie aux idées <br />
            <span className="gradient-color">
              avec innovation & excellence digitale
            </span>
          </h2>
        </div>

        <div className="brands-content">
          <div className="text-box">
            <p>
              Notre agence est spécialisée dans la création de{" "}
              <strong>sites web performants</strong>,{" "}
              <strong>applications mobiles modernes</strong>,{" "}
              <strong>logiciels sur mesure</strong> et{" "}
              <strong>solutions digitales complètes</strong>. 
            </p>
            <p>
              Depuis plus de 5 ans, nous aidons les entreprises à{" "}
              <em>développer leur présence digitale</em>, à renforcer leur{" "}
              <em>identité de marque</em> et à atteindre leurs objectifs avec
              des solutions innovantes et durables.
            </p>
            <div className="btn-box">
              <a
                href="/about"
                className="primary-btn one gradient-bg white-color border-btn"
              >
                En savoir plus sur nous
              </a>
            </div>
          </div>

          <div className="fact-content">
            {counter_data.map((item, i) => (
              <div key={i} className="single-item">
                <div className="count-outer count-box">
                  <span className="odometer" data-count={item.count}>
                    <Count number={item.count} text={item.symbol} />
                  </span>
                </div>
                <h5 dangerouslySetInnerHTML={{ __html: item.title }}></h5>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandsHomeTwo;
