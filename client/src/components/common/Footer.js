import React from "react";

function Footer() {
  return (
    <>
      <footer className="footer position-absolute bottom-2 py-2 w-100">
        <div className="container">
          <div className="row align-items-center justify-content-lg-between">
            <div className="col-12 col-md-6 my-auto">
              <div className="copyright text-center text-sm text-white text-lg-start">
                © <script>document.write(new Date().getFullYear())</script>,
                made with <i className="fa fa-heart" aria-hidden="true"></i> by
                <a
                  href="https://www.creative-tim.com"
                  className="font-weight-bold text-white"
                  target="_blank"
                >
                  Creative Tim
                </a>
                for a better web.
              </div>
            </div>
            <div className="col-12 col-md-6">
              <ul className="nav nav-footer justify-content-center justify-content-lg-end">
                <li className="nav-item">
                  <a
                    href="https://www.creative-tim.com"
                    className="nav-link text-white"
                    target="_blank"
                  >
                    Creative Tim
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="https://www.creative-tim.com/presentation"
                    className="nav-link text-white"
                    target="_blank"
                  >
                    About Us
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="https://www.creative-tim.com/blog"
                    className="nav-link text-white"
                    target="_blank"
                  >
                    Blog
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="https://www.creative-tim.com/license"
                    className="nav-link pe-0 text-white"
                    target="_blank"
                  >
                    License
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
