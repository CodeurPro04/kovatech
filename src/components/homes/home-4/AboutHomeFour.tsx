"use client";
import { useEffect, useRef } from "react";
import CircleType from "circletype";

const AboutHomeFour = () => {
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
      <section className="about-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12 col-sm-12 content-column">
              <div className="about-content">
                <div className="main-title">
                  <h3>À propos de nous - Kovatech</h3>
                  <h2>
                    Nous donnons vie à vos idées grâce à des{" "}
                    <span className="gradient-color color-one">
                      solutions digitales sur mesure
                    </span>
                    et créons des expériences qui font{" "}
                    <span className="gradient-color color-two">
                      grandir votre marque.
                    </span>
                  </h2> <br />
                  <p>
                    De la conception de sites web élégants au développement
                    d’applications mobiles performantes, en passant par des
                    logiciels métiers et des stratégies digitales innovantes,
                    nous construisons l’écosystème qui propulse votre entreprise
                    vers l’avenir. Plus qu’un prestataire, nous sommes le
                    partenaire de votre réussite numérique.
                  </p>
                </div>
                <div className="btn-box">
                  <a
                    href="/about"
                    className="primary-btn one gradient-bg white-color border-btn"
                  >
                    <span>Explorer les détails</span>
                    <i className="icon-1 gradient-color"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-md-12 image-column">
              <div className="about-image-box">
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
                  <span ref={curvedTextRef} className="curved-text">
                    Années d'expérience
                  </span>
                </div>
                <div className="about-image">
                  <figure className="image image-1">
                    <img src="assets/images/digi4.jpg" alt="" />
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

export default AboutHomeFour;
