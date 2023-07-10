import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import $ from "jquery";

const Home2 = () => {
  const [counted, setCounted] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const oTop = $("#counter").offset().top - window.innerHeight;
      if (counted === 0 && $(window).scrollTop() > oTop) {
        $(".count").each(function () {
          const $this = $(this);
          const countTo = $this.attr("data-count");
          $({ countNum: $this.text() }).animate(
            {
              countNum: countTo,
            },
            {
              duration: 6000,
              easing: "swing",
              step: function () {
                $this.text(Math.floor(this.countNum));
              },
              complete: function () {
                $this.text(this.countNum);
              },
            }
          );
        });
        setCounted(1);
      }
    };

    $(window).scroll(handleScroll);

    // Clean up the scroll event listener when the component unmounts
    return () => {
      $(window).off("scroll", handleScroll);
    };
  }, [counted]);
  return (
    <div>
      <div className="homebanner" id="homebannerDesktop">
        <div className="carousel slide" id="main-carousel" data-ride="carousel">
          <ol className="carousel-indicators">
            <li
              data-target="#main-carousel"
              data-slide-to={0}
              className="active"
            >
              <p className="mb-0 cont text-white">Website Design &amp; </p>
              <p className="mb-0 slider-leadtxt text-white">Development</p>
            </li>
            <li data-target="#main-carousel" data-slide-to={1}>
              <p className="mb-0 cont text-white">Digital Marketing &amp;</p>
              <p className="mb-0 slider-leadtxt text-white"> Lead Generation</p>
            </li>
            <li data-target="#main-carousel" data-slide-to={2}>
              <p className="mb-0 cont text-white">branding Strategy &amp; </p>
              <p className="mb-0 slider-leadtxt text-white">Solutions</p>
            </li>
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                className="img-fluid lazyload"
                src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                data-src="https://www.janbaskdigitaldesign.com/assets21/webpimages/sliderHome1.webp"
                alt="Web Design Agency"
                style={{ width: "100%" }}
              />
              <div className="carousel-caption">
                <span className="lighttxt vertical">
                  {" "}
                  Web design &amp; development
                </span>
                <h1
                  className="slid-lead2 text-white"
                  style={{
                    fontSize: "31px !important",
                    paddingRight: "3px !important",
                  }}
                >
                  {" "}
                  The World's Foremost  Website Design, Development and{" "}
                  <span style={{ color: "#d33536" }}>
                    Digital Marketing Agency
                  </span>{" "}
                </h1>
                <p className="mb-4 sub-cont_txt text-white">
                From Concept to Code, Our Website Designing Agency Creates Powerful Websites, Blogs, and Stores that Effortlessly Market Your Products, Boost Sales, and Minimize Customer Chasing.{" "}
                </p>
                <p className="home-started-btn">
                  <a
                    className="text-white"
                    href="website-development-services.html"
                    onclick="ga('send', 'event', 'Home Banner', 'Get In Touch');"
                  >
                        Drop us a line!{" "}
                  </a>
                </p>
                <a
                  className="text-white"
                  href="website-development-services.html"
                  onclick="ga('send', 'event', 'Home Banner', 'Get In Touch');"
                ></a>
              </div>
            </div>
            <div className="carousel-item">
              <div className="hombntrt2">
                <video poster id="myVideo8" loop autoPlay muted preload="auto">
                  <source
                    src="https://player.vimeo.com/external/387149499.hd.mp4?s=5a327820497c99fb7822586fd392faacaf1fb05e&profile_id=174&oauth2_token_id=57447761"
                    type="video/webm"
                  />
                </video>
              </div>
              <div className="hom-bntrt">
                <video
                  poster
                  id="myVideo8"
                  loop
                  muted
                  autoPlay
                  playsInline
                  preload="auto"
                >
                  <source
                    src="https://player.vimeo.com/external/530414468.sd.mp4?s=31dc76b45a2683640b6ef2c07e84467027c03abd&profile_id=164&oauth2_token_id=57447761"
                    type="video/webm"
                  />
                </video>
              </div>
              <div className="carousel-caption">
                <span className="lighttxt vertical">Marketing</span>
                <p
                  className="slid-lead2 text-white"
                  style={{
                    fontSize: "31px !important",
                    paddingRight: "3px !important",
                  }}
                >
                  Amplify Your Website's Visibility and Attract More Attention!
                  <span className="dot">.</span>{" "}
                </p>
                <p className="mb-4 sub-cont_txt text-white">
                Through our digital marketing agency, embark on a strategic performance marketing roadmap to effectively promote your business to the right audience and pay only for the achieved results.{" "}
                </p>
                <p className="home-started-btn">
                  <a
                    href="Digitalmarketing.html.html"
                    onclick="ga('send', 'event', 'Home Banner', 'Let’s Promote Now');"
                    className="text-white"
                  >
                    Take Action and Promote Now!{" "}
                  </a>
                </p>
                <a
                  href="/digital-marketing-services"
                  onclick="ga('send', 'event', 'Home Banner', 'Let’s Promote Now');"
                  className="text-white"
                ></a>
              </div>
            </div>
            <div className="carousel-item">
              <img
                className="img-fluid lazyload"
                src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                data-src="https://www.janbaskdigitaldesign.com/assets21/webpimages/sliderHome8.webp"
                alt="web development agency"
                style={{ width: "100%" }}
              />
              <div className="carousel-caption">
                <span className="lighttxt2 vertical">Development</span>
                <p
                  className="slid-lead2 text-white"
                  style={{
                    fontSize: "31px !important",
                    paddingRight: "3px !important",
                  }}
                >
                  Get an Edge as a Most{" "}
                  <span style={{ color: "#d33536" }}>
                    {" "}
                    “Reliable & Unforgettable Brand”
                  </span>
                  <span className="dot">.</span>
                </p>
                <p className="mb-4 sub-cont_txt text-white">
                Even the best businesses can seem bland without branding! Our powerful branding solutions can set you apart from the crowd and ignite an everlasting connection with your audience.{" "}
                </p>
                <p className="home-started-btn">
                  <a
                    href="#"
                    onclick="ga('send', 'event', 'Home Banner', 'Let’s Build a brand');"
                    className="text-white"
                  >
                    Creating an Identity{" "}
                  </a>
                </p>
                <a
                  href="https://www.janbaskdigitaldesign.com/branding-services"
                  onclick="ga('send', 'event', 'Home Banner', 'Let’s Build a brand');"
                  className="text-white"
                ></a>
              </div>
            </div>
          </div>
          <a
            href="#main-carousel"
            className="carousel-control-prev"
            data-slide="prev"
          >
            <span className="carousel-control-prev-icon" />
            <span className="sr-only" aria-hidden="true">
              Prev
            </span>
          </a>
          <a
            href="#main-carousel"
            className="carousel-control-next"
            data-slide="next"
          >
            <span className="carousel-control-next-icon" />
            <span className="sr-only" aria-hidden="true">
              Next
            </span>
          </a>
        </div>
      </div>
      <section
        className="section section1"
        id="homesec-1"
        style={{
          padding: "80px 0",
          background: "url(images/homewave.webp) bottom center no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div
              className="col-lg-5 pt-3 pt-lg-0 aos-init aos-animate"
              data-aos="fade-left"
              data-aos-delay={100}
            >
              <h2
                className="leadtxt2 text-dark"
                style={{
                  position: "relative",
                  color: "#044088 !important",
                  marginBottom: "1.5em",
                }}
              >
      Let's discuss the<span className="goals">achievements </span>{" "}
                <span className="results">of our clients in terms of numbers. </span>{" "}
              </h2>
              <p className="sub-cont_txt ">
              As an experienced Web Design Agency, we take immense pride in offering a suite of result-oriented web design and digital marketing solutions. Our approach is attainable, measurable, and viable, delivering outstanding performance numbers for our clients across various products and verticals.{" "}
              </p>
            </div>
            <div
              className="col-lg-7 aos-init aos-animate"
              data-aos="fade-down"
              data-aos-delay={150}
            >
              <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                  <div
                    className="hard-bx aos-init aos-animate"
                    data-aos="fade-down"
                    data-aos-delay={100}
                    id="counter"
                  >
                    <p className="cont">
                    Elevated average page session duration{" "}
                    </p>
                    <h4 className="podt">
                      {" "}
                      <span className="count percent" data-count={85}>
                        10
                      </span>
                      <span style={{ float: "left", display: "block" }}>%</span>
                    </h4>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                  <div
                    className="hard-bx aos-init aos-animate"
                    data-aos="fade-down"
                    data-aos-delay={200}
                  >
                    <p className="cont">Maximized conversion rate potential </p>
                    <h4 className="podt">
                      {" "}
                      <span className="count percent" data-count={55}>
                        0
                      </span>
                      <span style={{ float: "left", display: "block" }}>%</span>
                    </h4>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                  <div
                    className="hard-bx aos-init aos-animate"
                    data-aos="fade-down"
                    data-aos-delay={300}
                  >
                    <p className="cont">"Optimized website performance to the max </p>
                    <h4 className="podt">
                      {" "}
                      <span className="count percent" data-count={90}>
                        10
                      </span>
                      <span style={{ float: "left", display: "block" }}>%</span>
                    </h4>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                  <div
                    className="hard-bx aos-init aos-animate"
                    data-aos="fade-down"
                    data-aos-delay={300}
                  >
                    <p className="cont">Minimized website bounce rate to the fullest </p>
                    <h4 className="podt">
                      {" "}
                      <span className="count percent" data-count={48}>
                        0
                      </span>
                      <span style={{ float: "left", display: "block" }}>%</span>
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <a
        href="https://api.whatsapp.com/send?phone= +917057058841&text=hi."
        className="float"
        target="_blank"
      >
        <i className="fa fa-whatsapp my-float" />
      </a>
      <section
        className="section section3"
        id="homesec-3"
        style={{ background: "#fff", position: "relative" }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-4 col-md-12 col-sm-4 col-xs-12">
              <div
                className="Wishlist-form aos-init aos-animate"
                data-aos="fade-down"
              >
                <p className="slider-leadtxt text-dark mb-1">
                  Let's Take Your Project Goal to the Next Stage{" "}
                </p>
                <p className="sub-cont_txt mb-4">
                  Fill in Your Requirements &amp; Leave Rest on Us!
                </p>
                <form className="home-form-jdd" id="homenewform" method="post">
                  <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 mb-3">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Your Name"
                        className="form-control"
                      />
                    </div>
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 mb-3">
                      <input
                        type="email"
                        id="mail"
                        name="email"
                        placeholder="Email Id"
                        className="form-control"
                      />
                    </div>
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 mb-3">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Phone no."
                        name="phone"
                        id="phone"
                        maxLength={10}
                        minLength={10}
                      />
                    </div>
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 mb-3">
                      <textarea
                        id="message"
                        name="message"
                        placeholder="Your Message"
                        className="form-control"
                        defaultValue={""}
                      />
                    </div>
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 mb-4 need-website">
                      {/*<div class="need-feild">*/}
                      {/*<p class="sub-cont_txt mb-4">Your Requirement</p>*/}
                      {/*<div class="row">*/}
                      {/*<label class="col-lg-4 col-md-4 col-sm-4 col-xs-12">*/}
                      {/*<input type="checkbox" class="option-input checkbox" name="requirement[]" value="br/anding">*/}
                      {/*<span>br/anding</span>*/}
                      {/*</label>*/}
                      {/*<label class="col-lg-4 col-md-4 col-sm-4 col-xs-12 pl-0 pr-0">*/}
                      {/*<input type="checkbox" class="option-input checkbox" name="requirement[]" value="Development" checked>*/}
                      {/*<span> Development</span>*/}
                      {/*</label>*/}
                      {/*<label class="col-lg-4 col-md-4 col-sm-4 col-xs-12">*/}
                      {/*<input type="checkbox" class="option-input checkbox" name="requirement[]" value="Marketing">*/}
                      {/*<span>Marketing</span>*/}
                      {/* </label>*/}
                      {/*</div>*/}
                      {/*</div>*/}
                    </div>
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 mb-3">
                      <p
                        className="home-started-btn mb-0"
                        style={{ margin: "0 auto", display: "table" }}
                      >
                        <button
                          onclick="ga('send', 'event', 'Home Page Lets Take Your Project', 'Schedule Your Call');"
                          style={{
                            background:
                              "linear-gradient(to right, #0b59f0 30%, #673ab7)",
                            border: "0px",
                          }}
                          type="submit"
                          className="text-white"
                        >
                          Schedule Your Call
                        </button>
                      </p>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div
              className="col-lg-5 col-md-6 col-sm-5 col-xs-12 aos-init aos-animate"
              data-aos="fade-down"
            >
              <div className="whybx1 aos-init aos-animate" data-aos="fade-down">
                <img
                  src="https://images.pexels.com/photos/7989150/pexels-photo-7989150.jpeg?auto=compress&cs=tinysrgb&w=600"
                  data-src="https://images.pexels.com/photos/7989150/pexels-photo-7989150.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="web development agency"
                  className="img-fluid lazyload"
                />
                <ul
                  className="ticklist aos-init aos-animate"
                  data-aos="fade-down"
                >
                  <p
                    className="slider-leadtxt text-white text-center aos-init aos-animate font-italic mb-4"
                    data-aos="fade-down"
                    data-aos-delay={100}
                  >
                    {" "}
                    Engage &amp; Discover{" "}
                  </p>
                  <div className="row">
                    <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12 text-center">
                      <p className="cont text-white">
                        {" "}
                        <i>
                          {" "}
                          <img
                            src="https://www.svgrepo.com/show/6952/loss.svg"
                            data-src="https://www.svgrepo.com/show/6952/loss.svg"
                            alt="Google adwords customer service"
                            className="img-fluid lazyload"
                          />{" "}
                        </i>
                        Drive More <br />
                        Traffic{" "}
                      </p>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12 text-center">
                      <p className="cont text-white">
                        {" "}
                        <i>
                          {" "}
                          <img
                            src="https://www.svgrepo.com/show/494508/mind-smart-light-bulb.svg"
                            data-src="https://www.svgrepo.com/show/494508/mind-smart-light-bulb.svg"
                            alt="Google adwords customer service"
                            className="img-fluid lazyload"
                          />{" "}
                        </i>
                        Enhance User <br /> Experience{" "}
                      </p>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12 text-center">
                      <p className="cont text-white">
                        {" "}
                        <i>
                          {" "}
                          <img
                            src="https://www.svgrepo.com/show/175396/group-of-people-having-a-conversation.svg"
                            data-src="https://www.svgrepo.com/show/175396/group-of-people-having-a-conversation.svg"
                            alt="Google adwords customer service"
                            className="img-fluid lazyload"
                          />{" "}
                        </i>
                        Convert More
                        <br /> Leads{" "}
                      </p>
                    </div>
                  </div>
                </ul>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-6 col-sm-3 col-xs-12 aos-init aos-animate"
              data-aos="fade-down"
            >
              <div
                className="video-section2 aos-init aos-animate"
                data-aos="fade-down"
                data-aos-delay={100}
              >
                <video
                  poster
                  id="myVideo"
                  loop
                  autoPlay
                  playsInline
                  muted
                  preload="auto"
                >
                  <source
                    src="https://player.vimeo.com/external/544785331.sd.mp4?s=f46296b7242ebba0b07289120153e17061f1307e&profile_id=165&oauth2_token_id=57447761"
                    type="video/mp4"
                  />
                </video>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className="section section9"
        id="homesec-9"
        style={{
          background: "linear-gradient(#f7f7f7, white)",
          position: "relative",
        }}
      >
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-10 col-sm-12 text-center">
              <p className="leadtxt2 text-dark mb-1">
              Achieving Top Rankings & Ensuring User Retention - Our Ultimate Thrive!
              </p>
              <p className="sub-cont_txt mb-4">
              When you engage with our multifaceted website designing firm...{" "}
                <a href="#" style={{ color: "#1778f2" }} target="_blank">
                  digital marketing agency
                </a>
                , Unlock an arsenal of relevant, automated, and effective digital tools & platforms by connecting with our website designing firm. Experience the driving forces of creativity, innovation, and remarkable ROIs for your terrific brand.{" "}
              </p>
              <div
                className="row justify-content-center align-items-center aos-init aos-animate"
                data-aos="fade-down"
                data-aos-easing="ease"
                data-aos-delay={400}
              >
                <div
                  className="tools-bx aos-init aos-animate"
                  data-aos="fade-left"
                  data-aos-delay={100}
                >
                  <img
                    src="https://www.svgrepo.com/show/271138/bing.svg"
                    data-src="https://www.svgrepo.com/show/271138/bing.svg"
                    alt="bing"
                    className="img-fluid lazyload"
                  />
                </div>
                <div
                  className="tools-bx aos-init aos-animate"
                  data-aos="fade-left"
                  data-aos-delay={300}
                >
                  <img
                    src="https://www.svgrepo.com/show/475656/google-color.svg"
                    data-src="https://www.svgrepo.com/show/475656/google-color.svg"
                    alt="google"
                    className="img-fluid lazyload"
                  />
                </div>
                <div
                  className="tools-bx aos-init aos-animate"
                  data-aos="fade-left"
                  data-aos-delay={500}
                >
                  <img
                    src="https://www.svgrepo.com/show/475689/twitter-color.svg"
                    data-src="https://www.svgrepo.com/show/475689/twitter-color.svg"
                    alt="twitter"
                    className="img-fluid lazyload"
                  />
                </div>
                <div
                  className="tools-bx aos-init aos-animate"
                  data-aos="fade-left"
                  data-aos-delay={700}
                >
                  <img
                    src="https://www.svgrepo.com/show/452229/instagram-1.svg"
                    data-src="https://www.svgrepo.com/show/452229/instagram-1.svg"
                    alt="instagram"
                    className="img-fluid lazyload"
                  />
                </div>
                <div
                  className="tools-bx aos-init aos-animate"
                  data-aos="fade-left"
                  data-aos-delay={900}
                >
                  <img
                    src="https://www.svgrepo.com/show/475647/facebook-color.svg"
                    data-src="https://www.svgrepo.com/show/475647/facebook-color.svg"
                    alt="facebook"
                    className="img-fluid lazyload"
                  />
                </div>
                <div
                  className=" tools-bx aos-init aos-animate"
                  data-aos="fade-left"
                  data-aos-delay={1100}
                >
                  <img
                    src="https://www.svgrepo.com/show/354585/yahoo.svg"
                    data-src="https://www.svgrepo.com/show/354585/yahoo.svg"
                    alt="yahoo"
                    className="img-fluid lazyload"
                  />
                </div>
                <div
                  className=" tools-bx aos-init aos-animate"
                  data-aos="fade-left"
                  data-aos-delay={1100}
                >
                  <img
                    src="https://www.svgrepo.com/show/475700/youtube-color.svg"
                    data-src="https://www.svgrepo.com/show/475700/youtube-color.svg"
                    alt="youtube"
                    className="img-fluid lazyload"
                  />
                </div>
                <div
                  className=" tools-bx tools-bx1 aos-init aos-animate"
                  data-aos="fade-left"
                  data-aos-delay={1100}
                >
                  <img
                    src="https://www.svgrepo.com/show/382726/linkedin-linked-in.svg"
                    data-src="https://www.svgrepo.com/show/382726/linkedin-linked-in.svg"
                    alt="linkedin"
                    className="img-fluid lazyload"
                  />
                </div>
                <div className="col-lg-12 col-sm-12 text-center mt-5">
                  <p className="home-started-btn mb-0">
                    <a
                      className="text-white"
                      onclick="ga('send', 'event', 'Home Page Top Ranking & User Retention', 'Let’s Grow');"
                      href="#"
                    >
                      Let's Grow
                    </a>{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        id="about-banner"
        style={{
          background: "#fff",
          position: "relative",
          overflow: "hidden",
          height: "540px !important",
          paddingTop: "148px",
          paddingBottom: "100px",
        }}
      >
        <div className="container">
          <img
            src="data:image/gif;base64"
            data-src="https://www.janbaskdigitaldesign.com/assets21/webpimages/dots.webp"
            alt="dots"
            className="img-fluid aboutbannerImg-dots lazyload"
          />
          <div className="row align-items-center justify-content-start">
            <img
              src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
              data-src="https://www.janbaskdigitaldesign.com/assets21/webpimages/dots.webp"
              alt="dots"
              className="img-fluid aboutbannerImg-dots2 lazyload"
            />
            <div className="row align-items-center justify-content-start">
              <div className="col-lg-6 col-12">
                <h1
                  className="slid-lead2 text-dark aos-init "
                  data-aos-anchor-placement="top-bottom"
                >
                  TECHNICAL <span style={{ color: "#d33536" }}>PARTNER</span>{" "}
                </h1>
                {/*<p class="slid-cont2 text-dark  aos-init aos-animate" data-aos="fade-down" data-aos-anchor-placement="top-bottom">We Merge “Your Ideas” With “Our Cutting-Edge Digital Solutions” to Take Your Business from “Now” to “Wow”! </p>*/}
                <p className="cont" style={{ textAlign: "justify" }}>
                  {" "}
                  MK DigitalMare stands as the premier digital marketing, web development, and web designing company in Hyderabad. Additionally, we proudly serve as a global software provider, delivering tailor-made solutions for web, mobile, digital, cloud, and desktop software development and consulting services to clients across diverse industries.
                  <br />
                  <br /> Years ago, we embarked on a journey to revolutionize businesses online through our digital marketing, web designing, web applications, and Android apps services. Catering to all industries and companies in Hyderabad, India, we have successfully delivered numerous web designing and application projects, along with exceptional digital marketing and email marketing services. Our commitment to satisfying our clients' goals has enabled us to evolve into a leading web development, web designing, and digital marketing company in Hyderabad.{" "}
                </p>
                <p
                  className="home-started-btn mb-0"
                  style={{ margin: "30px auto 0 auto" }}
                >
                  <a
                    className="text-white"
                    onclick="ga('send', 'event', 'About Page Hey! We Are JanBask Digital Design', 'Let’s  Hear Your Idea');"
                    href="http://mkdigitalmare.com/"
                    target="_blank"
                  >
                    We're All Ears for Your Idea!
                  </a>{" "}
                </p>
              </div>
              <div className="col-lg-3 col-12">
                <img
                  src="https://media.licdn.com/dms/image/C4D0BAQGFWIakSb16aw/company-logo_200_200/0/1647625542412?e=2147483647&v=beta&t=vgAnWpCWw37jx91Dru51qx_N7wKzon0Diq_eOO50YIQ"
                  data-src="https://media.licdn.com/dms/image/C4D0BAQGFWIakSb16aw/company-logo_200_200/0/1647625542412?e=2147483647&v=beta&t=vgAnWpCWw37jx91Dru51qx_N7wKzon0Diq_eOO50YIQ"
                  alt="aboutban1"
                  className="img-fluid aboutbannerImg2 lazyload"
                />
              </div>
              <div className="col-lg-3 col-12 pl-0">
                <div className="video-section2">
                  <video poster id="myVideo4" loop autoPlay muted>
                    <source
                      src="https://player.vimeo.com/external/373983975.sd.mp4?s=fb207dfae15ee2d5ca124e50b0aca8b3e6f0667f&profile_id=164&oauth2_token_id=57447761"
                      type="video/mp4"
                    />
                    <source
                      src="https://player.vimeo.com/external/373983975.sd.mp4?s=fb207dfae15ee2d5ca124e50b0aca8b3e6f0667f&profile_id=164&oauth2_token_id=57447761"
                      type="video/webm"
                    />
                  </video>
                  <div className="pool-bx">
                    <p className="cont font-italic text-white">
                    We are home to a team of talented, dynamic, and highly creative transformers who relentlessly push boundaries, exploring new horizons to create your unmatched digital presence.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className="section section5"
        id="homesec-5"
        style={{
          background: "#f7f7f7 url(%20.html#) no-repeat",
          position: "relative",
          backgroundSize: "contain",
        }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div
              className="col-lg-5 aos-init aos-animate"
              data-aos="fade-right"
              data-aos-delay={100}
            >
              <h2
                className="leadtxt2 text-dark"
                style={{ position: "relative" }}
              >
                Enabling Seamless Digitalization Across Industries & Boundaries!{" "}
              </h2>
              <p className="sub-cont_txt ">
                {" "}
                Unleash the Power of Digital with Our Website Design & Development Company - Specialists in Your Industry!{" "}
              </p>
              <p className="cont mb-3">
              Being a top-notch web design firm, we drive online growth for businesses across diverse industries, providing end-to-end solutions from concept to completion. Our web development agency boasts time-tested expertise in every imaginable vertical, ensuring unmatched subject matter knowledge for all your needs.{" "}
              </p>
              <img
                style={{ marginTop: "20px", display: "none" }}
                src="https://images.pexels.com/photos/4339911/pexels-photo-4339911.jpeg?auto=compress&cs=tinysrgb&w=600"
                data-src="https://images.pexels.com/photos/4339911/pexels-photo-4339911.jpeg?auto=compress&cs=tinysrgb&w=600"
                className="img-fluid lazyload"
                alt="Digital Marketing Firm"
              />
            </div>
            <div className="col-lg-7">
              <div className="work-card-set">
                <div
                  className="icon-set aos-init aos-animate"
                  data-aos="zoom-in"
                  data-aos-delay=".2s"
                >
                  <div className=" work-card">
                    <a href="it-website-design.html">
                      <div className="icon-bg">
                        <img
                          src="https://www.svgrepo.com/show/18130/industry-worker-with-cap-protection-and-a-laptop.svg"
                          data-src="https://www.svgrepo.com/show/18130/industry-worker-with-cap-protection-and-a-laptop.svg"
                          className="img-fluid lazyload"
                          alt="IT website design"
                        />
                      </div>
                      <p>
                        IT <br />
                        Industry
                      </p>
                    </a>
                  </div>
                </div>
                <div
                  className="icon-set aos-init aos-animate"
                  data-aos="zoom-in"
                  data-aos-delay=".4s"
                >
                  <div className="work-card">
                    <a href="healthcare-website-design.html">
                      <div className="icon-bg">
                        <img
                          src="https://www.svgrepo.com/show/307872/health-care-healthcare-health-service-health-clinic.svg"
                          data-src="https://www.svgrepo.com/show/307872/health-care-healthcare-health-service-health-clinic.svg"
                          className="img-fluid lazyload"
                          alt="Healthcare website design"
                        />
                      </div>
                      <p>
                        Healthcare <br />
                        Industry
                      </p>
                    </a>
                  </div>
                </div>
                <div
                  className="icon-set aos-init aos-animate"
                  data-aos="zoom-in"
                  data-aos-delay=".6s"
                >
                  <div className="work-card">
                    <a href="financial-services-website-design.html">
                      <div className="icon-bg">
                        <img
                          src="https://www.svgrepo.com/show/417096/finance-markting-money-coin-dollar-molecule.svg"
                          data-src="https://www.svgrepo.com/show/417096/finance-markting-money-coin-dollar-molecule.svg"
                          className="img-fluid lazyload"
                          alt="Finance web design and development"
                        />
                      </div>
                      <p>
                        Finance <br />
                        Industry
                      </p>
                    </a>
                  </div>
                </div>
                <div
                  className="icon-set aos-init aos-animate"
                  data-aos="zoom-in"
                  data-aos-delay=".8s"
                >
                  <div className="work-card">
                    <a href="#">
                      <div className="icon-bg">
                        <img
                          src="https://www.svgrepo.com/show/308677/law-office-legal-practice-private-law-practice.svg"
                          data-src="https://www.svgrepo.com/show/308677/law-office-legal-practice-private-law-practice.svg"
                          className="img-fluid lazyload"
                          alt="Law Firm website design"
                        />
                      </div>
                      <p>
                        Law &amp; Order <br />
                        Industry
                      </p>
                    </a>
                  </div>
                  <a href="#"></a>
                </div>
                <div
                  className="icon-set aos-init aos-animate"
                  data-aos="zoom-in"
                  data-aos-delay=".10s"
                >
                  <div className="work-card">
                    <a href="#">
                      <div className="icon-bg">
                        <img
                          src="https://www.svgrepo.com/show/454143/education-learning-28.svg"
                          data-src="https://www.svgrepo.com/show/454143/education-learning-28.svg"
                          className="img-fluid lazyload"
                          alt="Education web design"
                        />
                      </div>
                      <p>
                        Education <br />
                        Industry
                      </p>
                    </a>
                  </div>
                </div>
                <div
                  className="icon-set aos-init aos-animate"
                  data-aos="zoom-in"
                  data-aos-delay=".12s"
                >
                  <div className="work-card">
                    <a href="#">
                      <div className="icon-bg">
                        <img
                          src="https://www.svgrepo.com/show/518297/onshape.svg"
                          data-src="https://www.svgrepo.com/show/518297/onshape.svg"
                          className="img-fluid lazyload"
                          alt="Manufacturing web development"
                        />
                      </div>
                      <p>
                        Manufacturing <br />
                        Industry
                      </p>
                    </a>
                  </div>
                </div>
                <div
                  className="icon-set aos-init aos-animate"
                  data-aos="zoom-in"
                  data-aos-delay=".14s"
                >
                  <div className="work-card">
                    <a href="#">
                      <div className="icon-bg">
                        <img
                          src="https://www.svgrepo.com/show/308037/real-estate-market.svg"
                          data-src="https://www.svgrepo.com/show/308037/real-estate-market.svg"
                          className="img-fluid lazyload"
                          alt="Real Estate web design and development"
                        />
                      </div>
                      <p>
                        Real Estate <br />
                        Industry
                      </p>
                    </a>
                  </div>
                  <a href="#"></a>
                </div>
                <div
                  className="icon-set aos-init aos-animate"
                  data-aos="zoom-in"
                  data-aos-delay=".16s"
                >
                  <div className="work-card">
                    <a href="#">
                      <div className="icon-bg">
                        <img
                          src="https://www.svgrepo.com/show/509379/maximize.svg"
                          data-src="https://www.svgrepo.com/show/509379/maximize.svg"
                          className="img-fluid lazyload"
                          alt="Non Profit website design"
                        />
                      </div>
                      <p>
                        Non Profit <br />
                        Industry
                      </p>
                    </a>
                  </div>
                  <a href="#"></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className="section section10"
        id="digital-1"
        style={{ background: "#f7f7f7" }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10 pt-3 text-center">
              <p
                className="leadtxt2 text-dark aos-init aos-animate"
                data-aos="fade-down"
                data-aos-delay={100}
        >
             Supercharge Your Business Growth!  {" "}
              </p>
              <p
                className="sub-cont_txt mb-4 aos-init aos-animate"
                data-aos="fade-down"
                data-aos-delay={200}
              >
                Unlock Your Business Potential with our Cutting-Edge Web Designs! Whether you're starting a visionary venture or expanding your existing one, our unique, feature-loaded, and affordable 360° web design solutions are tailor-made for businesses of all sizes. Unleash your full potential with us today!{" "}
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12 col-12">
              <div id="gal-results" className>
                <div className="row justify-content-center align-items-center">
                  <div className="col-lg-5 col-12" data-aos-delay={100}>
                    <div id="gallery-view">
                      <div id="gal-slide1">
                        <div className="gal-slide-img">
                          <div className="row">
                            <div className="col-lg-12 col-12">
                              <img
                                src="https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=600"
                                data-src="https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=600"
                                alt="Web design for small business"
                                className="img-fluid lazyload"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="gal-slide-img">
                          <div className="row">
                            <div className="col-lg-12 col-12">
                              <img
                                src="https://images.pexels.com/photos/5833775/pexels-photo-5833775.jpeg?auto=compress&cs=tinysrgb&w=600"
                                data-src="https://images.pexels.com/photos/5833775/pexels-photo-5833775.jpeg?auto=compress&cs=tinysrgb&w=600"
                                alt="website design for start up"
                                className="img-fluid lazyload"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="gal-slide-img">
                          <div className="row">
                            <div className="col-lg-12 col-12">
                              <img
                                src="https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=600"
                                data-src="https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=600"
                                alt="website development for small business"
                                className="img-fluid lazyload"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-7 col-12" data-aos-delay={100}>
                    <div className="galbox">
                      <div id="gallery-thumbs">
                        <div id="gal-thumb1">
                          <div className="gal-slide-thumb">
                            <div className="redboxTxt">
                              <p className="slider-leadtxt mb-0">
                                Starting Small?
                              </p>
                              <span className="sub-cont_txt ">
                              Got a Winning Small Business Idea? Sell Online Now! If not, our web development for small businesses can help you discover the perfect path to success!
                              </span>
                              <p className="cont3">
                              Bring us your Business Ideas, and We'll Create Stunning, Intuitive, and Affordable Solutions!{" "}
                                <a
                                  href="#"
                                  style={{ color: "#1778f2" }}
                                  target="_blank"
                                >
                                  {" "}
                                  Elevate Your Start-Up with Exceptional Website Design!
                                </a>{" "}
                                or Empower Your Small Business to Amplify Your Ideas Loud and Wide!{" "}
                              </p>
                            </div>
                          </div>
                          <div className="gal-slide-thumb">
                            <div className="redboxTxt">
                              <p className="slider-leadtxt mb-0">
                                Want to Lead Big?
                              </p>
                              <span className="sub-cont_txt ">
                              Transform Your Current Website into a High-Value Digital Asset!
                              </span>
                              <p className="cont3">
                              Don't Settle for Mediocrity - Stand Out with Us! Explore our...{" "}
                                <a
                                  href="#"
                                  style={{ color: "#1778f2" }}
                                  target="_blank"
                                >
                                 Revolutionary Website Development Services
                                </a>{" "}
                                Unlock Your Midsize Business's Potential with Our Exceptional Solutions, Paving the Way to Become a Leading Brand.{" "}
                              </p>
                            </div>
                          </div>
                          <div className="gal-slide-thumb">
                            <div className="redboxTxt">
                              <p className="slider-leadtxt mb-0">
                              Embrace Limitless Possibilities!
                              </p>
                              <span className="sub-cont_txt ">
                              Expand Your Digital Assets - There's Always Room for More Work!
                              </span>
                              <p className="cont3">
                              Unlock Infinite Potential - Continuously Expand and Flourish with Our Premium Enterprise-Level Solutions!{" "}
                                <a
                                  href="#"
                                  style={{ color: "#1778f2" }}
                                  target="_blank"
                                >
                                  Exquisite Web Design Solutions
                                </a>{" "}
                                Embark on a Digital Identity Transformation - Get a Headstart with our Excellent Solutions.{" "}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-12 col-sm-12 text-center mt-5">
              <p className="home-started-btn mb-0">
                <a
                  className="text-white"
                  onclick="ga('send', 'event', 'Home Page Have Your Every Business', 'Work with us');"
                  href="#"
                >
                  Work With Us
                </a>{" "}
              </p>
            </div>
          </div>
        </div>
      </section>
      <section
        className="section section7"
        id="testibox"
        style={{
          background: "#ffff",
          position: "relative",
          padding: "140px 0px",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <img
                src="https://images.pexels.com/photos/5950095/pexels-photo-5950095.jpeg?auto=compress&cs=tinysrgb&w=600"
                data-src="https://images.pexels.com/photos/5950095/pexels-photo-5950095.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="best web design firms"
                className="texttiImg lazyload"
              />
            </div>
            <div className="col-lg-7">
              <div
                id="carouselExampleIndicators2"
                className="carousel slide"
                data-ride="carousel"
              >
                <span
                  className="yellow pb-3 clientsaytxt"
                  style={{ display: "block" }}
                >
                  Testimonials
                </span>
                <h4 className="leadtxt2 text-dark pb-5">
                  What our clients say
                </h4>
                <ol className="carousel-indicators">
                  <li
                    data-target="#carouselExampleIndicators2"
                    data-slide-to={0}
                    className="active"
                  />
                  <li
                    data-target="#carouselExampleIndicators2"
                    data-slide-to={1}
                  />
                  <li
                    data-target="#carouselExampleIndicators2"
                    data-slide-to={2}
                  />
                  <li
                    data-target="#carouselExampleIndicators2"
                    data-slide-to={3}
                  />
                  <li
                    data-target="#carouselExampleIndicators2"
                    data-slide-to={4}
                     />
                </ol>
                <div className="carousel-inner" role="listbox">
                  <div className="carousel-item active">
                    <div className="row">
                      <div className="col-lg-1" />
                      <div className="col-lg-10">
                        <p className="cont text-dark">
                          <quote>"</quote>GAMAYAS is an extraordinary team of developers and designers who excel in their capabilities and responsiveness. Their out-of-the-box thinking sets them apart as they tackled the task of redesigning our old website. Their complete overhaul solutions breathed new life into our online presence, resulting in a significantly expanded client base. We were truly impressed by their creativity and talent, making them a highly recommended choice for any project.
                        </p>
                        <hr
                          style={{
                            borderTop: "1px solid rgb(255 255 255 / 30%)",
                          }}
                    />
                        <h5 className=" text-dark">Ravi Kumar.K </h5>
                      </div>
                      <div className="col-lg-1" />
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="row">
                      <div className="col-lg-1" />
                      <div className="col-lg-10">
                        <p className="cont text-dark">
                          <quote>"</quote>GAMAYAS delivered timely and high-quality solutions that perfectly met our needs. With a small project on our hands and a tight budget, we needed someone who could act quickly, and they exceeded our expectations. Their understanding of our business requirements resulted in an outcome that went above and beyond what we had hoped for. Moreover, their performance marketing strategy proved to be exceptionally effective, delivering excellent results within any budget constraints. We are thrilled with their services and highly recommend them for their expertise and efficiency.
                        </p>
                        <hr
                          style={{
                            borderTop: "1px solid rgb(255 255 255 / 30%)",
                          }}
                      />
                        <h5 className="text-dark">Samba Murthy.L</h5>
                      </div>
                      <div className="col-lg-1" />
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="row">
                      <div className="col-lg-1" />
                      <div className="col-lg-10">
                        <p className="cont text-dark">
                          <quote>"</quote> GAMAYAS offers outstanding full-suite digital solutions that have left us thoroughly satisfied. Their services were prompt and unmatched, truly setting them apart. Utilizing Agile development and a comprehensive 360-degree marketing approach, they swiftly helped us refine our requirements. Throughout the process, the team diligently worked on fulfilling our needs, even considering our time zones, and valued our input genuinely. Their unique selling point lies in their commitment to doing what is best, rather than opting for the easier route. We are delighted with their performance and highly recommend GAMAYAS for their exceptional dedication and commitment to excellence.
                        </p>
                        <hr
                          style={{
                            borderTop: "1px solid rgb(255 255 255 / 30%)",
                          }}
                      />
                        <h5 className=" text-dark">Sasi Kiran</h5>
                      </div>
                      <div className="col-lg-1" />
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="row">
                      <div className="col-lg-1" />
                      <div className="col-lg-10">
                        <p className="cont text-dark">
                          <quote>"</quote>For quite a while now, we have had the pleasure of partnering with Gamayas's level-headed marketers to fulfill our brand outreach requirements. Their remarkable strategies, innovative tools, and customized landing pages have significantly boosted our conversion rates. Witnessing outstanding engagement and user retention has directly contributed to our increased profit streams. We consider ourselves fortunate to have such talented marketers on board, always ready to go beyond the norm and push the boundaries of success.
                        </p>
                        <hr
                          style={{
                            borderTop: "1px solid rgb(255 255 255 / 30%)",
                          }}
                      />
                        <h5 className=" text-dark">Krishnamoorthi </h5>
                      </div>
                      <div className="col-lg-1" />
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="row">
                      <div className="col-lg-1" />
                      <div className="col-lg-10">
                        <p className="cont text-dark">
                          <quote>"</quote> It has been a long time since we have
                          been partnering with Gamayas’s level-headed marketers
                          to meet our brand outreach needs. Their amazing
                          strategies, tools, and custom landing pages have
                          increased our conversion rates. We could see amazing
                          engagement and user retention, which is adding to our
                          profit streams. Lucky to rope in such talented
                          marketers always ready to push boundaries.
                        </p>
                        <hr
                          style={{
                            borderTop: "1px solid rgb(255 255 255 / 30%)",
                          }}
                        />
                        <h5 className=" text-dark">Prasanth Kumar </h5>
                      </div>
                      <div className="col-lg-1" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer id="footer" itemScope itemType="https://schema.org/WPFooter"  style={{ backgroundColor: '#173a59' }}>
        <div className="footer-top" style={{ backgroundColor: '#225380' }}>
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-6">
                <div className="footer-info">
                  <h3 className="mb-0">
                    <img
                      src="images/gamay.png"
                      srcSet="images/gamay.png"
                      className="white-logo"
                      alt="logo16"
                      style={{ marginLeft: "-1em", paddingBottom: "20px" }}
                    />
                  </h3>
                  <p>
                    GAMAYAS Plot No: 1, AP colony, Mallapur, Hyderabad.
                    PIN:-500076.
                    <br />
                    <strong>Phone:</strong>
                    +917801073175,
                    <br />
                    +917801073176
                    <br />
                    {/* <strong>Email:</strong> info@janbaskdigitaldesign.com<br> */}
                  </p>
                  <div className="social-links mt-3">
                    <a href="#" className="twitter">
                      <i className="fa fa-twitter" />
                    </a>
                    <a href="#" className="facebook">
                      <i className="fa fa-facebook" />
                    </a>
                    <a href="#" className="instagram">
                      <i className="fa fa-sitemap" />
                    </a>
                    <a href="#" className="linkedin">
                      <i className="fa fa-linkedin" />
                    </a>
                    <a href="#" className="linkedin">
                      <i className="fa fa-instagram" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-6 footer-links">
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start',marginLeft: '4em' }}>
                <h4  style={{ marginBottom: '0.5em' }}>Company</h4>
                <ul  className="footer-links" style={{ listStyleType: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column' }}>
                  <li style={{ marginBottom: '0.5em', marginLeft: '0' }}>
                    <i className="fa fa-angle-right" />
                    <a href="index.html">Home</a>
                  </li>
                  <li style={{ marginBottom: '0.5em', marginLeft: '0' }}>
                    <i className="fa fa-angle-right" />
                    <a href="about-us.html">About us</a>
                  </li>
                  <li style={{ marginBottom: '0.5em', marginLeft: '0' }}>
                    <i className="fa fa-angle-right" />{" "}
                    <a href="#">Portfolio</a>
                  </li>
                  {/* <li><i class="fa fa-angle-right"></i> <a href="#">Blogs</a></li> */}
                  <li style={{ marginBottom: '0.5em', marginLeft: '0' }}>
                    <i className="fa fa-angle-right" />
                    <a href="contact-us.html">Contact Us</a>
                  </li>
                </ul>
                </div>
                
              </div>
              <div className="col-lg-3 col-md-6 footer-links">
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start',marginLeft: '4em' }}>
                <h4 style={{ marginBottom: '0.5em' }}>Our Focus Area</h4>
                <ul className="footer-links" style={{ listStyleType: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column' }}>
                  <li  style={{ marginBottom: '0.5em', marginLeft: '0' }}>
                    <i className="fa fa-angle-right" />
                    <a href="website-design-services.html">Web Design</a>
                  </li>
                  <li  style={{ marginBottom: '0.5em', marginLeft: '0' }}>
                    <i className="fa fa-angle-right" />
                    <a href="website-development-services.html">
                      Web Development
                    </a>
                  </li>
                  <li  style={{ marginBottom: '0.5em', marginLeft: '0' }}>
                    <i className="fa fa-angle-right" />
                    <a href="mobile-app-development-services.html">
                      Mobile Apps Development
                    </a>
                  </li>
                  <li  style={{ marginBottom: '0.5em', marginLeft: '0' }}>
                    <i className="fa fa-angle-right" />
                    <a href="Digitalmarketing.html.html">Digital Marketing</a>
                  </li>
                  {/* <li><i class="fa fa-angle-right"></i> <a href="">Graphic Design</a></li> */}
                </ul>
                </div>
                
              </div>
              <div className="col-lg-4 col-md-6 footer-links">
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start',marginLeft: '4em' }}  >
                <h4 style={{ marginBottom: '0.5em' }}>Industries We Serve</h4>
                <ul className="footer-links" style={{ listStyleType: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column' }}>
                  {/* <li> <i class="fa fa-angle-right"></i> <a href="">Non-Profit Industry</a></li> */}
                  <li style={{ marginBottom: '0.5em', marginLeft: '0' }}>
                    <i className="fa fa-angle-right" />
                    <a href="it-website-design.html">IT Industry</a>
                  </li>
                  <li style={{ marginBottom: '0.5em', marginLeft: '0' }}>
                    <i className="fa fa-angle-right" />
                    <a href="healthcare-website-design.html">
                      Healthcare Industry
                    </a>
                  </li>
                  <li style={{ marginBottom: '0.5em', marginLeft: '0' }}>
                    <i className="fa fa-angle-right" />
                    <a href="manufacturing-website-design.html">
                      Manufacturing Industry
                    </a>
                  </li>
                  <li style={{ marginBottom: '0.5em', marginLeft: '0' }}>
                    <i className="fa fa-angle-right" />
                    <a href="financial-services-website-design.html">
                      Financial Services Industry
                    </a>
                  </li>
                </ul>

                </div>
                
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="copyright">
            <strong>
              <span> © </span>
            </strong>
            All Rights Reserved | Powered By
            <a
              href="https://mkdigitalmare.com/"
              style={{ color: "#d33536" }}
              target="_blank"
            >
              MK DIGITALMARE PVT LTD
            </a>
          </div>
        </div>
      </footer>
      <div
        className="modal fade"
        id="myModal78"
        role="dialog"
        style={{ display: "none" }}
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div
              className="modal-header"
              style={{
                background: "transparent",
                borderBottom: "none !important",
                padding: "10px 10px",
                position: "relative",
              }}
            >
              <button
                type="button"
                className="close close-form"
                data-dismiss="modal"
              >
                ×
              </button>
            </div>
            <div className="row">
              <div className="col-md-12 col-lg-12 col-sm-8 col-md-12">
                <h3 className="smalltxt" align="center">
                  Let’s Hear Out Your Plan!
                </h3>
                <div className="main">
                  <div className="main-login" style={{ boxShadow: "unset" }}>
                    <form
                      id="contact_form78"
                      method="post"
                      action
                      noValidate="novalidate"
                    >
                      <div className="form-group col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <input
                          type="text"
                          className="form-control"
                          name="name"
                          id="name"
                          placeholder="Name"
                        />
                      </div>
                      <div className="form-group col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <input
                          type="text"
                          className="form-control"
                          name="email"
                          id="email"
                          placeholder="Email ID"
                        />
                      </div>
                      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 form-group">
                        <div
                          className="col-lg-12 col-md-12 col-sm-12 col-xs-12"
                          style={{ padding: 0 }}
                        >
                          <input
                            type="text"
                            className="form-control"
                            style={{}}
                            name="phone"
                            id="phone"
                            placeholder="Phone No."
                            required
                            aria-required="true"
                          />
                        </div>
                      </div>
                      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 form-group">
                        <textarea
                          className="form-control"
                          name="message"
                          rows={5}
                          data-rule="required"
                          data-msg="Please write something for us"
                          placeholder="Message"
                          defaultValue={""}
                        />
                      </div>
                      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 form-group">
                        <button
                          onclick="ga('send', 'event', 'Home page', 'Enquire Now');"
                          type="submit"
                          name="submit"
                          className="btn btn-primary"
                          style={{
                            width: "100%",
                            background:
                              "linear-gradient(to right,#d33536 50%,#e03535)",
                            color: "#fff",
                            borderRadius: "28px",
                            margin: "0 auto",
                            display: "table",
                          }}
                        >
                          Enquire Now
                        </button>
                      </div>
                      <div
                        className="col-lg-12 col-md-12 col-sm-12 col-xs-12 form-group"
                        id="msg_pop"
                      />
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id="basicModal"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="basicModal"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div
              className="modal-header"
              style={{
                background: "transparent",
                borderBottom: "none !important",
                padding: "0px 10px",
                position: "relative",
              }}
            >
              <button
                type="button"
                className="close close-form"
                data-dismiss="modal"
              >
                ×
              </button>
            </div>
            <div
              className="col-md-12 col-lg-12 col-sm-12 col-md-12"
              style={{ paddingLeft: "0px", paddingRight: "0px" }}
            >
              <img
                src="images/get-popup.jpg"
                srcSet="images/get-popup.webp"
                className="img-fluid"
                style={{ borderRadius: "6px" }}
                alt="get-popup"
              />
              <h3 className="smalltxt" align="center">
                Schedule Your No-Cost Consultation &amp; Discuss Your Goals.
              </h3>
            </div>
            <div className="col-md-12 col-lg-12 col-sm-12 col-md-12">
              <div className="main">
                <div className="main-login" style={{ boxShadow: "unset" }}>
                  <form
                    id="contact_form8"
                    method="post"
                    action
                    noValidate="novalidate"
                  >
                    <div className="form-group col-lg-12 col-md-12 col-sm-12 col-xs-12">
                      <input
                        type="text"
                        className="form-control"
                        name="name"
                        id="name"
                        placeholder="Name"
                      />
                    </div>
                    <div className="form-group col-lg-12 col-md-12 col-sm-12 col-xs-12">
                      <input
                        type="text"
                        className="form-control"
                        name="email"
                        id="email"
                        placeholder="Email ID"
                      />
                    </div>
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 form-group">
                      <div
                        className="col-lg-12 col-md-12 col-sm-12 col-xs-12"
                        style={{ padding: 0 }}
                      >
                        <input
                          type="text"
                          className="form-control"
                          style={{}}
                          name="phone"
                          id="phone"
                          placeholder="Phone No."
                          required
                          aria-required="true"
                        />
                      </div>
                    </div>
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 form-group">
                      <input
                        style={{}}
                        className="form-control"
                        name="message"
                        id="requirment"
                        placeholder="Your Requirements"
                        defaultValue
                        type="text"
                      />
                    </div>
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 form-group">
                      <input
                        type="hidden"
                        name="form_name"
                        defaultValue="Home-new Popup-Form"
                      />
                      <input
                        type="hidden"
                        name="function"
                        defaultValue="Home-new Popup-Form"
                      />
                      <button
                        onclick="ga('send', 'event', 'Home page', 'Enquire Now');"
                        type="submit"
                        name="submit"
                        className="btn btn-primary"
                        style={{
                          width: "100%",
                          background:
                            "linear-gradient(to right,#d33536 50%,#e03535)",
                          color: "#fff",
                          borderRadius: "28px",
                          margin: "0 auto",
                          display: "table",
                        }}
                      >
                        Enquire Now
                      </button>
                    </div>
                    <div
                      className="col-lg-12 col-md-12 col-sm-12 col-xs-12 form-group"
                      id="msg_pop"
                    />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home2;
