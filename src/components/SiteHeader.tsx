import Link from "next/link";
import Image from "next/image";

export function SiteHeader() {
  return (
    <>
      <header className="tv-header header-style3 panzer-image-header">
        <div className="main-wrapper">
          <div className="menu-area">
            <div className="row align-items-center justify-content-between">
              <div className="col-auto logo">
                <div className="header-logo">
                  <Link href="/">
                    <Image alt="logo" src="/assets/images/logo/logo.png" width={160} height={50} style={{ height: "auto" }} unoptimized />
                    <Image alt="logo" src="/assets/images/logo/logo.png" width={160} height={50} style={{ height: "auto" }} unoptimized />
                  </Link>
                </div>
              </div>
              <div className="col-auto nav-outer ms-auto">
                <div className="nav-menu">
                  <nav className="main-menu d-none d-lg-inline-block">
                    <ul className="navigation">
                      <li className="active">
                        <Link className="active" href="/">Home</Link>
                      </li>
                      <li className="menu-item-has-children">
                        <Link href="/solution">Solutions</Link>
                        <ul className="sub-menu solution-sub-menu">
                          <li><Link href="#">Scopd DLP with UEBA</Link></li>
                          <li><Link href="#">Vulnerability Scanner, Assessment &amp; Penetration Testing</Link></li>
                          <li><Link href="#">Employee Monitoring Solution</Link></li>
                          <li><Link href="#">Most Advance Anti-Malware</Link></li>
                          <li><Link href="#">Backup &amp; Disaster Recovery</Link></li>
                          <li><Link href="#">Backup Solution</Link></li>
                          <li><Link href="#">Data Leak Prevention – DLP</Link></li>
                          <li><Link href="#">Advance Threat Prevention | EDR | EPS</Link></li>
                        </ul>
                      </li>
                      <li className="menu-item-has-children">
                        <Link href="/brand">Brands</Link>
                        <ul className="sub-menu brand-sub-menu">
                          <li><Link href="/brand-detail#netand">Netand IAM PAM</Link></li>
                          <li><Link href="/brand-detail#mirobase">Mirobase Employee Monitoring</Link></li>
                          <li><Link href="/brand-detail#falcongaze">FalconGaze SecureTower - UBA</Link></li>
                          <li><Link href="/brand-detail#somansa">Somansa Endpoint Data Loss Prevention</Link></li>
                          <li><Link href="/brand-detail#secpoint">SecPoint Penetrator Vulnerability Scanner &amp; Assessment</Link></li>
                          <li><Link href="/brand-detail#netop">Netop - Secure Remote Access</Link></li>
                          <li><Link href="/brand-detail#emsisoft">Emsisoft - Advance Malware Protection</Link></li>
                          <li><Link href="/brand-detail#vembu">Vembu BDR Suite</Link></li>
                          <li><Link href="/brand-detail#acronis">Acronis Backup Solution</Link></li>
                        </ul>
                      </li>
                      <li>
                        <Link href="/blog-grid">Blogs</Link>
                      </li>
                      <li>
                        <Link href="/download">Resources</Link>
                      </li>
                      <li className="menu-item-has-children">
                        <Link href="#">Company</Link>
                        <ul className="sub-menu">
                          <li><Link href="/about">About Us</Link></li>
                          <li><Link href="/contact">Contact</Link></li>
                        </ul>
                      </li>
                    </ul>
                  </nav>
                  <div className="navbar-right d-inline-flex d-lg-none">
                    <button className="menu-toggle sidebar-btn" type="button">
                      <span className="line"></span>
                      <span className="line"></span>
                      <span className="line"></span>
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-auto header-right-wrapper">
                <div className="outer-box">
                  <Link href="/contact" className="panzer-header-cta">Connect with Us</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div className="mobile-menu-wrapper">
        <div className="mobile-menu-area">
          <button className="menu-toggle"><i className="fas fa-times"></i></button>
          <div className="mobile-logo">
            <Link href="/"><img alt="Panzer IT" src="/assets/images/logo/logo.webp" /></Link>
          </div>
          <div className="mobile-menu">
            <ul className="navigation clearfix"></ul>
          </div>
          <ul className="contact-list-one">
            <li>
              <div className="contact-info-box">
                <span className="icon fa-solid fa-phone"></span>
                <span className="title">Call Panzer IT</span>
                <Link href="tel:+919004655099">+91 90046 55099</Link>
              </div>
            </li>
            <li>
              <div className="contact-info-box">
                <span className="icon fa-light fa-envelope"></span>
                <span className="title">Email Us</span>
                <Link href="mailto:Sales@PanzerIT.com">Sales@PanzerIT.com</Link>
              </div>
            </li>
            <li>
              <div className="contact-info-box">
                <span className="icon fa-light fa-alarm-clock"></span>
                <span className="title">Availability</span>
                Working 24x7 | World Wide Work
              </div>
            </li>
          </ul>
          <ul className="social-links">
            <li><Link href="#"><i className="fab fa-twitter"></i></Link></li>
            <li><Link href="#"><i className="fab fa-facebook-f"></i></Link></li>
            <li><Link href="#"><i className="fab fa-pinterest"></i></Link></li>
            <li><Link href="#"><i className="fab fa-instagram"></i></Link></li>
          </ul>
        </div>
      </div>

      {/* Sticky Header */}
      <div className="sticky-header">
        <div className="container">
          <div className="menu-area">
            <div className="row align-items-center justify-content-between">
              <div className="col-auto logo">
                <div className="header-logo">
                  <Link href="/">
                    <img alt="logo" src="/assets/images/logo/logo.png" />
                    <img alt="logo" src="/assets/images/logo/logo.png" />
                  </Link>
                </div>
              </div>
              <div className="col-auto nav-menu">
                <nav className="main-menu d-none d-lg-inline-block">
                  <ul className="navigation clearfix"></ul>
                </nav>
                <div className="navbar-right d-inline-flex d-lg-none">
                  <button className="menu-toggle sidebar-btn" type="button">
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Search Popup */}
      <div className="search-popup">
        <button className="close-search style-1"><i className="fa fa-times"></i></button>
        <button className="close-search"><i className="fas fa-arrow-up"></i></button>
        <form method="post" action="#">
          <div className="form-group">
            <input id="search1" type="search" name="search-field" defaultValue="" placeholder="Search..." required={true} />
            <button type="submit"><i className="fa fa-search"></i></button>
          </div>
        </form>
      </div>

      {/* Sidebar */}
      <div id="sidebar-area" className="sidebar">
        <div className="sidebar-overlay"></div>
        <div className="sidebar-wrapper">
          <button className="sidebar-close-btn">
            <svg className="icon-close" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="16px" height="12.7px" viewBox="0 0 16 12.7" xmlSpace="preserve">
              <g>
                <rect x="0" y="5.4" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -2.1569 7.5208)" width="16" height="2"></rect>
                <rect x="0" y="5.4" transform="matrix(0.7071 0.7071 -0.7071 0.7071 6.8431 -3.7929)" width="16" height="2"></rect>
              </g>
            </svg>
          </button>
          <div className="sidebar-content">
            <div className="sidebar-logo">
              <Link className="dark-logo" href="/"><img src="/assets/images/logo/logo.png" alt="logo" /></Link>
            </div>
            <div className="sidebar-menu-wrap"></div>
            <div className="sidebar-about">
              <h6>Make IT Secure</h6>
              <div className="sidebar-header">
                <h3>Continuous Secure Data Accessibility &amp; Availability</h3>
              </div>
            </div>
            <div className="instafeed-wrapper">
              {[1, 2, 3, 4, 5, 6].map((n) => (
                <div key={n} className="insta-item">
                  <Link href="https://www.instagram.com" target="_blank">
                    <img src={`/assets/images/sidebar/sidebar${n === 1 ? "1.jpeg" : `-${n}.jpg`}`} alt="" />
                    <span className="overlay"><i className="fa-brands fa-instagram"></i></span>
                  </Link>
                </div>
              ))}
            </div>
            <p className="text-center mt-40">Get latest updates on Panzer IT security solutions and product news</p>
            <form className="newsletter-form" action="https://formspree.io/f/mzbnjrnb" method="post">
              <div className="form-group">
                <input type="email" name="email" className="email" defaultValue="" placeholder="Enter Your Email" autoComplete="on" required={true} />
                <button type="submit">
                  <i className="far fa-paper-plane"></i>
                  <span className="btn-title"></span>
                </button>
              </div>
            </form>
            <ul className="sidebar-social">
              <li className="facebook"><Link href="#"><i className="fab fa-facebook-f"></i></Link></li>
              <li className="instagram"><Link href="#"><i className="fab fa-instagram"></i></Link></li>
              <li className="twitter"><Link href="#"><i className="fab fa-twitter"></i></Link></li>
              <li className="g-plus"><Link href="#"><i className="fab fa-google-plus"></i></Link></li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
