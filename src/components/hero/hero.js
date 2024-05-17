import React from "react";
import { Link } from "react-scroll";
import { Navigation, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import hero1 from "../../images/slider/slide-8.jpg";
import hero2 from "../../images/slider/slide-9.jpg";
import hero3 from "../../images/slider/slide-8.jpg";

const Hero = () => {
  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  return (
    <section className="wpo-hero-slider-s2  wpo-hero-slider-1">
      <div className="swiper-container">
        <div className="swiper-wrapper">
          <Swiper
            // install Swiper modules
            modules={[Navigation, A11y]}
            spaceBetween={0}
            slidesPerView={1}
            loop={true}
            pagination={{ clickable: true }}
            speed={1800}
            parallax={true}
            navigation
          >
            <SwiperSlide>
              <div
                className="slide-inner slide-bg-image"
                style={{ backgroundImage: `url(${hero1})` }}
              >
                <div
                  className="slide-inner slide-bg-image"
                  data-background="assets/images/slider/slide-6.jpg"
                >
                  <div className="container-fluid">
                    <div className="slide-content">
                      <div data-swiper-parallax="300" className="slide-title">
                        <h2 style={{ color: "white", opacity: 0.7 }}>
                          Donate to the JM 2024 Campaign
                        </h2>
                      </div>
                      <div data-swiper-parallax="400" className="slide-text">
                        <p>
                          Join the movement and make a difference! Your
                          contribution can shape the future. Together, let's
                          make JM 2024 a success.
                        </p>
                      </div>
                      <div className="clearfix"></div>
                      <div data-swiper-parallax="500" className="slide-btns">
                        <Link
                          onClick={ClickHandler}
                          to="donate"
                          smooth={true}
                          offset={-60}
                          duration={500}
                          className="theme-btn-s3"
                        >
                          Donate now
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                className="slide-inner slide-bg-image"
                style={{ backgroundImage: `url(${hero2})` }}
              >
                <div
                  className="slide-inner slide-bg-image"
                  data-background="assets/images/slider/slide-6.jpg"
                >
                  <div className="container-fluid">
                    <div className="slide-content">
                    <div data-swiper-parallax="300" className="slide-title">
                        <h2 style={{ color: "white", opacity: 0.7 }}>
                          Donate to the JM 2024 Campaign
                        </h2>
                      </div>
                      <div data-swiper-parallax="400" className="slide-text">
                        <p>
                          Join the movement and make a difference! Your
                          contribution can shape the future. Together, let's
                          make JM 2024 a success.
                        </p>
                      </div>
                      <div className="clearfix"></div>
                      <div data-swiper-parallax="500" className="slide-btns">
                        <Link
                          onClick={ClickHandler}
                          to="donate"
                          smooth={true}
                          offset={-60}
                          duration={500}
                          className="theme-btn-s3"
                        >
                          Donate now
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            {/* <SwiperSlide>
              <div
                className="slide-inner slide-bg-image"
                style={{ backgroundImage: `url(${hero3})` }}
              >
                <div
                  className="slide-inner slide-bg-image"
                  data-background="assets/images/slider/slide-6.jpg"
                >
                  <div className="container-fluid">
                    <div className="slide-content">
                    <div data-swiper-parallax="300" className="slide-title">
                        <h2 style={{ color: "white", opacity: 0.7 }}>
                          Donate to the JM 2024 Campaign
                        </h2>
                      </div>
                      <div data-swiper-parallax="400" className="slide-text">
                        <p>
                          Join the movement and make a difference! Your
                          contribution can shape the future. Together, let's
                          make JM 2024 a success.
                        </p>
                      </div>
                      <div className="clearfix"></div>
                      <div data-swiper-parallax="500" className="slide-btns">
                        <Link
                          onClick={ClickHandler}
                          to="donate"
                          smooth={true}
                          offset={-60}
                          duration={500}
                          className="theme-btn-s3"
                        >
                          Donate now
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide> */}
            ...
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Hero;
