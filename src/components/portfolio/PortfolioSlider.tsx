"use client";
//import { Link } from "react-router-dom";
import "swiper/css/bundle";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const PortfolioSlider = () => {
  return (
    <>
      <section className="service-section portfolio-service">
        <div className="container">
          <div className="small-title">
            Voici quelques-uns de nos projets récents :
          </div>
          <div className="main-content">
            <Swiper
              slidesPerView={1}
              spaceBetween={24}
              mousewheel={false}
              speed={1400}
              watchSlidesProgress={true}
              loop={true}
              autoplay={{
                delay: 5000,
              }}
              navigation={{
                nextEl: ".prev-btn",
                prevEl: ".next-btn",
              }}
              modules={[Autoplay, Navigation]}
              breakpoints={{
                1920: { slidesPerView: 4, spaceBetween: 30 },
                1400: { slidesPerView: 4, spaceBetween: 30 },
                900: { slidesPerView: 3, spaceBetween: 30 },
                700: { slidesPerView: 2, spaceBetween: 30 },
                0: { slidesPerView: 1, spaceBetween: 30 },
              }}
              className="service-block-slide"
            >
              {/* DeeShop */}
              <SwiperSlide className="swiper-slide">
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
                        alt="DeeShop"
                      />
                    </figure>
                  </div>
                </div>
              </SwiperSlide>

              {/* Application mobile Santé+ */}
              <SwiperSlide className="swiper-slide">
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
                        alt="Application Santé+"
                      />
                    </figure>
                  </div>
                </div>
              </SwiperSlide>

              {/* KOF Go Consulting */}
              <SwiperSlide className="swiper-slide">
                <div className="portfolio-block-one">
                  <div className="text-box">
                    <h3>KOF Go Consulting</h3>
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
                        src="assets/images/portfolio/kofgo.png"
                        alt="KOF Go Consulting"
                      />
                    </figure>
                  </div>
                </div>
              </SwiperSlide>

              {/* ERP Gestion d'entreprise */}
              <SwiperSlide className="swiper-slide">
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
                        alt="ERP Gestion"
                      />
                    </figure>
                  </div>
                </div>
              </SwiperSlide>

              {/* Saint Barth Location */}
              <SwiperSlide className="swiper-slide">
                <div className="portfolio-block-one">
                  <div className="text-box">
                    <h3>Saint Barth Location</h3>
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
                        alt="Saint Barth Location"
                      />
                    </figure>
                  </div>
                </div>
              </SwiperSlide>

              {/* Cabinet Juridique Online */}
              <SwiperSlide className="swiper-slide">
                <div className="portfolio-block-one">
                  <div className="text-box">
                    <h3>Cabinet Juridique Online</h3>
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
                        src="assets/images/portfolio/juridique1.png"
                        alt="Cabinet Juridique"
                      />
                    </figure>
                  </div>
                </div>
              </SwiperSlide>

              {/* Plateforme E-learning */}
              <SwiperSlide className="swiper-slide">
                <div className="portfolio-block-one">
                  <div className="text-box">
                    <h3>Plateforme E-learning</h3>
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
                        alt="E-learning"
                      />
                    </figure>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>

          {/* Navigation */}
          <div className="swiper-nav-btn">
            <button className="prev-btn" title="Previous">
              <i className="icon-51"></i>
            </button>
            <button className="next-btn" title="Next">
              <i className="icon-52"></i>
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default PortfolioSlider;
