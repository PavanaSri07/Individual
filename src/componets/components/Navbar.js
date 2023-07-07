import { Link } from "react-router-dom";
// import "./NavR.css"
function Navbar() {
  const logo = {
    width: "182px",
    height: "55px",
    margin: "0 0 0 180px",
  };

  const list = {
    margin: "0 12px 0 12px",
  };

  return (
    <>
      <header id="header" class="fixed-top ">
        <div class="container d-flex align-items-center justify-content-between">
          <p class="logo">
            <a href="index.html">
              <img
                src="images/gamayas logo (8).png"
                class="white-logo"
                srcset="images/gamayas logo (1).png"
                alt="logo16"
              />
              <img
                src="images/gamayas logo (6).png"
                srcset="images/gamayas logo (1).png"
                class="color-logo hddrcrs"
                alt="logo-color"
              />
            </a>
          </p>
          <nav class="nav-menu d-none d-lg-block">
            <div class="mob-fix d-block d-lg-none">
              <div class="row">
                <div class="col-lg-6 col-6 ">
                  <p class="logo">
                    <a href="index.html">
                      <img
                        src="images/gamayas logo (6).png"
                        srcset="images/gamayas logo (6).png"
                        class="color-logo"
                        alt="logo-color"
                      />
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <ul>
              <li class>
                <Link to="/">Home </Link>
              </li>
              <li>
                <Link to="/about">About Us </Link>
              </li>
              <li class="drop-down">
                {" "}
                <a href> Services </a>
                <ul>
                  <li>
                    {" "}
                    <a href="website-design-services.html">
                      Website Design Services{" "}
                    </a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a href="website-development-services.html">
                      Website Development Services{" "}
                    </a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a href="ecommerce-website-development.html">
                      eCommerce Website Development{" "}
                    </a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a href="mobile-app-development-services.html">
                      Mobile Apps Development Company{" "}
                    </a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a href="Digitalmarketing.html">Digital Marketing </a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a href="cms-development.html">CMS Development </a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a href="cro-services.html">CRO Services </a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a href="out-sourcing.html">Out Sourcing </a>{" "}
                  </li>
                </ul>
              </li>
              <li class="drop-down">
                {" "}
                <a href> Industries </a>
                <ul>
                  <li>
                    {" "}
                    <a href="real-estate-website-design.html">
                      Real Estate Industry{" "}
                    </a>{" "}
                  </li>

                  <li>
                    {" "}
                    <a href="education-website-design.html">
                      Education Industry{" "}
                    </a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a href="Reatil-industry.html">Retail Industry </a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a href="ecommerce-website-development.html">
                      Ecommerce Industry{" "}
                    </a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a href="it-website-design.html">IT Industry </a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a href="healthcare-website-design.html">
                      Healthcare Industry{" "}
                    </a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a href="manufacturing-website-design.html">
                      Manufacturing Industry{" "}
                    </a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a href="financial-services-website-design.html">
                      Financial Services Industry{" "}
                    </a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a href="government-website-design.html">
                      Government Industry{" "}
                    </a>{" "}
                  </li>
                </ul>
              </li>

              <li class>
                {" "}
                <a href="#"> Portfolio </a>{" "}
              </li>
              <li class>
                <Link to="/contactus">Contact Us </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Navbar;
