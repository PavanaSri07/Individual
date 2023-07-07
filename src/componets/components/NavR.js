function NavR() {

  return (
    <>

      <nav
        class="navbar navbar-expand-lg navbar-light bg-dark bg-opacity-10 mx-5"
      >
        <div className='webdesign1' class="container-fluid ">
          <a class="navbar-brand " href="/">
            <img style={{width: "182px"}} src="/images/logo.png" alt="" />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon" style={{backgroundColor: "#a2a2a3", borderRadius: "5px"}}></span>
          </button>
          <div class="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
            <ul class="navbar-nav">
              <li class="nav-item mx-4">
                <a class="nav-link active text-light " aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li class="nav-item mx-4">
                <a class="nav-link text-light" href="/">
                  About us
                </a>
              </li>
              <li class="nav-item dropdown mx-4">
                <a
                  class="nav-link dropdown-toggle text-light"
                  href="/webdesign"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Services
                </a>
                <ul
                  class="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <li>
                    <a class="dropdown-item " href="/webdesign">
                      Website Design Services
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="/WebDevelopment">
                      Website Development Services
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="/ECommerceWebsiteDev">
                      eCommerce Website Development
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="/MobileAppDevelopment">
                      Mobile App Development Company
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="/DigitalMarketing">
                      Digital Marketing
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="/CMSDevelopment">
                      CMS Development
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="/CROServices">
                      CRO Services
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="/OutSourcing">
                      Out Sourcing
                    </a>
                  </li>
                </ul>
              </li>

              <li class="nav-item dropdown mx-4">
                <a
                  class="nav-link dropdown-toggle text-light"
                  href="/"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Industries
                </a>
                <ul
                  class="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <li>
                    <a class="dropdown-item" href="/">
                      Action
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="/">
                      Another action
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="/">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
              <li class="nav-item mx-4">
                <a class="nav-link text-light" href="/">
                  Contact us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavR;