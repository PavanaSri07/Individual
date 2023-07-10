import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import $ from "jquery";
import "./About.css"
const C1 = () => {
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
      <style
        dangerouslySetInnerHTML={{
          __html:
            "\n  @media (min-width: 1200px) and (max-width: 1299px){\n.nav-menu a {\n    font-size: 21px !important;\n}\n  }\n  .nav-menu a {\n    display: block;\n    position: relative;\n    color: #fff;\n    transition: 0.3s;\n    font-size: 15px;\n    font-family: 'Poppins', sans-serif;\n    font-weight: 700 !important;\n    padding: 0 3px;\n}\n\n@media(max-width:380px){\n    .Few-nx ul.ticklist li i img {\n    width: 42px;\n    position: absolute;\n    left: 4px !important;\n}\n}\n\n@media(max-width:414px){\n    .Few-nx ul.ticklist li i img {\n    width: 42px;\n    position: absolute;\n    left: 4px !important;\n}\n}\n",
        }}
      />
      {/* ======= Header ======= */}

      {/*Section_id-614*/}
      <section
        id="about-banner"
        style={{
          background: "#fff",
          position: "relative",
          overflow: "hidden",
          height: "540px !important",
          paddingTop: "148px",
        }}
      >
        <div className="container">
          <img
            src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
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
                  Greetings! We Are <span style={{ color: "#d33536" }}> Gamayas</span>{" "}
                </h1>
                <p
                  className="slid-cont2 text-dark  aos-init aos-animate"
                  data-aos="fade-down"
                  data-aos-anchor-placement="top-bottom"
                  style={{fontSize:"1.2rem" ,fontWeight:"bold",}}>
                  Discover the Power of Synergy: Uniting 'Your Ideas' with Our Cutting-Edge Digital Solutions for Business Transformation – From 'Now' to 'Wow!!{" "}
                </p>
                <p className="cont">
                  {" "}
                  Welcome to Gamayas: A Decades-Experienced Web Design & Development Company in Virginia, Powering Your Business with Global Connectivity.

At Gamayas, we take pride in delivering result-oriented Digital Marketing, eCommerce Development, Enterprise-Grade CMS Solutions, SEO & PPC, CRO, and Mobile App Development services to businesses of all sizes, vibes, and industries.

With our wealth of experience spanning decades, we have honed our skills to provide you with top-notch digital solutions that can transform your business and propel it to new heights.

Partner with Gamayas today and let us help you achieve digital excellence that knows no bounds. {" "}
                </p>
                <p
                  className="home-started-btn mb-0"
                  style={{ margin: "30px auto 0 auto" }}
                >
                  <a
                    className="text-white"
                    onclick="ga('send', 'event', 'About Page Hey! We Are JanBask Digital Design', 'Let’s  Hear Your Idea');"
                    href="#"
                  >
                    Let’s Hear Your Idea
                  </a>{" "}
                </p>
              </div>
              <div className="col-lg-3 col-12">
                <img
                  src="https://images.pexels.com/photos/3194518/pexels-photo-3194518.jpeg?auto=compress&cs=tinysrgb&w=600"
                  data-src="https://images.pexels.com/photos/3194518/pexels-photo-3194518.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="aboutban1"
                  className="img-fluid aboutbannerImg2 lazyload"
                />
              </div>
              <div className="col-lg-3 col-12 pl-0">
                <div className="video-section2">
                  <video poster id="myVideo4" loop autoPlay muted>
                    <source
                      src="https://player.vimeo.com/external/374182731.sd.mp4?s=99bede83f7801951e80d21107efe07208e37481a&profile_id=164&oauth2_token_id=57447761"
                      type="video/mp4"
                    />
                    <source
                      src="https://player.vimeo.com/external/374182731.sd.mp4?s=99bede83f7801951e80d21107efe07208e37481a&profile_id=164&oauth2_token_id=57447761"
                      type="video/webm"
                    />
                  </video>
                  <div className="pool-bx">
                    <p className="cont font-italic text-white">
                    Enter the world of Gamayas, where exceptional individuals unite as transformers to enhance your digital presence. With relentless creativity and a drive for excellence, we push boundaries and explore innovative strategies. Our team crafts captivating online identities that leave a lasting impact, making your brand stand out. Embrace the transformative journey with Gamayas and experience unparalleled solutions that elevate your brand to new heights in the digital landscape.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section section1" id="aboutsection1">
        <div className="container">
          <img
            src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
            data-src="https://www.janbaskdigitaldesign.com/assets21/webpimages/lines.webp"
            alt="lines"
            className="img-fluid about-line lazyload"
          />
          <img
            src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
            data-src="https://www.janbaskdigitaldesign.com/assets21/webpimages/dots.webp"
            alt="dots"
            className="img-fluid about-dots lazyload"
          />
          <div className="row align-items-center">
            <div className="col-lg-5 pr-0">
              <div
                className="pera aos-init aos-init aos-animate"
                data-aos="fade-right"
                data-aos-delay={100}
                id="counter"
              >
                <h4 className="podt sub-cont_txt text-white">
                  {" "}
                  <span className="count percent" data-count={10}>
                    0
                  </span>
                  <span style={{ float: "left", display: "block" }}>+</span>
                  YEARS OF EXPERIENCE
                </h4>
              </div>
              <img
                loading="lazy"
                src="https://media.istockphoto.com/id/1367899893/photo/multi-racial-diverse-group-of-people-working-with-paperwork-on-a-board-room-table-at-a.jpg?b=1&s=612x612&w=0&k=20&c=ahLWgjnDYlGvtLKVMc_GXsOGRdOtCbmgFYem4RTWGFA="
                data-src="https://media.istockphoto.com/id/1367899893/photo/multi-racial-diverse-group-of-people-working-with-paperwork-on-a-board-room-table-at-a.jpg?b=1&s=612x612&w=0&k=20&c=ahLWgjnDYlGvtLKVMc_GXsOGRdOtCbmgFYem4RTWGFA="
                alt="aboutnew-Img1"
                className="img-fluid about-img1 lazyload"
              />
              <img
                loading="lazy"
                src="https://images.pexels.com/photos/6476193/pexels-photo-6476193.jpeg?auto=compress&cs=tinysrgb&w=600"
                data-src="https://images.pexels.com/photos/6476193/pexels-photo-6476193.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="aboutnew-Img2"
                className="img-fluid about-img2 up-down lazyload"
              />
            </div>
            <div className="col-lg-7">
              <div className="agencytxt">
                <p
                  className="yellow mb-1 aos-init aos-init aos-animate"
                  data-aos="fade-down"
                  data-aos-delay={100}
                 style={{fontSize:"1.2rem" ,fontWeight:"bolder",}}>
                  What We Do?
                </p>
                <p
                  className="leadtxt2 text-dark aos-init aos-init aos-animate"
                  data-aos="fade-down"
                  data-aos-delay={200}
                >
                  {" "}
                  Collaborating
                  <span style={{ color: "#d33536" }}>
                    {" "}
                    Online Solutions
                  </span>{" "}
                  is Our Specialty!
                </p>
                <p
                  className=" sub-cont_txt text-dark aos-init aos-init aos-animate font-italic"
                  data-aos="fade-down"
                  data-aos-delay={300}
                >
                  {" "}
                  Empowering Ideas, Delivering Results.

We are the multidisciplinary team that turns your concepts into revenue-centric digital assets. With a can-do spirit, we drive innovation and tangible outcomes, connecting your business to digital success. Trust us for web design, development, digital marketing, eCommerce solutions, and more. Let's unlock your business's true potential together.
                </p>
                <p
                  className="cont line-left mb-3 aos-init aos-init aos-animate"
                  data-aos="fade-down"
                  data-aos-delay={400}
                >
                 Meet our in-house team of highly skilled, super-talented designers, coders, marketers, and business analysts. With their technical expertise, business acumen, and boundless creativity, we craft a seamless digital pathway for your online customers. They will enjoy your exceptional products, allowing you to capture their ultimate attention and drive profitable transactions. Your success is our mission, and we take pride in delivering digital solutions that make a difference.
                </p>
                <ul className="ticklist blacktick mb-4">
                  <li
                    className="cont text-dark aos-init aos-init aos-animate"
                    data-aos="fade-down"
                    data-aos-delay={100}
                  >
                   Empowering Businesses of All Sizes and Industries with Tailored Solutions.{""}
                  </li>
                  <li
                    className="cont text-dark aos-init aos-animate"
                    data-aos="fade-down"
                    data-aos-delay={200}
                  >
                    High-Performing Websites and Apps Engineered for Maximum Conversions.{" "}
                  </li>
                  <li
                    className="cont text-dark aos-init aos-animate"
                    data-aos="fade-down"
                    data-aos-delay={300}
                  >
                    Streamlined Advertising Expenses
                  </li>
                  <li
                    className="cont text-dark aos-init aos-animate"
                    data-aos="fade-down"
                    data-aos-delay={400}
                  >
                    Dynamic Approach with Rapid Delivery{" "}
                  </li>
                </ul>
                <div className="about-features mb-4">
                  <div className="row">
                    <div className="col-md-6 mb-xs-30">
                      <div className="d-flex align-items-center">
                        <div className="af-icon">
                          <img
                            loading="lazy"
                            src="https://www.svgrepo.com/show/412513/succeed.svg"
                            data-src="https://www.svgrepo.com/show/412513/succeed.svg"
                            alt="web designing company services"
                            className="img-fluid about-img3 lazyload"
                          />
                        </div>
                        <div className="af-title">
                        Crafting <br></br>Your Dream
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="d-flex align-items-center">
                        <div className="af-icon">
                          <img
                            loading="lazy"
                            src="https://www.svgrepo.com/show/421310/growth-idea-light.svg"
                            data-src="https://www.svgrepo.com/show/421310/growth-idea-light.svg"
                            alt="web designing company services"
                            className="img-fluid about-img4 lazyload"
                          />
                        </div>
                        <div className="af-title">
                          Ensuring
                          <br />
                          Business Growth
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="home-started-btn">
                  <a
                    onclick="ga('send', 'event', 'About Page Co-Creating Digital ', 'Get in touch');"
                    href="#"
                    className="text-white"
                  >
                    Get In Touch
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className="section section2"
        id="aboutsection2"
        style={{
          position: "relative",
          zIndex: 1,
          background: "#f7f7f7",
          padding: "0px",
        }}
      >
        <div className="container-fluid p-0">
          <div className="row">
            <div className="col-lg-4">
              {/* <div class="pera aos-init aos-init aos-animate" data-aos="fade-right" data-aos-delay="100" id="counter">
          <h4 class="podt sub-cont_txt text-white"> <span class="count percent" data-count="10">0</span><span style="float:left; display:block;">+</span>YEARS OF EXPERIENCE</h4>
        </div> */}
              <img
                loading="lazy"
                src="https://images.pexels.com/photos/6476245/pexels-photo-6476245.jpeg?auto=compress&cs=tinysrgb&w=600"
                data-src="https://images.pexels.com/photos/6476245/pexels-photo-6476245.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="aboutnew-Img1"
                className="img-fluid about-img1 lazyload"
              />
              <img
                loading="lazy"
                src="https://images.pexels.com/photos/6930549/pexels-photo-6930549.jpeg?auto=compress&cs=tinysrgb&w=600"
                data-src="https://images.pexels.com/photos/6930549/pexels-photo-6930549.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="aboutnew-Img2"
                className="img-fluid about-img2 up-down lazyload"
              />
            </div>
            <div className="col-lg-8  ">
              <div
                className="white-aria aos-init aos-animate"
                data-aos="fade-left"
                data-aos-delay={300}
              >
                <h4
                  className="leadtxt2 text-dark text-left aos-init aos-init aos-animate mb-4"
                  data-aos="fade-down"
                  data-aos-delay={200}
                >
                  Harnessing a robust tech stack, we craft exceptional, tailor-made  {" "}
                  <span style={{ color: "#d33536" }}> IT Solutions</span>for your specific needs.
                </h4>
                <div className="col-lg-12 py2">
                  <ul className="tabs">
                    <li className="tab-link current" data-tab="tab-1">
                    Innovation
                    </li>
                    <li className="tab-link" data-tab="tab-2">
                      
                          Reputation
                    </li>
                    <li className="tab-link" data-tab="tab-3">
                    Promotion
                    </li>
                  </ul>
                  <div id="tab-1" className="tab-content current">
                    <div className="row justify-content-center">
                      <div className="col-lg-2">
                        {" "}
                        <img
                          loading="lazy"
                          src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                          data-src="https://www.janbaskdigitaldesign.com/assets21/webpimages/dev-logo1.webp"
                          alt="dev-logo1"
                          className="img-fluid about-img4 lazyload"
                        />
                      </div>
                      <div className="col-lg-2">
                        {" "}
                        <img
                          loading="lazy"
                          src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                          data-src="https://www.janbaskdigitaldesign.com/assets21/webpimages/dev-logo2.webp"
                          alt="dev-logo2"
                          className="img-fluid about-img4 lazyload"
                        />
                      </div>
                      <div className="col-lg-2">
                        {" "}
                        <img
                          loading="lazy"
                          src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                          data-src="https://www.janbaskdigitaldesign.com/assets21/webpimages/dev-logo3.webp"
                          alt="dev-logo3"
                          className="img-fluid about-img4 lazyload"
                        />
                      </div>
                      <div className="col-lg-2">
                        {" "}
                        <img
                          loading="lazy"
                          src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                          data-src="https://www.janbaskdigitaldesign.com/assets21/webpimages/dev-logo4.webp"
                          alt="dev-logo4"
                          className="img-fluid about-img4 lazyload"
                        />
                      </div>
                      <div className="col-lg-2">
                        {" "}
                        <img
                          loading="lazy"
                          src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                          data-src="https://www.janbaskdigitaldesign.com/assets21/webpimages/dev-logo5.webp"
                          alt="dev-logo5"
                          className="img-fluid about-img4 lazyload"
                        />
                      </div>
                      <div className="col-lg-2">
                        {" "}
                        <img
                          loading="lazy"
                          src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                          data-src="https://www.janbaskdigitaldesign.com/assets21/webpimages/dev-logo6.webp"
                          alt="dev-logo6"
                          className="img-fluid about-img4 lazyload"
                        />
                      </div>
                      <div className="col-lg-2">
                        {" "}
                        <img
                          loading="lazy"
                          src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                          data-src="https://www.janbaskdigitaldesign.com/assets21/webpimages/dev-logo7.webp"
                          alt="dev-logo7"
                          className="img-fluid about-img4 lazyload"
                        />
                      </div>
                      <div className="col-lg-2">
                        {" "}
                        <img
                          loading="lazy"
                          src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                          data-src="https://www.janbaskdigitaldesign.com/assets21/webpimages/dev-logo8.webp"
                          alt="dev-logo8"
                          className="img-fluid about-img4 lazyload"
                        />
                      </div>
                      <div className="col-lg-2">
                        {" "}
                        <img
                          loading="lazy"
                          src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                          data-src="https://www.janbaskdigitaldesign.com/assets21/webpimages/dev-logo9.webp"
                          alt="dev-logo9"
                          className="img-fluid about-img4 lazyload"
                        />
                      </div>
                      <div className="col-lg-2">
                        {" "}
                        <img
                          loading="lazy"
                          src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                          data-src="https://www.janbaskdigitaldesign.com/assets21/webpimages/dev-logo10.webp"
                          alt="dev-logo10"
                          className="img-fluid about-img4 lazyload"
                        />
                      </div>
                      <div className="col-lg-2">
                        {" "}
                        <img
                          loading="lazy"
                          src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                          data-src="https://www.janbaskdigitaldesign.com/assets21/webpimages/dev-logo11.webp"
                          alt="dev-logo11"
                          className="img-fluid about-img4 lazyload"
                        />
                      </div>
                      <div className="col-lg-2">
                        {" "}
                        <img
                          loading="lazy"
                          src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                          data-src="https://www.janbaskdigitaldesign.com/assets21/webpimages/dev-logo12.webp"
                          alt="dev-logo12"
                          className="img-fluid about-img4 lazyload"
                        />
                      </div>
                    </div>
                  </div>
                  <div id="tab-2" className="tab-content">
                    <div className="row justify-content-center">
                      <div className="col-lg-2">
                        {" "}
                        <img
                          loading="lazy"
                          src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                          data-src="https://www.janbaskdigitaldesign.com/assets21/webpimages/brandbx-logo1.webp"
                          alt="brandbx-logo1"
                          className="img-fluid about-img4 lazyload"
                        />
                      </div>
                      <div className="col-lg-2">
                        {" "}
                        <img
                          loading="lazy"
                          src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                          data-src="https://www.janbaskdigitaldesign.com/assets21/webpimages/brandbx-logo2.webp"
                          alt="brandbx-logo2"
                          className="img-fluid about-img4 lazyload"
                        />
                      </div>
                      <div className="col-lg-2">
                        {" "}
                        <img
                          loading="lazy"
                          src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                          data-src="https://www.janbaskdigitaldesign.com/assets21/webpimages/brandbx-logo3.webp"
                          alt="brandbx-logo3"
                          className="img-fluid about-img4 lazyload"
                        />
                      </div>
                      <div className="col-lg-2">
                        {" "}
                        <img
                          loading="lazy"
                          src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                          data-src="https://www.janbaskdigitaldesign.com/assets21/webpimages/brandbx-logo4.webp"
                          alt="brandbx-logo4"
                          className="img-fluid about-img4 lazyload"
                        />
                      </div>
                      <div className="col-lg-2">
                        {" "}
                        <img
                          loading="lazy"
                          src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                          data-src="https://www.janbaskdigitaldesign.com/assets21/webpimages/brandbx-logo5.webp"
                          alt="brandbx-logo5"
                          className="img-fluid about-img4 lazyload"
                        />
                      </div>
                      <div className="col-lg-2">
                        {" "}
                        <img
                          loading="lazy"
                          src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                          data-src="https://www.janbaskdigitaldesign.com/assets21/webpimages/brandbx-logo6.webp"
                          alt="brandbx-logo6"
                          className="img-fluid about-img4 lazyload"
                        />
                      </div>
                      <div className="col-lg-2">
                        {" "}
                        <img
                          loading="lazy"
                          src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                          data-src="https://www.janbaskdigitaldesign.com/assets21/webpimages/brandbx-logo7.webp"
                          alt="brandbx-logo7"
                          className="img-fluid about-img4 lazyload"
                        />
                      </div>
                    </div>
                  </div>
                  <div id="tab-3" className="tab-content">
                    <div className="row justify-content-center">
                      <div className="col-lg-2">
                        {" "}
                        <img
                          loading="lazy"
                          src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                          data-src="https://www.janbaskdigitaldesign.com/assets21/webpimages/market-logo.webp"
                          alt="market-logo"
                          className="img-fluid about-img4 lazyload"
                        />
                      </div>
                      <div className="col-lg-2">
                        {" "}
                        <img
                          loading="lazy"
                          src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                          data-src="https://www.janbaskdigitaldesign.com/assets21/webpimages/logobx11.webp"
                          alt="logobx11"
                          className="img-fluid about-img4 lazyload"
                        />
                      </div>
                      <div className="col-lg-2">
                        {" "}
                        <img
                          loading="lazy"
                          src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                          data-src="https://www.janbaskdigitaldesign.com/assets21/webpimages/logobx4.webp"
                          alt="logobx4"
                          className="img-fluid about-img4 lazyload"
                        />
                      </div>
                      <div className="col-lg-2">
                        {" "}
                        <img
                          loading="lazy"
                          src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                          data-src="https://www.janbaskdigitaldesign.com/assets21/webpimages/market-logo4.webp"
                          alt="market-logo4"
                          className="img-fluid about-img4 lazyload"
                        />
                      </div>
                      <div className="col-lg-2">
                        {" "}
                        <img
                          loading="lazy"
                          src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                          data-src="https://www.janbaskdigitaldesign.com/assets21/webpimages/market-logo5.webp"
                          alt="market-logo5"
                          className="img-fluid about-img4 lazyload"
                        />
                      </div>
                      <div className="col-lg-2">
                        {" "}
                        <img
                          loading="lazy"
                          src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                          data-src="https://www.janbaskdigitaldesign.com/assets21/webpimages/logobx5.webp"
                          alt="logobx5"
                          className="img-fluid about-img4 lazyload"
                        />
                      </div>
                      <div className="col-lg-2">
                        {" "}
                        <img
                          loading="lazy"
                          src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                          data-src="https://www.janbaskdigitaldesign.com/assets21/webpimages/market-logo6.webp"
                          alt="market-logo6"
                          className="img-fluid about-img4 lazyload"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className="section section9"
        id="aboutsec-10"
        style={{
          background: "#fff",
          position: "relative",
          paddingBottom: "150px",
        }}
      >
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-12 col-sm-12 text-center">
              <p className="leadtxt2 text-dark mb-1"> Our Dynamic Process</p>
              <p className="sub-cont_txt mb-4">
              Experience our proven 100% agile development process and receive rapid and efficient solutions to all your challenges!
              </p>
              <div
                className="row justify-content-center align-items-center aos-init aos-animate"
                data-aos="fade-down"
                data-aos-easing="ease"
                data-aos-delay={400}
              >
                <div
                  className="agile-bx aos-init aos-animate"
                  data-aos="fade-left"
                  data-aos-delay={100}
                >
                  <img
                    loading="lazy"
                    src="https://www.svgrepo.com/show/499853/idea.svg"
                    data-src="https://www.svgrepo.com/show/499853/idea.svg"
                    alt="web-designICON1"
                    className="lazyload"
                  />
                  <p className="sub-cont_txt mb-0">
                    Idea <br />
                  Exploration
                  </p>
                  <p className="cont text-dark mb-0">
                    {" "}
                    Transforming Market Opportunities into Concepts{" "}
                  </p>
                </div>
                <div
                  className="agile-bx aos-init aos-animate"
                  data-aos="fade-left"
                  data-aos-delay={300}
                >
                  <img
                    loading="lazy"
                    src="https://www.svgrepo.com/show/475310/task.svg"
                    data-src="https://www.svgrepo.com/show/475310/task.svg"
                    alt="web-designICON2"
                    className="lazyload"
                  />
                  <p className="sub-cont_txt mb-1">
                    Project <br />
                    Blueprinting
                  </p>
                  <p className="cont text-dark mb-0">
                  Goal Ranking &amp; Product Strategy {" "}
                    
                  </p>
                </div>
                <div
                  className="agile-bx aos-init aos-animate"
                  data-aos="fade-left"
                  data-aos-delay={500}
                >
                  <img
                    loading="lazy"
                    src="https://www.svgrepo.com/show/507065/com-mac-old.svg"
                    data-src="https://www.svgrepo.com/show/507065/com-mac-old.svg"
                    alt="web-designICON3"
                    className="lazyload"
                  />
                  <p className="sub-cont_txt mb-1">
                    Product <br />
                    Crafting
                  </p>
                  <p className="cont text-dark mb-0">
                    {" "}
                    Integrating Inventive Design Methodology{" "}
                  </p>
                </div>
                <div
                  className="agile-bx aos-init aos-animate"
                  data-aos="fade-left"
                  data-aos-delay={700}
                >
                  <img
                    loading="lazy"
                    src="https://www.svgrepo.com/show/228338/growth.svg"
                    data-src="https://www.svgrepo.com/show/228338/growth.svg"
                    alt="web-designICON1"
                    className="lazyload"
                  />
                  <p className="sub-cont_txt mb-1">
                  Incremental <br />
                  Progression
                  </p>
                  <p className="cont text-dark mb-0" data-aos-delay={100}>
                    {" "}
                    Creating Impactful Solutions {" "}
                  </p>
                </div>
                <div
                  className="agile-bx aos-init aos-animate"
                  data-aos="fade-left"
                  data-aos-delay={900}
                >
                  <img
                    loading="lazy"
                    src="https://www.svgrepo.com/show/439132/data-integrity.svg"
                    data-src="https://www.svgrepo.com/show/439132/data-integrity.svg"
                    alt="web-designICON2"
                    className="lazyload"
                  />
                  <p className="sub-cont_txt mb-1">
                  Software <br />
                  Validation 
                  </p>
                  <p className="cont text-dark mb-0">
                  Delivering Secure Solutions & Enhancements  {" "}
                    
                  </p>
                </div>
                <div
                  className=" agile-bx agile-bx1 aos-init aos-animate"
                  data-aos="fade-left"
                  data-aos-delay={1100}
                >
                  <img
                    loading="lazy"
                    src="https://www.svgrepo.com/show/499841/performance-increase.svg"
                    data-src="https://www.svgrepo.com/show/499841/performance-increase.svg"
                    alt="web-designICON3"
                    className="lazyload"
                  />
                  <p className="sub-cont_txt mb-1">
                  Upkeep &amp; <br />
                  Enhancement
                  </p>
                  <p className="cont text-dark mb-0">
                    {" "}
                    Guaranteeing Continuous High Performance Solutions{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className="section section3"
        id="aboutsection3"
        style={{
          background:
            "linear-gradient(rgb(0 0 0 / 42%) 100%, rgb(0 0 0 / 47%) 100%), url(https://images.pexels.com/photos/5926399/pexels-photo-5926399.jpeg?auto=compress&cs=tinysrgb&w=600) top center no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="container">
          <div className="row  align-items-center">
            <div className="col-lg-5">
              <div
                className="bgrowth-nx aos-init aos-animate"
                data-aos="fade-down"
                data-aos-delay={600}
              >
                <p className="yellow"  style={{fontSize:"1.2rem" ,fontWeight:"bolder",}}>Unleash the Unthinkable</p>
                <p className="leadtxt2 text-white">
                "Transforming Challenges into Game-Changing Opportunities"
                </p>
                <p className="cont text-white">
                Our approach is agile, data-driven, and one-of-a-kind, designed to turn your limitations into tremendous business opportunities.
                </p>
                <img
                  loading="lazy"
                  src="https://images.pexels.com/photos/6476259/pexels-photo-6476259.jpeg?auto=compress&cs=tinysrgb&w=600"
                  data-src="https://images.pexels.com/photos/6476259/pexels-photo-6476259.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="aboutnew-Img4"
                  className="img-fluid about-img4 lazyload"
                />
              </div>
            </div>
            <div className="col-lg-7">
              <div className="Few-nx">
                <ul className="ticklist mb-4">
                  <li
                    className="sub-cont_txt text-white aos-init aos-init aos-animate mb-4"
                    data-aos="fade-down"
                    data-aos-delay={400}
                  >
                    <i>
                      <img
                        loading="lazy"
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                        data-src="https://www.janbaskdigitaldesign.com/assets21/webpimages/about-idea4.webp"
                        alt="about-idea4"
                        className="img-fluid about-icon lazyload"
                      />
                    </i>
                    Care for a Coffee &amp; Chat?
                    <br />
                    <p className="cont">
                    Join us over a cup of coffee to share your plans, visions, and next big ideas. We don't just believe in you, we believe in your dreams too.
                    </p>
                  </li>
                  <li
                    className="sub-cont_txt text-white aos-init aos-animate mb-4"
                    data-aos="fade-down"
                    data-aos-delay={600}
                  >
                    <i>
                      <img
                        loading="lazy"
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                        data-src="https://www.janbaskdigitaldesign.com/assets21/webpimages/about-idea2.webp"
                        alt="about-idea2"
                        className="img-fluid about-icon lazyload"
                      />
                    </i>
                    Let's Strategize Your Digital Voyage
                    <br />
                    <p className="cont">
                    Let's collaborate on merging your ideas with our expert strategies to create a comprehensive project blueprint and drive it towards successful development, making it a massive hit.
                    </p>
                  </li>
                  <li
                    className="sub-cont_txt text-white aos-init aos-animate mb-4"
                    data-aos="fade-down"
                    data-aos-delay={800}
                  >
                    <i>
                      <img
                        loading="lazy"
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                        data-src="https://www.janbaskdigitaldesign.com/assets21/webpimages/about-idea3.webp"
                        alt="about-idea3"
                        className="img-fluid about-icon lazyload"
                      />
                    </i>
                    Watch our Technical Ninjas in Action!
                         <br />
                    <p className="cont">
                    We'll transform your blueprints and prototypes into fully functional websites and apps, allowing you to showcase your business and dedication to the world.
                    </p>
                  </li>
                  <li
                    className="sub-cont_txt text-white aos-init aos-animate mb-4"
                    data-aos="fade-down"
                    data-aos-delay={1000}
                  >
                    <i>
                      <img
                        loading="lazy"
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                        data-src="https://www.janbaskdigitaldesign.com/assets21/webpimages/about-idea1.webp"
                        alt="about-idea1"
                        className="img-fluid about-icon lazyload"
                      />
                    </i>
                    Unveil it to the World
                    <br />
                    <p className="cont">
                    Let's craft a smart, achievable, and conversion-centric marketing strategy to ensure your product reaches the right target market with precision.{" "}
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className="section section3 aboutsection4"
        id="homesec-3"
        style={{ background: "#fff", position: "relative" }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8 col-md-12 col-sm-8 col-xs-12">
              <div className="brand-big">
                <h2
                  className="leadtxt2 text-dark aos-init aos-animate"
                  data-aos="fade-down"
                  data-aos-delay={100}
                >
                  With our growth mindset, we draw the attention of the biggest brands.
                </h2>
                <p
                  className="sub-cont_txt mb-2 aos-init aos-animate"
                  data-aos="fade-down"
                  data-aos-delay={200}
                >
                  We take immense pride and gratitude in collaborating with the biggest clients who share our belief in making a difference through our unmatched solutions.
                </p>
                <div className="slider">
                  <div className="slide-track">
                    <div className="slide">
                      <img
                        loading="lazy"
                        src="https://www.janbaskdigitaldesign.com/assets/img/logobx1.png"
                        srcSet="https://www.janbaskdigitaldesign.com/assets21/webpimages/logobx1.webp"
                        alt="logobx1.png"
                      />
                    </div>
                    <div className="slide">
                      <img
                        loading="lazy"
                        src="https://www.janbaskdigitaldesign.com/assets/img/logobx2.png"
                        srcSet="https://www.janbaskdigitaldesign.com/assets21/webpimages/logobx2.webp"
                        alt="logobx2.png"
                      />
                    </div>
                    <div className="slide">
                      <img
                        loading="lazy"
                        src="https://www.janbaskdigitaldesign.com/assets/img/logobx3.png"
                        srcSet="https://www.janbaskdigitaldesign.com/assets21/webpimages/logobx3.webp"
                        alt="logobx3.png"
                      />
                    </div>
                    <div className="slide">
                      <img
                        loading="lazy"
                        src="https://www.janbaskdigitaldesign.com/assets/img/logobx4.png"
                        srcSet="https://www.janbaskdigitaldesign.com/assets21/webpimages/logobx4.webp"
                        alt="logobx4.png"
                      />
                    </div>
                    <div className="slide">
                      <img
                        loading="lazy"
                        src="https://www.janbaskdigitaldesign.com/assets/img/logobx5.png"
                        srcSet="https://www.janbaskdigitaldesign.com/assets21/webpimages/logobx5.webp"
                        alt="logobx5.png"
                      />
                    </div>
                    <div className="slide">
                      <img
                        loading="lazy"
                        src="https://www.janbaskdigitaldesign.com/assets/img/logobx6.png"
                        srcSet="https://www.janbaskdigitaldesign.com/assets21/webpimages/logobx6.webp"
                        alt="logobx6.png"
                      />
                    </div>
                    <div className="slide">
                      <img
                        loading="lazy"
                        src="https://www.janbaskdigitaldesign.com/assets/img/logobx7.png"
                        srcSet="https://www.janbaskdigitaldesign.com/assets21/webpimages/logobx7.webp"
                        alt="logobx7.png"
                      />
                    </div>
                  </div>
                </div>
                <div className="slider mt-2">
                  <div className="slide-track2">
                    <div className="slide">
                      <img
                        loading="lazy"
                        src="../images/1 (2).png"
                        srcSet="../images/1 (2).png"
                        alt="logobx8.png"
                      />
                    </div>
                    <div className="slide">
                      <img
                        loading="lazy"
                        src="../images/2 (1).png"
                        srcSet="../images/2 (1).png"
                        alt="logobx9.png"
                      />
                    </div>
                    <div className="slide">
                      <img
                        loading="lazy"
                        src="../images/3 (1).png"
                        srcSet="../images/3 (1).png"
                        alt="logobx10.png"
                      />
                    </div>
                    <div className="slide">
                      <img
                        loading="lazy"
                        src="../images/4 (1).png"
                        srcSet="../images/4 (1).png"
                        alt="logobx11.png"
                      />
                    </div>
                    <div className="slide">
                      <img
                        loading="lazy"
                        src="../images/4 (1).png"
                        srcSet="../images/4 (1).png"
                        alt="logobx12.png"
                      />
                    </div>
                    <div className="slide">
                      <img
                        loading="lazy"
                        src="../images/5 (3).png"
                        srcSet="../images/5 (3).png"
                        alt="logobx13.png"
                      />
                    </div>
                    <div className="slide">
                      <img
                        loading="lazy"
                        src="../images/6 (2).png"
                        srcSet="../images/6 (2).png"
                        alt="logobx14.png"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="whybx1">
                <div className="row  align-items-center pt-2">
                  <div className="col-lg-5 col-md-6 ">
                    <img
                      loading="lazy"
                      src="https://images.pexels.com/photos/7374/startup-photos.jpg?auto=compress&cs=tinysrgb&w=600"
                      srcSet="https://images.pexels.com/photos/7374/startup-photos.jpg?auto=compress&cs=tinysrgb&w=600"
                      alt="home-wish"
                      className="img-fluid aos-init aos-animate"
                      data-aos="fade-down"
                      data-aos-delay={100}
                    />
                  </div>
                  <div className="col-lg-7 col-md-6 ">
                    <ul
                      className="ticklist aos-init aos-animate"
                      data-aos="fade-down"
                      data-aos-delay={100}
                    >
                      <p
                        className="slider-leadtxt text-white text-center aos-init aos-animate font-italic mb-4"
                        data-aos="fade-down"
                        data-aos-delay={100}
                      >
                        {" "}
                        Why work with us
                      </p>
                      <div className="row">
                        <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12 text-center">
                          <p className="cont text-white">
                            <i>
                              <img
                                loading="lazy"
                                src="https://www.svgrepo.com/show/518845/radarscope.svg"
                                srcSet="https://www.svgrepo.com/show/518845/radarscope.svg"
                                alt="Google adwords customer service"
                                className
                              />
                            </i>
                            Cutting-edge
                            <br />
                            Technology
                          </p>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12 text-center">
                          <p className="cont text-white">
                            <i>
                              <img
                                loading="lazy"
                                src="https://www.svgrepo.com/show/494478/bulb-idea-light.svg"
                                srcSet="https://www.svgrepo.com/show/494478/bulb-idea-light.svg"
                                alt="Google adwords customer service"
                                className
                              />
                            </i>
                            Current  <br />
                            Fad
                          </p>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12 text-center">
                          <p className="cont text-white">
                            <i>
                              <img
                                loading="lazy"
                                src="https://www.svgrepo.com/show/261497/team.svg"
                                srcSet="https://www.svgrepo.com/show/261497/team.svg"
                                alt="Google adwords customer service"
                                className
                              />
                            </i>
                            Seasoned <br />
                            Team
                          </p>
                        </div>
                      </div>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-12 col-sm-4 col-xs-12">
              <div
                className="Wishlist-form aos-init aos-animate"
                data-aos="fade-left"
                data-aos-delay={200}
              >
                <p className="slider-leadtxt text-dark mb-1">
                Accelerate Your Growth with Us
                </p>
                <p className="sub-cont_txt mb-4">
                Unleash Your Information and Supercharged Concepts
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
                  
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 mb-3">
                      <p
                        className="home-started-btn mb-0"
                        style={{ margin: "0 auto", display: "table" }}
                      >
                        <button
                          onclick="ga('send', 'event', 'Home Page Let's Take Your Project', 'Schedule Your Call');"
                          style={{
                            background:
                              "linear-gradient(to right, #0b59f0 30%, #673ab7)",
                            border: "0px",
                          }}
                          type="submit"
                          className="text-white"
                        >
                          Book Your Appointment
                        </button>
                      </p>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className="section section5"
        id="aboutsection5"
        style={{
          background:
            "#edf0f5 url(https://www.janbaskdigitaldesign.com/assets21/webpimages/aboutnew-Img8.webp)",
          backgroundSize: "100%",
        }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div
              className="col-lg-5 aos-init aos-init aos-animate"
              data-aos="fade-right"
              data-aos-delay={100}
            >
              <img
                loading="lazy"
                src="https://images.pexels.com/photos/3861961/pexels-photo-3861961.jpeg?auto=compress&cs=tinysrgb&w=600"
                data-src="https://images.pexels.com/photos/3861961/pexels-photo-3861961.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="aboutnew-Img14"
                className="img-fluid about-img1 lazyload"
              />
              <div className="why-choose-img-caption">
                <span>Delivered 3600 projects successfully</span>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="choosetxt">
                <p
                  className="yellow mb-1 aos-init aos-init aos-animate"
                  data-aos="fade-down"
                  data-aos-delay={100}
                  style={{fontSize:"1.2rem" ,fontWeight:"bolder",}}>
                  Why Us?
                </p>
                <p
                  className="leadtxt2 text-dark aos-init aos-init aos-animate"
                  data-aos="fade-down"
                  data-aos-delay={200}
                >
                  Why Choose Us to Turn Your Goals into Reality?
                </p>
                <p
                  className="cont mb-3 aos-init aos-init aos-animate"
                  data-aos="fade-down"
                  data-aos-delay={200}
                >
                  At Gamayas, we embrace a data-driven and well-researched approach to ideation and co-creation, ensuring that every element in our process is geared towards converting visitors into satisfied and loyal customers. With our deep understanding of your business's target market and competition, we implement 100% effective strategies, technical solutions, and out-of-the-box elements to deliver stellar, personalized, and customer-centric digital solutions.
                </p>
                <ul className="ticklist blacktick mb-4">
                  <li
                    className="cont text-dark aos-init aos-init aos-animate"
                    data-aos="fade-down"
                    data-aos-delay={100}
                  >
                    {" "}
                    We construct a digital pathway that drives more business transactions your way.
                  </li>
                  <li
                    className="cont text-dark aos-init aos-animate"
                    data-aos="fade-down"
                    data-aos-delay={200}
                  >
                    We implement cost-effective organic & performance marketing solutions to help you save your dollars.{" "}
                  </li>
                  <li
                    className="cont text-dark aos-init aos-animate"
                    data-aos="fade-down"
                    data-aos-delay={300}
                  >
                    We create a brand that stands out as a leader in your industry.
                  </li>
                  <li
                    className="cont text-dark aos-init aos-animate"
                    data-aos="fade-down"
                    data-aos-delay={300}
                  >
                    Through potent growth marketing strategies, we cultivate brand advocacy.
                          </li>
                </ul>
                <p className="home-started-btn">
                  <a
                    onclick="ga('send', 'event', 'About Page Why Us To Make Your Goals ', 'Start A Project');"
                    href="#"
                    className="text-white"
                  >
                    Initiate Your Project
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <style
        dangerouslySetInnerHTML={{
          __html:
            "\n\n@media (min-width: 768px) and (max-width: 991px){\n.home-started-btn {\nleft: 0px;\n\n}\n.form-group {\n    margin-bottom: 14px;\n}\n\n\n\n}\n",
        }}
      />
    
      <style
        dangerouslySetInnerHTML={{
          __html:
            "\n.mobileStripCall {\n    position: fixed;\n    bottom: 0;\n    background: #fff;\n    width: 100%;\n    z-index: 111111;\n    box-shadow: -4px -2px 4px rgb(0 0 0 / 29%);\n}\n",
        }}
      />
      {/*  */}
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
          {/* Modal content*/}
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
              <div className="col-md-12 col-lg-12 col-sm-8 col-md-12 ">
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
                          onclick="ga('send', 'event', 'company', 'Enquire Now');"
                          type="submit"
                          name="submit"
                          className="btn btn-primary"
                          style={{
                            width: "100%",
                            background:
                              "linear-gradient(to right, #d33536 50%, #e03535)",
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
                        className="col-lg-12 col-md-12 col-sm-12 col-xs-12 form-group "
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
                src="https://images.pexels.com/photos/6476372/pexels-photo-6476372.jpeg?auto=compress&cs=tinysrgb&w=600"
                srcSet="https://images.pexels.com/photos/6476372/pexels-photo-6476372.jpeg?auto=compress&cs=tinysrgb&w=600"
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
                        defaultValue="About-New Popup-Form"
                      />
                      <input
                        type="hidden"
                        name="function"
                        defaultValue="About-New Popup-Form"
                      />
                      <button
                        onclick="ga('send', 'event', 'company', 'Enquire Now');"
                        type="submit"
                        name="submit"
                        className="btn btn-primary"
                        style={{
                          width: "100%",
                          background:
                            "linear-gradient(to right, #d33536 50%, #e03535)",
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
                      className="col-lg-12 col-md-12 col-sm-12 col-xs-12 form-group "
                      id="msg_pop"
                    />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <a href="#" className="back-to-top">
        <i className="fa fa-arrow-up" />
      </a>
      {/*  */}
    </div>
  );
};

export default C1;
