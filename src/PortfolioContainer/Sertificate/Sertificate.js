import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./Sertificate.css";
import bwa from "../../../src/img/sertificate/serti_bwa_react.jpg";
import camp404 from "../../../src/img/sertificate/serti_camp404.jpg";
import git from "../../../src/img/sertificate/serti_gamelab_git.jpg";
import codehtml from "../../../src/img/sertificate/serti_codepolitan_htmlcss.jpg";
import codejs from "../../../src/img/sertificate/serti_codepolitan_JavaScript.jpg";
import codejq from "../../../src/img/sertificate/serti_codepolitan_jQuery.jpg";
import deajs from "../../../src/img/sertificate/serti_dea_js.jpg";
import dicfront from "../../../src/img/sertificate/serti_dicoding_frontend.jpg";
import dicjs from "../../../src/img/sertificate/serti_dicoding_javascript.jpg";
import dicweb from "../../../src/img/sertificate/serti_dicoding_web.jpg";
import node from "../../../src/img/sertificate/serti_full_nodejs.jpg";
import projs from "../../../src/img/sertificate/serti_progate_js.jpg";
import bootsrap from "../../../src/img/sertificate/serti_Skilvul_Bootstrap.jpg";
import skiljs from "../../../src/img/sertificate/serti_Skilvul_JavaScript.jpg";
import ujs from "../../../src/img/sertificate/serti_udemy_js.jpg";
import reactnative from "../../../src/img/sertificate/serti_ws_reactnative.jpg";

import shape from "../../../src/img/sertificate/shape-bg.png";

export default function Testimonial(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription = ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const options = {
    loop: true,
    margin: 0,
    nav: true,
    animateIn: "bounceInRight",
    animateOut: "bounceOutRight",
    dots: true,
    autoplay: true,
    smartSpeed: 1000,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 1,
      },
      1000: {
        items: 3,
      },
    },
  };

  return (
    <div>
      <ScreenHeading title={"Certificate"} subHeading={"My Certificate Course"} />
      <section className="certificate-section" id={props.id || ""}>
        <div className="container">
          <div className="row">
            <OwlCarousel className="owl-carousel" id="testimonial-carousel" {...options}>
              <div className="col-lg-12">
                <div className="testi-item">
                  <div className="client-info">
                    <img src={bwa} alt="no internet connection"></img>
                    <h5>Mastering Web With React And Tailwind CSS</h5>
                    <p>Build With Angga</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="testi-item">
                  <div className="client-info">
                    <img src={camp404} alt="no internet connection"></img>
                    <h5>Mini Bootcamp Online Basic Web Developer</h5>
                    <p>CAMP404</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="testi-item">
                  <div className="client-info">
                    <img src={git} alt="no internet connection"></img>
                    <h5>Course GIT</h5>
                    <br />
                    <p>Gamelab</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="testi-item">
                  <div className="client-info">
                    <img src={codehtml} alt="no internet connection"></img>
                    <h5>Course HTML And CSS</h5>
                    <br />
                    <p>Codepolitan</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="testi-item">
                  <div className="client-info">
                    <img src={codejs} alt="no internet connection"></img>
                    <h5>Course JavaScript</h5>
                    <br />
                    <p>Codepolitan</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="testi-item">
                  <div className="client-info">
                    <img src={codejq} alt="no internet connection"></img>
                    <h5>Course jQuery</h5>
                    <br />
                    <p>Codepolitan</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-12">
                <div className="testi-item">
                  <div className="client-info">
                    <img src={deajs} alt="no internet connection"></img>
                    <h5>Short Course JavaScript</h5>
                    <p>DeaCourse</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="testi-item">
                  <div className="client-info">
                    <img src={dicfront} alt="no internet connection"></img>
                    <h5>Course Web FrontEnd</h5>
                    <br />
                    <p>DICODING</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="testi-item">
                  <div className="client-info">
                    <img src={dicjs} alt="no internet connection"></img>
                    <h5>Course JavaScript</h5>
                    <br />
                    <p>DICODING</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-12">
                <div className="testi-item">
                  <div className="client-info">
                    <img src={dicweb} alt="no internet connection"></img>
                    <h5>Course Pemrograman Web</h5>
                    <br />
                    <p>DICODING</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="testi-item">
                  <div className="client-info">
                    <img src={node} alt="no internet connection"></img>
                    <h5>Mini Bootcamp Pengembangan Web NodeJS</h5>
                    <p>Progate</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="testi-item">
                  <div className="client-info">
                    <img src={projs} alt="no internet connection"></img>
                    <h5>Course JavaScript</h5>
                    <br />
                    <p>Progate</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="testi-item">
                  <div className="client-info">
                    <img src={bootsrap} alt="no internet connection"></img>
                    <h5>Course Bootstrap 5</h5>
                    <br />
                    <p>Skilvul</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-12">
                <div className="testi-item">
                  <div className="client-info">
                    <img src={skiljs} alt="no internet connection"></img>
                    <h5>Course JavaScript Intermediate</h5>
                    <br />
                    <p>Skilvul</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="testi-item">
                  <div className="client-info">
                    <img src={ujs} alt="no internet connection"></img>
                    <h5>Course JavaScript</h5>
                    <br />
                    <p>Udemy</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="testi-item">
                  <div className="client-info">
                    <img src={reactnative} alt="no internet connection"></img>
                    <br />
                    <h5>WorkShop React Native</h5>
                    <br />
                    <p>VISXCreative</p>
                  </div>
                </div>
              </div>
            </OwlCarousel>
          </div>
        </div>
      </section>
      <div className="footer-image">
        <img src={shape} alt="Phot0 not responding" />
      </div>
    </div>
  );
}
