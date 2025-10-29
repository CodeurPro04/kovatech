"use client";
import "swiper/css/bundle";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const HeroHomeFour = () => {
  return (
    <>
      <section className="hero-section text-center">
        <div
          className="pattern"
          style={{ backgroundImage: `url(/assets/images/shape/shape-1.png)` }}
        ></div>
        <div className="container">
          <div className="content-box">
            <div
              className="shape"
              style={{
                backgroundImage: `url(/assets/images/shape/shape-2.png)`,
              }}
            ></div>
            <h2>
              Créez. Brillez. Innovez avec <br />
              <span className="gradient-color">Kovatech</span>
            </h2>
            <p>
              Des solutions digitales sur mesure ! <br /> un design qui marque
              les esprits, et des outils technologiques qui propulsent votre
              marque. <br />
              Kovatech, c’est l’avenir de votre entreprise, conçu aujourd’hui.
            </p>

            <div className="btn-box">
              <a
                href="/about"
                className="primary-btn one gradient-bg white-color"
              >
                <span>En savoir plus</span>
                <i className="icon-1 gradient-color"></i>
              </a>
            </div>
          </div>
          <div className="slide-image">
            <div className="clients-box">
              <ul className="clients-image">
                <li>
                  <img src="assets/images/resource/clients-1.png" alt="" />
                </li>
                <li>
                  <img src="assets/images/resource/clients-2.png" alt="" />
                </li>
                <li>
                  <img src="assets/images/resource/clients-3.png" alt="" />
                </li>
                <li>
                  <span className="gradient-bg">1K+</span>
                </li>
              </ul>
              <h3>
                Plus de <span className="gradient-color">1K+</span> avis
                excellents
              </h3>
            </div>
            <Swiper
              slidesPerView={1}
              spaceBetween={-300}
              mousewheel={false}
              centeredSlides={true}
              speed={1400}
              watchSlidesProgress={true}
              loop={true}
              autoplay={{
                delay: 5000,
              }}
              pagination={{
                el: ".dot-pagination-one",
                clickable: true,
              }}
              modules={[Autoplay, Pagination]}
              breakpoints={{
                1024: {
                  slidesPerView: 1,
                  spaceBetween: 30,
                },
                800: {
                  slidesPerView: 1,
                  spaceBetween: 30,
                },
                600: {
                  slidesPerView: 1,
                  spaceBetween: 30,
                },
                0: {
                  slidesPerView: 1,
                  spaceBetween: 30,
                },
              }}
              className="hero-image-slide"
            >
              <SwiperSlide className="swiper-slide">
                <figure className="image-box">
                  <img src="assets/images/digi2.jpg" alt="" />
                </figure>
              </SwiperSlide>
              {/* swiper slider 
              <SwiperSlide className="swiper-slide">
                <figure className="image-box">
                  <img src="assets/images/digi5.jpg" alt="" />
                </figure>
              </SwiperSlide> */}
              <SwiperSlide className="swiper-slide">
                <figure className="image-box">
                  <img src="assets/images/digi6.jpg" alt="" />
                </figure>
              </SwiperSlide>
              {/* swiper slider */}
              <SwiperSlide className="swiper-slide">
                <figure className="image-box">
                  <img src="assets/images/digi3.jpg" alt="" />
                </figure>
              </SwiperSlide>
              <div className="dot-pagination-one"></div>
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroHomeFour;
