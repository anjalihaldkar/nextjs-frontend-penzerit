import { Breadcrumb } from "@/components/Breadcrumb";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <div className="panzer-page panzer-page-download">
      <div className="download-page solution-page">
<div className="page-wrapper bg-light">

              


              
               <header className="tv-header header-style3 panzer-image-header">
                  <div className="main-wrapper">
                     
                      <div className="menu-area">
                          <div className="row align-items-center justify-content-between">
                              <div className="col-auto logo">
                                  <div className="header-logo">
                                      <Link href="/">
                                          <Image alt="logo" src="/assets/images/logo/logo.png"  width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }} unoptimized />
                                          <Image alt="logo" src="/assets/images/logo/logo.png"  width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }} unoptimized />
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
                                                      <li><Link href="#">Vulnerability Scanner, Assessment & Penetration
                                                              Testing</Link></li>
                                                      <li><Link href="#">Employee Monitoring Solution</Link></li>
                                                      <li><Link href="#">Most Advance Anti-Malware</Link></li>
                                                      <li><Link href="#">Backup & Disaster Recovery</Link></li>
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
                                                      <li><Link href="/brand-detail#secpoint">SecPoint Penetrator Vulnerability Scanner &
                                                              Assessment</Link></li>
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

              
              <div className="mobile-menu-wrapper">
                  <div className="mobile-menu-area">
                      <button className="menu-toggle"><i className="fas fa-times"></i></button>
                      <div className="mobile-logo">
                          <Link href="/"><Image alt="Pureflow" src="/assets/images/logo/logo.webp"  width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }} unoptimized /></Link>
                      </div>
                      <div className="mobile-menu">
                          <ul className="navigation clearfix">
                              
                          </ul>
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


              
              <div className="sticky-header">
                  <div className="container">
                      
                      <div className="menu-area">
                          <div className="row align-items-center justify-content-between">
                              <div className="col-auto logo">
                                  <div className="header-logo">
                                      <Link href="/">
                                          <Image alt="logo" src="/assets/images/logo/logo.png"  width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }} unoptimized />
                                          <Image alt="logo" src="/assets/images/logo/logo.png"  width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }} unoptimized />
                                      </Link>
                                  </div>
                              </div>
                              <div className="col-auto nav-menu">
                                  <nav className="main-menu d-none d-lg-inline-block">
                                      <ul className="navigation clearfix">
                                          
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
                      </div>
                  </div>
              </div>
              


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
                              <Link className="dark-logo" href="/"><Image src="/assets/images/logo/logo.png" alt="logo"  width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }} unoptimized /></Link>
                          </div>
                          <div className="sidebar-menu-wrap"></div>
                          <div className="sidebar-about">
                              <h6>Make IT Secure</h6>
                              <div className="sidebar-header">
                                  <h3>Continuous Secure Data Accessibility & Availability</h3>
                              </div>
                          </div>
                          <div className="instafeed-wrapper">
                              <div className="insta-item">
                                  <Link href="https://www.instagram.com" target="_blank">
                                      <Image src="/assets/images/sidebar/sidebar1.jpeg" alt=""  width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }} unoptimized />
                                      <span className="overlay"><i className="fa-brands fa-instagram"></i></span>
                                  </Link>
                              </div>
                              <div className="insta-item">
                                  <Link href="https://www.instagram.com" target="_blank">
                                      <Image src="/assets/images/sidebar/sidebar-2.jpg" alt=""  width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }} unoptimized />
                                      <span className="overlay"><i className="fa-brands fa-instagram"></i></span>
                                  </Link>
                              </div>
                              <div className="insta-item">
                                  <Link href="https://www.instagram.com" target="_blank">
                                      <Image src="/assets/images/sidebar/sidebar-3.jpg" alt=""  width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }} unoptimized />
                                      <span className="overlay"><i className="fa-brands fa-instagram"></i></span>
                                  </Link>
                              </div>
                              <div className="insta-item">
                                  <Link href="https://www.instagram.com" target="_blank">
                                      <Image src="/assets/images/sidebar/sidebar-4.jpg" alt=""  width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }} unoptimized />
                                      <span className="overlay"><i className="fa-brands fa-instagram"></i></span>
                                  </Link>
                              </div>
                              <div className="insta-item">
                                  <Link href="https://www.instagram.com" target="_blank">
                                      <Image src="/assets/images/sidebar/sidebar-5.jpg" alt=""  width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }} unoptimized />
                                      <span className="overlay"><i className="fa-brands fa-instagram"></i></span>
                                  </Link>
                              </div>
                              <div className="insta-item">
                                  <Link href="https://www.instagram.com" target="_blank">
                                      <Image src="/assets/images/sidebar/sidebar-6.jpg" alt=""  width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }} unoptimized />
                                      <span className="overlay"><i className="fa-brands fa-instagram"></i></span>
                                  </Link>
                              </div>
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

             

      		 
              
              <Breadcrumb title="Resources" paths={[{"name":"Downloads"}]} />


      		

      		  
              <section className="tv-service-section style-5 bg-light2 space">
                  <div className="container">
                      <div className="row gy-30 align-items-center">
                          <div className="col-lg-12">
                              <div className="service-title-area d-flex justify-content-between sm-flex-column sm-mb-30">
                                  <div className="title-wrap" data-wow-duration="1.5s" data-wow-delay=".4s">
                                      <div className="sub-title-2 text-theme"><i className="fa-solid fa-circle-check"></i>Downloads</div>
                                      <h2 className="sec-title no-title-animation">Panzer IT downloads, product presentations <br /> and technical resources</h2>
                                  </div>
                                  
                              </div>
                          </div>
                      </div>
                      <div className="row gy-25 download-resource-row">
                          <div className="col-lg-4 col-md-6">
                              <div className="service-box-five">
                                  <div className="icon-top">
                                      <div className="icon">
                                          <span>01</span>
                                      </div>
                                  </div>
                                  <div className="service-top">
                                      <div className="logo"><Image src="/assets/images/service/hm5-icon01.webp" alt=""  width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }} unoptimized /></div>
                                      <h4>Panzer IT Product <br /> Presentation</h4>
                                  </div>
                                  <p>Company overview, mission statement, solution portfolio and associate brand highlights from Panzer IT.</p>
                                  <Link href="https://panzerit.com/wp-content/uploads/2025/01/PIT_Presentation_online.pdf" className="theme-btn style2 br-30">
                                          <span className="link-effect">
                                              <span className="effect-1">Download PDF</span>
                                              <span className="effect-1">Download PDF</span>
                                          </span>
                                          <span className="arrow-all-2">
                                              <i>
                                                  <svg width="10" height="10" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                  <path d="M10.0035 3.90804L1.41153 12.5L0 11.0885L8.59097 2.49651H1.01922V0.5H12V11.4808H10.0035V3.90804Z"></path>
                                                  </svg>
                                                  <svg width="10" height="10" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                      <path d="M10.0035 3.90804L1.41153 12.5L0 11.0885L8.59097 2.49651H1.01922V0.5H12V11.4808H10.0035V3.90804Z"></path>
                                                  </svg>
                                              </i>
                                          </span>
                                  </Link>
                              </div>
                          </div>
                          <div className="col-lg-4 col-md-6">
                              <div className="service-box-five">
                                  <div className="icon-top">
                                      <div className="icon">
                                          <span>02</span>
                                      </div>
                                  </div>
                                  <div className="service-top">
                                      <div className="logo"><Image src="/assets/images/service/hm5-icon02.webp" alt=""  width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }} unoptimized /></div>
                                      <h4>Falcongaze SecureTower <br /> Presentation</h4>
                                  </div>
                                  <p>Workflow control, insider threat protection and data leak prevention presentation from Falcongaze SecureTower.</p>
                                  <Link href="https://panzerit.com/wp-content/uploads/2018/09/Falcongaze-SecureTower.-Workflows-control-and-Insider-Threat-Protection.pdf" className="theme-btn style2 br-30">
                                          <span className="link-effect">
                                              <span className="effect-1">Download PDF</span>
                                              <span className="effect-1">Download PDF</span>
                                          </span>
                                          <span className="arrow-all-2">
                                              <i>
                                                  <svg width="10" height="10" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                  <path d="M10.0035 3.90804L1.41153 12.5L0 11.0885L8.59097 2.49651H1.01922V0.5H12V11.4808H10.0035V3.90804Z"></path>
                                                  </svg>
                                                  <svg width="10" height="10" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                      <path d="M10.0035 3.90804L1.41153 12.5L0 11.0885L8.59097 2.49651H1.01922V0.5H12V11.4808H10.0035V3.90804Z"></path>
                                                  </svg>
                                              </i>
                                          </span>
                                  </Link>
                              </div>
                          </div>
                          <div className="col-lg-4 col-md-6">
                              <div className="service-box-five">
                                  <div className="icon-top">
                                      <div className="icon">
                                          <span>03</span>
                                      </div>
                                  </div>
                                  <div className="service-top">
                                      <div className="logo"><Image src="/assets/images/service/hm5-icon03.webp" alt=""  width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }} unoptimized /></div>
                                      <h4>Netop Remote Control <br /> Overview</h4>
                                  </div>
                                  <p>General presentation for secure remote access, remote support and cross-platform device connectivity.</p>
                                  <Link href="https://panzerit.com/wp-content/uploads/2018/09/NRC-General-Presentation.pdf" className="theme-btn style2 br-30">
                                          <span className="link-effect">
                                              <span className="effect-1">Download PDF</span>
                                              <span className="effect-1">Download PDF</span>
                                          </span>
                                          <span className="arrow-all-2">
                                              <i>
                                                  <svg width="10" height="10" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                  <path d="M10.0035 3.90804L1.41153 12.5L0 11.0885L8.59097 2.49651H1.01922V0.5H12V11.4808H10.0035V3.90804Z"></path>
                                                  </svg>
                                                  <svg width="10" height="10" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                      <path d="M10.0035 3.90804L1.41153 12.5L0 11.0885L8.59097 2.49651H1.01922V0.5H12V11.4808H10.0035V3.90804Z"></path>
                                                  </svg>
                                              </i>
                                          </span>
                                  </Link>
                              </div>
                          </div>
                          <div className="col-lg-4 col-md-6">
                              <div className="service-box-five">
                                  <div className="icon-top">
                                      <div className="icon">
                                          <span>04</span>
                                      </div>
                                  </div>
                                  <div className="service-top">
                                      <div className="logo"><Image src="/assets/images/service/hm5-icon04.webp" alt=""  width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }} unoptimized /></div>
                                      <h4>Heimdal Product <br /> Presentation</h4>
                                  </div>
                                  <p>Advance persistent threat prevention, patch management and real-time cloud protection overview.</p>
                                  <Link href="https://panzerit.com/wp-content/uploads/2018/09/Heimdal-Product-Presentation.pdf" className="theme-btn style2 br-30">
                                          <span className="link-effect">
                                              <span className="effect-1">Download PDF</span>
                                              <span className="effect-1">Download PDF</span>
                                          </span>
                                          <span className="arrow-all-2">
                                              <i>
                                                  <svg width="10" height="10" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                  <path d="M10.0035 3.90804L1.41153 12.5L0 11.0885L8.59097 2.49651H1.01922V0.5H12V11.4808H10.0035V3.90804Z"></path>
                                                  </svg>
                                                  <svg width="10" height="10" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                      <path d="M10.0035 3.90804L1.41153 12.5L0 11.0885L8.59097 2.49651H1.01922V0.5H12V11.4808H10.0035V3.90804Z"></path>
                                                  </svg>
                                              </i>
                                          </span>
                                  </Link>
                              </div>
                          </div>
                          <div className="col-lg-4 col-md-6">
                              <div className="service-box-five">
                                  <div className="icon-top">
                                      <div className="icon">
                                          <span>05</span>
                                      </div>
                                  </div>
                                  <div className="service-top">
                                      <div className="logo"><Image src="/assets/images/service/hm5-icon05.webp" alt=""  width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }} unoptimized /></div>
                                      <h4>Scopd Manual <br /> v10.60</h4>
                                  </div>
                                  <p>Technical manual covering search, indexing, audit options, reporting and management functions.</p>
                                  <Link href="https://panzerit.com/techteam/Scopd_Manual9.pdf" className="theme-btn style2 br-30">
                                          <span className="link-effect">
                                              <span className="effect-1">Download PDF</span>
                                              <span className="effect-1">Download PDF</span>
                                          </span>
                                          <span className="arrow-all-2">
                                              <i>
                                                  <svg width="10" height="10" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                  <path d="M10.0035 3.90804L1.41153 12.5L0 11.0885L8.59097 2.49651H1.01922V0.5H12V11.4808H10.0035V3.90804Z"></path>
                                                  </svg>
                                                  <svg width="10" height="10" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                      <path d="M10.0035 3.90804L1.41153 12.5L0 11.0885L8.59097 2.49651H1.01922V0.5H12V11.4808H10.0035V3.90804Z"></path>
                                                  </svg>
                                              </i>
                                          </span>
                                  </Link>
                              </div>
                          </div>
                          <div className="col-lg-4 col-md-6">
                              <div className="service-box-five">
                                  <div className="icon-top">
                                      <div className="icon">
                                          <span>06</span>
                                      </div>
                                  </div>
                                  <div className="service-top">
                                      <div className="logo"><Image src="/assets/images/service/hm5-icon06.webp" alt=""  width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }} unoptimized /></div>
                                      <h4>Emsisoft Anti-Malware <br /> Free Trial</h4>
                                  </div>
                                  <p>30-day free trial resources with 32-bit MSI, 64-bit MSI and combined EXE options listed by Panzer IT.</p>
                                  <Link href="https://panzerit.com/brands/emsisoft-most-advance-malware-protection/" className="theme-btn style2 br-30">
                                          <span className="link-effect">
                                              <span className="effect-1">Open Resource</span>
                                              <span className="effect-1">Open Resource</span>
                                          </span>
                                          <span className="arrow-all-2">
                                              <i>
                                                  <svg width="10" height="10" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                  <path d="M10.0035 3.90804L1.41153 12.5L0 11.0885L8.59097 2.49651H1.01922V0.5H12V11.4808H10.0035V3.90804Z"></path>
                                                  </svg>
                                                  <svg width="10" height="10" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                      <path d="M10.0035 3.90804L1.41153 12.5L0 11.0885L8.59097 2.49651H1.01922V0.5H12V11.4808H10.0035V3.90804Z"></path>
                                                  </svg>
                                              </i>
                                          </span>
                                  </Link>
                              </div>
                          </div>                                                                                                    
                      </div>
                  </div>
              </section>


      		
              <section className="tv-choose-section style-6 space bg-dark position-relative download-page-choose">
                  <div className="bg image"><Image src="/assets/images/choose/hm8-bg01.webp" alt=""  width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }} unoptimized /></div>
                  <div className="container">
                      
                      <div className="title-wrap text-center three">
                          <div className="sub-title-2 text-white two"><i className="fa-solid fa-circle-check"></i>Product</div>
                          <h2 className="sec-title text-white no-title-animation">Explore Panzer IT products <br /> across security and recovery</h2>
                      </div>

                      <div className="row gy-30">
                          <div className="col-lg-4 col-md-6 col-sm-6">
                              <div className="choose-left">
                                  <div className="choose-box mb-40">
                                      <div className="icon"><Image src="/assets/images/choose/hm8-icon01.webp" alt=""  width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }} unoptimized /></div>
                                      <div className="text"><h6>Scopd DLP <br /> with UEBA</h6></div>
                                  </div>
                                  <div className="choose-box mb-40">
                                      <div className="icon"><Image src="/assets/images/choose/hm8-icon02.webp" alt=""  width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }} unoptimized /></div>
                                      <div className="text"><h6>Falcongaze <br /> SecureTower</h6></div>
                                  </div>
                                  <div className="choose-box">
                                      <div className="icon"><Image src="/assets/images/choose/hm8-icon03.webp" alt=""  width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }} unoptimized /></div>
                                      <div className="text"><h6>Netop Remote <br /> Control</h6></div>
                                  </div>
                              </div>
                          </div>
                          <div className="col-lg-4 col-md-6 d-none d-lg-block">
                              <div className="choose-middle">
                                  <div className="ai-box">
                                      <Image className="spin2" src="/assets/images/choose/hm8-ai.webp" alt=""  width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }} unoptimized />
                                      <div className="circle"><h1>360°</h1></div>
                                  </div>                                                      
                              </div>
                          </div>
                          <div className="col-lg-4 col-md-6 col-sm-6">
                              <div className="choose-right">
                                  <div className="choose-box mb-40">
                                      <div className="icon"><Image src="/assets/images/choose/hm8-icon01.webp" alt=""  width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }} unoptimized /></div>
                                      <div className="text"><h6>Heimdal <br /> Security</h6></div>
                                  </div>
                                  <div className="choose-box mb-40">
                                      <div className="icon"><Image src="/assets/images/choose/hm8-icon02.webp" alt=""  width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }} unoptimized /></div>
                                      <div className="text"><h6>Emsisoft <br /> Anti-Malware</h6></div>
                                  </div>
                                  <div className="choose-box">
                                      <div className="icon"><Image src="/assets/images/choose/hm8-icon03.webp" alt=""  width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }} unoptimized /></div>
                                      <div className="text"><h6>Vembu BDR <br /> Suite</h6></div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </section>


              <section className="tv-contact-section style-4 z-1">
                  <div className="tv-contact-inner space position-relative overflow-hidden bg-light2 mx-20 ml-mx-0">
                      <div className="container">
                          <div className="row gy-30 contact-wrapper align-items-stretch">
                              <div className="col-lg-6">
                                  <div className="contact-right-content">
                                      <div className="title-wrap text-center">
                                          <div className="sub-title-2 text-theme"><i className="fa-solid fa-circle-check"></i>Contact
                                              Us</div>
                                          <h2 className="sec-title no-title-animation">Feel free to touch base with Panzer IT</h2>
                                      </div>
                                      <div className="contact-form style-4">
                                          <form id="contact_form" className="contact_form" action="#" method="post">
                                              <div className="form-grid">
                                                  <div className="form-group">
                                                      <input type="text" id="fullName" name="name" placeholder="Your Name" required={true} autoComplete="on" />
                                                  </div>
                                                  <div className="form-group">
                                                      <input type="email" id="userEmail" name="email" placeholder="E-Mail" required={true} autoComplete="on" />
                                                  </div>
                                              </div>
                                              <div className="form-grid">
                                                  <div className="form-group">
                                                      <select className="custom-select" id="service" name="service" autoComplete="off" defaultValue="">
                                                          <option value="" disabled={true}>Select Service</option>
                                                          <option value="scopd-dlp">Scopd DLP with UEBA
                                                          </option>
                                                          <option value="backup-recovery">Backup & Disaster Recovery</option>
                                                          <option value="dlp">Data Leak Prevention - DLP</option>
                                                          <option value="vapt">Vulnerability Scanner, Assessment & VAPT</option>
                                                          <option value="employee-monitoring">Employee Monitoring</option>
                                                          <option value="edr">Advance Threat Prevention | EDR | EPS</option>
                                                      </select>
                                                  </div>
                                              </div>
                                              <div className="form-group">
                                                  <textarea id="msg" name="msg" placeholder="Write Message" required={true}></textarea>
                                              </div>
                                              <button type="submit" className="theme-btn" data-loading-text="Please wait...">
                                                  <span className="btn-title mr-10">Send Message</span>
                                                  <i className="fa-solid fa-arrow-right"></i>
                                              </button>
                                          </form>
                                      </div>
                                  </div>
                              </div>
                              <div className="col-lg-6">
                                  <div className="contact-left-thumb wow img-anim-right overflow-hidden">
                                      <figure>
                                          <Image src="/assets/images/contact/hm4-img011.webp" alt=""  width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }} unoptimized />
                                      </figure>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </section>

              <footer className="footer-section panzer-compact-footer panzer-image-footer z-1 br-30 xxl-br-0 pt-75 position-relative mx-30 mb-30 xxl-m-0 overflow-hidden">
                  <div className="bg image mbm-screen"><Image src="/assets/images/footer/hm1-bg01.webp" alt=""  width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }} unoptimized /></div>
                  <div className="footer-top space">
                      <div className="container">
                          <div className="row">
                              <div className="col-lg-12 footer-brand">
                                  <div className="brand-info wow fadeInUp" data-wow-delay=".2s">
                                      <div className="logo">
                                          <Image src="/assets/images/logo/logo.png" alt="Panzer IT Logo" width="150"  height={0} sizes="100vw" style={{ width: "100%", height: "auto" }} unoptimized />
                                      </div>
                                      <div className="contact-info">
                                          <div className="contact-item">
                                              <h3 className="title">EMAIL</h3>
                                              <Link href="mailto:Sales@PanzerIT.com">
                                                  <i className="fa-sharp fa-light fa-envelope"></i> Sales@PanzerIT.com
                                              </Link>
                                          </div>
                                          <div className="contact-item">
                                              <h3 className="title">CALL US :</h3>
                                              <Link href="tel:+919004655099">
                                                  <i className="flaticon-phone"></i> +91 90046 55099
                                              </Link>
                                          </div>
                                          <div className="contact-item">
                                              <h3 className="title">LOCATION</h3>
                                              <Link href="/contact">
                                                  <i className="fa-solid fa-location-dot"></i> Navi Mumbai, Maharashtra
                                              </Link>
                                          </div>
                                      </div>
                                      <div className="panzer-footer-newsletter">
                                          <h3 className="title">subscribe to our newsletters</h3>
                                          <form className="newsletter-form" action="https://formspree.io/f/mzbnjrnb" method="post">
                                              <div className="form-group">
                                                  <input type="email" name="email" className="email" defaultValue="" placeholder="Email Address" autoComplete="on" required={true} />
                                                  <button type="submit" aria-label="Subscribe">
                                                      <i className="far fa-paper-plane"></i>
                                                  </button>
                                              </div>
                                          </form>
                                      </div>
                                      <div className="social-links">
                                          <Link href="#" className="social-icon"><i className="fab fa-facebook-f"></i></Link>
                                          <Link href="#" className="social-icon"><i className="fab fa-x-twitter"></i></Link>
                                          <Link href="#" className="social-icon"><i className="fab fa-linkedin-in"></i></Link>
                                          <Link href="#" className="social-icon"><i className="fab fa-pinterest-p"></i></Link>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="footer-bottom">
                      <div className="container">
                          <div className="row gy-15">
                              <div className="col-md-6">
                                  <div className="copyright wow fadeInUp" data-wow-delay=".3s">
                                      <p className="mb-0">Copyright ® Panzer IT - Make IT Secure.
                                          All Rights
                                          Reserved. </p>
                                  </div>
                              </div>
                              <div className="col-md-6 text-md-end">
                                  <div className="footer-policy wow fadeInUp" data-wow-delay=".6s">
                                      <Link href="#">Privacy Policy</Link>
                                      
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </footer>

          </div>

          <div className="scrollToTop">
              <div className="arrowUp">
                  <i className="fa-light fa-arrow-up"></i>
              </div>
              <div className="water panzer-scroll-water">
                  <svg viewBox="0 0 560 20" className="water_wave water_wave_back">
                      <use xlinkHref="#wave"></use>
                  </svg>
                  <svg viewBox="0 0 560 20" className="water_wave water_wave_front">
                      <use xlinkHref="#wave"></use>
                  </svg>
                  <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 560 20" className="panzer-wave-symbols">
                      <symbol id="wave">
                          <path d="M420,20c21.5-0.4,38.8-2.5,51.1-4.5c13.4-2.2,26.5-5.2,27.3-5.4C514,6.5,518,4.7,528.5,2.7c7.1-1.3,17.9-2.8,31.5-2.7c0,0,0,0,0,0v20H420z" fill="#"></path>
                          <path d="M420,20c-21.5-0.4-38.8-2.5-51.1-4.5c-13.4-2.2-26.5-5.2-27.3-5.4C326,6.5,322,4.7,311.5,2.7C304.3,1.4,293.6-0.1,280,0c0,0,0,0,0,0v20H420z" fill="#"></path>
                          <path d="M140,20c21.5-0.4,38.8-2.5,51.1-4.5c13.4-2.2,26.5-5.2,27.3-5.4C234,6.5,238,4.7,248.5,2.7c7.1-1.3,17.9-2.8,31.5-2.7c0,0,0,0,0,0v20H140z" fill="#"></path>
                          <path d="M140,20c-21.5-0.4-38.8-2.5-51.1-4.5c-13.4-2.2-26.5-5.2-27.3-5.4C46,6.5,42,4.7,31.5,2.7C24.3,1.4,13.6-0.1,0,0c0,0,0,0,0,0l0,20H140z" fill="#"></path>
                      </symbol>
                  </svg>
              </div>
          </div>
      </div>
    </div>
  );
}
