"use client";
import "swiper/css/bundle";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const TestimonialHomeFour = () => {
  return (
    <>
      <section className="testimonial-section">
        <div
          className="pattern"
          style={{
            backgroundImage: `url(/assets/images/shape/shape-11.png)`,
          }}
        ></div>
        <div
          className="shape"
          style={{
            backgroundImage: `url(/assets/images/shape/shape-14.png)`,
          }}
        ></div>
        <div className="container">
          <div className="title-box">
            <div className="main-title">
              <h3>Avis de nos clients</h3>
              <h2>
                Ils nous ont fait confiance, <br />
                leurs <span className="gradient-color">succès parlent</span>{" "}
                pour nous
              </h2>
            </div>
            <p>
              De la Côte d’Ivoire à l’international, nous avons accompagné des
              startups, PME et grandes entreprises dans leurs projets digitaux.
              Voici ce qu’ils disent de leur expérience avec nous.
            </p>
          </div>
          <div className="inner-container">
            <Swiper
              slidesPerView={1}
              spaceBetween={24}
              mousewheel={false}
              speed={1400}
              watchSlidesProgress={true}
              loop={true}
              navigation={{
                nextEl: ".next-btn",
                prevEl: ".prev-btn",
              }}
              autoplay={{
                delay: 5000,
              }}
              modules={[Autoplay, Navigation]}
              breakpoints={{
                1920: {
                  slidesPerView: 2,
                  spaceBetween: 30,
                },
                1400: {
                  slidesPerView: 2,
                  spaceBetween: 30,
                },
                900: {
                  slidesPerView: 2,
                  spaceBetween: 30,
                },
                700: {
                  slidesPerView: 1,
                  spaceBetween: 30,
                },
                0: {
                  slidesPerView: 1,
                  spaceBetween: 30,
                },
              }}
              className="testimonial-block-slide"
            >
              <SwiperSlide>
                <div className="testimonial-block-one">
                  <div
                    className="block-shape"
                    style={{
                      backgroundImage: `url(/assets/images/shape/shape-12.png)`,
                    }}
                  ></div>
                  <div
                    className="block-shape-overlay"
                    style={{
                      backgroundImage: `url(/assets/images/shape/shape-13.png)`,
                    }}
                  ></div>
                  <div className="clients-image">
                    <img src="assets/images/resource/clients-4.png" alt="" />
                  </div>
                  <p>
                    “Notre application mobile a dépassé toutes nos attentes. Une
                    équipe réactive, professionnelle et surtout à l’écoute de
                    nos besoins. Grâce à eux, nous avons gagné en visibilité et
                    en efficacité.”
                  </p>
                  <div className="clients-box">
                    <figure className="image-box">
                      <img src="assets/images/resource/clients-6.png" alt="" />
                    </figure>
                    <div className="inner">
                      <h5>Kouadio Serge</h5>
                      <span className="designation">
                        Entrepreneur, Abidjan
                      </span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="testimonial-block-one">
                  <div
                    className="block-shape"
                    style={{
                      backgroundImage: `url(/assets/images/shape/shape-12.png)`,
                    }}
                  ></div>
                  <div
                    className="block-shape-overlay"
                    style={{
                      backgroundImage: `url(/assets/images/shape/shape-13.png)`,
                    }}
                  ></div>
                  <div className="clients-image">
                    <img src="assets/images/resource/clients-5.png" alt="" />
                  </div>
                  <p>
                    “Ils ont développé notre site e-commerce avec une
                    rapidité et une qualité remarquables. Aujourd’hui, nous
                    touchons des clients dans plusieurs pays grâce à leur
                    expertise digitale.”
                  </p>
                  <div className="clients-box">
                    <figure className="image-box">
                      <img src="assets/images/resource/clients-7.png" alt="" />
                    </figure>
                    <div className="inner">
                      <h5>Awa Koné</h5>
                      <span className="designation">CEO, Boutique en ligne</span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>

            <div className="swiper-nav-btn">
              <button className="prev-btn" title="icon">
                <i className="icon-51"></i>
              </button>
              <button className="next-btn" title="icon2">
                <i className="icon-52"></i>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TestimonialHomeFour;
