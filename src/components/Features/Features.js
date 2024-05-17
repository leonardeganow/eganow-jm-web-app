import React from "react";
// import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import jm from "../../images/portfolio/donate.png";
import ggc from "../../images/shortcode.png";
// import follow from "../../images/portfolio/jm1.jpg";
import { Link } from "react-scroll";
import { Link as MyLink } from "react-router-dom";
import follow from "../../images/jnplus.jpg";

const ClickHandler = () => {
  window.scrollTo(10, 0);
};

const Features = (props) => {
  return (
    <section className={`wpo-election section-padding ${props.fClass}`}>
      <div className="container py-md-4 ">
        <div className="row p-6 g-lg-5 g-md-3 align-items-stretch g-5">
          <div className="col-md-4  ">
            <div className="wpo-service-item shadow rounded-3 h-100">
              <div className="wpo-service-text p-2">
                <div className="service-icon overflow-hidden rounded-3">
                  <img src={jm} alt="imag1" />
                </div>
                <h4 className="text-center text-danger mt-md-2 text-uppercase">
                  donate to support the 24 hour economy agenda
                </h4>
                <p className="p-2 m-0 text-center">
                  To create an enabling environment that promotes
                  productivity,competitiveness and well paying jobs.
                </p>
                <div className="text-center p-2 m-0">
                  <Link to="donate" smooth={true} duration={500}>
                    <button type="button" className="btn btn-success">
                      Donate now
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4  ">
            <div className="wpo-service-item shadow rounded-3 h-100">
              <div className="wpo-service-text p-2">
                <div className="service-icon overflow-hidden rounded-3">
                  <img src={ggc} alt="imag1" className="img-fluid" />
                </div>
                <h4 className="text-center text-danger mt-md-2">
                  DIAL *248*5# TO DONATE{" "}
                </h4>
                <p className="p-2 m-0 text-center">
                  The Good Governance Card is not just a card it's a key to a
                  more inclusive, prosperous, and harmonious Ghana.
                </p>
                <div className="text-center p-2 m-0">
                  <Link to="donate" smooth={true} duration={500}>
                    <button type="button" className="btn btn-success">
                      Donate now
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 ">
            <div className="wpo-service-item shadow rounded-3  h-100">
              <div className="wpo-service-text p-2">
                <div className="service-icon overflow-hidden rounded-3">
                  <img src={follow} alt="imag1" className="img-fluid" />
                </div>

                <h4 className="text-center text-danger mt-md-2">
                  DONATE TOWARDS VICTORY 2024
                </h4>
                <p className="p-2 m-0 text-center">
                  Lets join hands together and donate towards victory 2024
                </p>
                <div className="text-center p-2 m-0">
                  <Link to="donate" smooth={true} duration={500}>
                    <button type="button" className="btn btn-success">
                      Donate now
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="row-grid wpo-service-slider-s2">
                    <Slider {...settings}>
                        <div className="grid">
                            <div className="wpo-service-item">
                                <div className="wpo-service-text">
                                    <div className="service-icon">
                                        <img src={fImg1} alt="" />
                                    </div>
                                    <h2>DONATE TO JM</h2>
                                    <p>Lorem Ipsum is simply dummy text
                                        the industrey's standard dummy text ever
                                        scrambled type specimen</p>
                                    <Link onClick={ClickHandler} to="/campaign">Details</Link>
                                </div>
                            </div>
                        </div>
                        <div className="grid">
                            <div className="wpo-service-item">
                                <div className="wpo-service-text">
                                    <div className="service-icon">
                                        <img src={fImg2} alt="" />
                                    </div>
                                    <h2>GET GGC CARD</h2>
                                    <p>Lorem Ipsum is simply dummy text
                                        the industrey's standard dummy text ever
                                        scrambled type specimen</p>
                                    <Link onClick={ClickHandler} to="/volunteer">Details</Link>
                                </div>
                            </div>
                        </div>
                        <div className="grid">
                            <div className="wpo-service-item">
                                <div className="wpo-service-text">
                                    <div className="service-icon">
                                        <img src={fImg3} alt="" />
                                    </div>
                                    <h2>MAKE DONATION</h2>
                                    <p>Lorem Ipsum is simply dummy text
                                        the industrey's standard dummy text ever
                                        scrambled type specimen</p>
                                    <Link onClick={ClickHandler} to="/donate">Details</Link>
                                </div>
                            </div>
                        </div>
                        <div className="grid">
                            <div className="wpo-service-item">
                                <div className="wpo-service-text">
                                    <div className="service-icon">
                                        <img src={fImg2} alt="" />
                                    </div>
                                    <h2>BECOME A VOLUNTEER</h2>
                                    <p>Lorem Ipsum is simply dummy text
                                        the industrey's standard dummy text ever
                                        scrambled type specimen</p>
                                    <Link onClick={ClickHandler} to="/volunteer">Details</Link>
                                </div>
                            </div>
                        </div>
                    </Slider>
                </div> */}
      </div>
    </section>
  );
};

export default Features;
