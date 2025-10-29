import { Link } from "react-router-dom";

const CtaHomeFour = () => {
  return (
    <>
      <section className="cta-section">
        <div
          className="pattern"
          style={{ backgroundImage: `url(/assets/images/shape/shape-24.png)` }}
        ></div>
        <div className="container">
          <div className="cta-content">
            <div
              className="shape"
              style={{ backgroundImage: `url(/assets/images/shape/shape-22.png)` }}
            ></div>
            {/*  
            <figure className="image">
              <img src="assets/images/icons/loud-1.png" alt="CTA" />
            </figure> */}
            <h3>Un projet digital en tête ?</h3>
            <h2>Transformons vos idées en solutions.</h2>
            <p>
              Que ce soit un site web, une application mobile, un logiciel ou une solution digitale complète, 
              notre équipe vous accompagne pour donner vie à vos projets et booster votre croissance.
            </p>
            {/* Buttons Container */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link
                  to="/contact"
                  className="primary-btn one gradient-bg white-color"
                >
                  <span>Discutons de votre projet</span>
                  <i className="icon-1 gradient-color"></i>
                </Link> {" "}
                
                <Link
                    to="/contact"
                    className="primary-btn one gradient-bg white-color border-btn"
                  >
                    <span>Avoir un devis</span>
                    <i className="icon-1 gradient-color"></i>
                  </Link>
              </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CtaHomeFour;
