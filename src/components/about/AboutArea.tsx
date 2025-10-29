import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";
import CircleType from "circletype";

const AboutArea = () => {
  const curvedTextRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (curvedTextRef.current) {
      new CircleType(curvedTextRef.current)
        .dir(1)
        .radius(70)
        .forceHeight(true)
        .forceWidth(true);
    }
  }, []);
  return (
    <>
      <section className="about-section-four">
        <div className="about-image-four">
          <figure className="image">
            <img
              src="assets/images/resource/about-1.png"
              alt="Agence digitale"
            />
          </figure>
          <div
            className="shape"
            style={{
              backgroundImage: `url(/assets/images/shape/shape-56.png)`,
            }}
          ></div>
          <div className="rotate-text-box">
            <div
              className="shape-1"
              style={{
                backgroundImage: `url(/assets/images/shape/shape-4.png)`,
              }}
            ></div>
            <div
              className="shape-2"
              style={{
                backgroundImage: `url(/assets/images/shape/shape-5.png)`,
              }}
            ></div>
            <h2>5</h2>
            {/* 
            <span ref={curvedTextRef} className="curved-text">
              Années d'expérience
            </span> */}
          </div>
        </div>

        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-10 col-md-12 col-sm-12 content-column">
              <div className="about-content">
                <div className="main-title">
                  <h3>À propos de nous - Agence digitale</h3>
                  <h2>
                    Nous transformons vos idées en solutions digitales <br />
                    <span className="gradient-color color-two">
                      innovantes et performantes pour votre entreprise
                    </span>
                  </h2>
                </div>
                <div className="about-text">
                  <p>
                    Basée en Côte d’Ivoire, notre agence excelle dans la
                    création de sites web, applications mobiles, logiciels sur
                    mesure et solutions digitales complètes. Nous accompagnons
                    votre marque à chaque étape, du concept à la mise en ligne,
                    en alliant créativité et performance technique.
                  </p>
                  <p>
                    Avec plus de 5 ans d’expérience, nous avons accompagné des
                    centaines de clients à travers le monde pour développer leur
                    présence digitale et optimiser leur impact. Votre projet est
                    unique, notre expertise le sublime.
                  </p>
                </div>
                <div className="btn-box">
                  <Link
                    to="/about"
                    className="primary-btn one gradient-bg white-color border-btn"
                  >
                    <span>En savoir plus</span>
                    <i className="icon-1 gradient-color"></i>
                  </Link>{" "}
                  <Link
                    to="/contact"
                    className="primary-btn one gradient-bg white-color"
                  >
                    <span>Demander un devis</span>
                    <i className="icon-1 gradient-color"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutArea;
