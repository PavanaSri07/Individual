import React from "react";
import "./CU2.css"
import Card3 from "./Card3";

const CU2 = () => {
  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html:
            "\n        #header .logo img {\n            width: 197px;\n            margin-left: -9em;\n        }\n    ",
        }}
      />

      <section
        style={{
          background:
            "linear-gradient(to right,#4b4b4b96,#00000073),url(images/Contactus.jpg) no-repeat top center",
          backgroundSize: "cover",
          backgroundColor:"#fff",
          backgroundAttachment: "fixed",
          padding: "150px 0px 100px 0px",
          fontFamily:"sans-serif",
          fontSize:"3rem",
          
        }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-11 text-center">
              <div className="sliderTxtbox ">
                <h1 style={{fontFamily:"monospace",}} className="sliderHeading text-white mb-3">
                Let's team up and grow together!
                </h1>
                <p style={{fontSize:"1.1rem",}}    className="sliderSubHeading text-white mb-lg-3 ">
                Take your digital experience to new heights with our comprehensive web designing, eCommerce, and digital marketing services. Whether you're looking to enhance your online presence or seek detailed information on these services, simply provide us with your contact details, and we'll reach out to you promptly. Get ready to unlock the full potential of your digital endeavors!
                </p>
                <div className="bannerBtn"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="contact-section1" >
  <div className="container">
    <div> 
    <div class="col-lg-12 ">
   <p class="sectionDescription blueTxt mb-4 mt-lg-0 mt-4"><strong style={{ fontSize: '1.2rem' }}><span style={{ color: 'red', fontSize: '1.5rem' }}>GAMAYAS</span> collaborates with businesses of all sizes to revamp their brand and boost revenue.</strong></p>
    </div>
    </div>
    <Card3/>
  
    <div className="row">
      <div className="col-lg-12 mt-4">
        <div className="form-box" style={{ marginTop: '-60px' }}>
          <div className="form-container">
            <div className="form-header">
                <h1>Reach Out Now!</h1>
                <img src="https://images.pexels.com/photos/789822/pexels-photo-789822.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Form Image" className="form-image"  />
            </div>
            
            <form
    target="_blank"
    action="https://formsubmit.co/landakrishnamohan@gmail.com"
    method="POST"
  >
    <div className="form-group">
      <label htmlFor="name">Full Name</label>
      <input
        type="text"
        name="name"
        id="name"
        className="form-control"
        placeholder="Full Name"
        required=""
      />
    </div>
    <div className="form-group">
      <label htmlFor="email">Email Address</label>
      <input
        type="email"
        name="email"
        id="email"
        className="form-control"
        placeholder="Email Address"
        required=""
      />
    </div>
    <div className="form-group">
      <label htmlFor="message">Your Message</label>
      <textarea
        placeholder="Your Message"
        className="form-control"
        name="message"
        id="message"
        rows={10}
        required=""
      />
    </div>
    <button
      type="submit"
      className="btn btn-lg btn-dark btn-block"
    >
      Send Now!
    </button>
  </form>
      </div>
    </div>
  </div>
</div>
</div>
</section>


<section className="contact-section5">
        <div className="container" style={{ marginTop: '-60px' }}>
          <div className="row justify-content-center mb-2 align-items-center">
            <div className="col-lg-3 col-md-6">
              <img
                src="https://www.svgrepo.com/show/415213/email-files-letter.svg"
                alt="Email"
                className="img-fluid"
              />
              <h3 className="boxHeading mt-3 mb-3">Email</h3>
              <p className="sectionDescription mb-4">info@gamayas.com</p>
            </div>
            <div className="col-lg-3 col-md-6">
              <img
                src="https://www.svgrepo.com/show/428769/chatting-conversation-contact.svg"
                alt="Have A Question? Call Us Now"
                className="img-fluid"
              />
              <h3 className="boxHeading mt-3 mb-3">
              Need assistance? Dial our number now!{" "}
              </h3>
              <p className="sectionDescription mb-4">
                {" "}
                +917801073175
                <br /> +917801073176
              </p>
            </div>
            <div className="col-lg-6 col-md-12 ">
              <img
                src="https://media.istockphoto.com/id/1371160686/photo/business-people-watching-a-presentation-on-the-whiteboard.jpg?b=1&s=612x612&w=0&k=20&c=3CukhDYA2MuwfI-03iLvvEgg_oW-VJsk-zoHHnjX1fU="
                alt="img"
                className="img-fluid rounded last"
              />
            </div>
          </div>
        </div>
      </section>
      <style
        dangerouslySetInnerHTML={{
          __html:
            "\n            .contact-section5 .col-lg-3 img {\n                width: 70px;\n            }\n            \n            .contact-section2 {\n                background-color: #F7F7F7;\n            }\n            \n            .contact-section2 .boxHeading {\n                min-height: 38px;\n            }\n            \n            .AddresContact {\n                display: flex;\n                flex-wrap: wrap;\n            }\n            \n            .locAddress {\n                width: 20%;\n                margin-bottom: 28px;\n            }\n        ",
        }}
      />
      <section
        className="section location_list py-5"
        style={{ background: "#f7f7f7" }}
      ></section>
      
      <style
        dangerouslySetInnerHTML={{
          __html:
            "\n            @media screen and (max-width: 767px) {\n                .mobileStripCall {\n                    position: fixed;\n                    bottom: 0;\n                    background: #fff;\n                    width: 100%;\n                    z-index: 111111;\n                    box-shadow: -4px -2px 4px rgb(0 0 0 / 29%);\n                }\n            }\n        ",
        }}
      />



<footer id="footer" itemScope itemType="https://schema.org/WPFooter" style={{ marginTop: '-100px' }}>
        <div className="footer-top">
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
                <h4>Company</h4>
                <ul>
                  <li>
                    <i className="fa fa-angle-right" />
                    <a href="index.html">Home</a>
                  </li>
                  <li>
                    <i className="fa fa-angle-right" />
                    <a href="about-us.html">About us</a>
                  </li>
                  <li>
                    <i className="fa fa-angle-right" />{" "}
                    <a href="#">Portfolio</a>
                  </li>
                  {/* <li><i class="fa fa-angle-right"></i> <a href="#">Blogs</a></li> */}
                  <li>
                    <i className="fa fa-angle-right" />
                    <a href="contact-us.html">Contact Us</a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-3 col-md-6 footer-links">
                <h4>Our Focus Area</h4>
                <ul>
                  <li>
                    <i className="fa fa-angle-right" />
                    <a href="website-design-services.html">Web Design</a>
                  </li>
                  <li>
                    <i className="fa fa-angle-right" />
                    <a href="website-development-services.html">
                      Web Development
                    </a>
                  </li>
                  <li>
                    <i className="fa fa-angle-right" />
                    <a href="mobile-app-development-services.html">
                      Mobile Apps Development
                    </a>
                  </li>
                  <li>
                    <i className="fa fa-angle-right" />
                    <a href="Digitalmarketing.html.html">Digital Marketing</a>
                  </li>
                  {/* <li><i class="fa fa-angle-right"></i> <a href="">Graphic Design</a></li> */}
                </ul>
              </div>
              <div className="col-lg-4 col-md-6 footer-links">
                <h4>Industries We Serve</h4>
                <ul className>
                  {/* <li> <i class="fa fa-angle-right"></i> <a href="">Non-Profit Industry</a></li> */}
                  <li>
                    <i className="fa fa-angle-right" />
                    <a href="it-website-design.html">IT Industry</a>
                  </li>
                  <li>
                    <i className="fa fa-angle-right" />
                    <a href="healthcare-website-design.html">
                      Healthcare Industry
                    </a>
                  </li>
                  <li>
                    <i className="fa fa-angle-right" />
                    <a href="manufacturing-website-design.html">
                      Manufacturing Industry
                    </a>
                  </li>
                  <li>
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
        id="basicModal"
        tabIndex={-1}
        aria-labelledby="basicModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <button
              type="button"
              className="btn btn-secondary close-form"
              data-bs-dismiss="modal"
            >
              X
            </button>
            <div className="main-login p-lg-5 p-4">
              <h3 className="sectionHeading2 blueTxt mb-lg-4 mb-3 text-center fw-bold">
                Schedule Your No-Cost Consultation &amp; Discuss Your Goals.
              </h3>
              <form
                id="contact_form8"
                method="post"
                action=""
                className="row"
                noValidate="novalidate"
              >
                <div className="form-group col-lg-6 col-md-12 col-12">
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    id="name"
                    placeholder="Name"
                  />
                </div>
                <div className="form-group col-lg-6 col-md-12 col-12">
                  <input
                    type="text"
                    className="form-control"
                    name="email"
                    id="email"
                    placeholder="Email ID"
                  />
                </div>
                <div className="col-lg-12 col-md-12 col-12 form-group">
                  <input
                    type="text"
                    className="form-control"
                    name="phone"
                    id="phone"
                    placeholder="Phone No."
                    required=""
                    aria-required="true"
                  />
                </div>
                <div className="col-lg-12 col-md-12 col-12 form-group mb-3">
                  <input
                    className="form-control"
                    name="message"
                    id="requirment"
                    placeholder="Your Requirements"
                    type="text"
                  />
                </div>
                <input
                  type="hidden"
                  name="function"
                  defaultValue="contact-us"
                />
                <div className="col-lg-12 col-md-12 col-12 form-group">
                  <button
                    onclick="ga('send', 'event', 'Get In Touch ', 'Submit');"
                    className="border-0 m-auto text-white btnRed-bg"
                    type="submit"
                  >
                    Enquire Now
                  </button>
                </div>
                <div
                  className="col-lg-12 col-md-12 col-12 form-group msg"
                  id="msg"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CU2;
