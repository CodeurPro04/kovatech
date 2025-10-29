import { Link } from "react-router-dom";

 

const FooterOne = () => {
  return (
    <>
      <footer className="main-footer style-three" id="footer">
        <div className="footer-widget-section">
          <ul className="scroll-text">
            <li>Lumara Web Development Company</li>
            <li>Lumara Web Development Company</li>
            <li>Lumara Web Development Company</li>
            <li>Lumara Web Development Company</li>
            <li>Lumara Web Development Company</li>
          </ul>
          <div className="outer-box">
            <div className="row">
              <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
                <div className="footer-widget logo-widget">
                  <figure className="footer-logo"><Link to="/"><img src="assets/images/logo.png" alt="" /></Link></figure>
                  <p>We help local company and services enter the market and well-known brands expand an audience.</p>
                </div>
              </div>
              <div className="col-lg-2 col-md-6 col-sm-12 footer-column">
                <div className="footer-widget links-widget">
                  <div className="widget-title">
                    <h5>Agency</h5>
                  </div>
                  <div className="widget-content">
                    <ul className="links-list">
                      <li><Link to="/">Home</Link></li>
                      <li><Link to="/">Agency</Link></li>
                      <li><Link to="/">Achievement</Link></li>
                      <li><Link to="/">Career</Link></li>
                      <li><Link to="/contact">Contact Us</Link></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-6 col-sm-12 footer-column">
                <div className="footer-widget links-widget">
                  <div className="widget-title">
                    <h5>Service</h5>
                  </div>
                  <div className="widget-content">
                    <ul className="links-list">
                      <li><Link to="/">UI/UX Design</Link></li>
                      <li><Link to="/">Wen Design</Link></li>
                      <li><Link to="/">Branding</Link></li>
                      <li><Link to="/">Webflow</Link></li>
                      <li><Link to="/">Development</Link></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-6 col-sm-12 footer-column">
                <div className="footer-widget links-widget">
                  <div className="widget-title">
                    <h5>Follow</h5>
                  </div>
                  <div className="widget-content">
                    <ul className="links-list">
                      <li><Link to="/">Facebook</Link></li>
                      <li><Link to="/">Twitter</Link></li>
                      <li><Link to="/">Instagram</Link></li>
                      <li><Link to="/">LinkedIn</Link></li>
                      <li><Link to="/">Dribbble</Link></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-6 col-sm-12 footer-column">
                <div className="footer-widget contact-widget">
                  <div className="widget-title">
                    <h5>Contact</h5>
                  </div>
                  <div className="widget-content">
                    <p>Nenuya Centre, Elia Street <br />New York, USA</p>
                    <ul className="info-list clearfix">
                      <li><a href="mailto:hi@lumaracontact.com">hi@lumaracontact.com</a></li>
                      <li><a href="tel:18746983255">+1 874 698 3255</a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-1 col-md-6 col-sm-12 footer-column">
                <div className="footer-widget social-widget">
                  <div className="widget-title">
                    <h5>Social</h5>
                  </div>
                  <div className="widget-content">
                    <ul className="social-list">
                      <li><Link to="/"><i className="fab fa-facebook-f"></i></Link></li>
                      <li><Link to="/"><i className="fab fa-twitter"></i></Link></li>
                      <li><Link to="/"><i className="fab fa-instagram"></i></Link></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="outer-box">
            <div className="bottom-inner">
              <div className="copyright"><p>{new Date().getFullYear()} &copy; Copyright. Design By <Link to="/">bplugins</Link> UI/UX Desinger</p></div>
              <div className="mail-box"><a href="mailto:bplugins@gmai.com">bplugins@gmai.com</a></div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default FooterOne;