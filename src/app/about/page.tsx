import { Breadcrumb } from "@/components/Breadcrumb";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <div className="panzer-page panzer-page-about">
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
           



                 
              <section className="tv-choose-section space bg-light">
                  <div className="container">
                      <div className="row gy-30">
                          <div className="col-lg-12 col-xl-6">
                              <div className="tv-choose-left">
                                  
                                  <div className="title-wrap three" data-wow-duration="1.5s" data-wow-delay=".4s">
                                      <div className="sub-title-2 text-theme"><i className="fa-solid fa-circle-check"></i>About Us</div>
                                      <h2 className="sec-title no-title-animation">Best IT Security Solution <br />Provider in India</h2>
                                  </div>
                                  <p className="mb-35">Panzer IT understands that Information Technology is all about data. The company focuses on making business data secure, accessible and available through advanced technologies from multiple vendors across the globe.</p>
                                  <div className="tv-choose-boxs">
                                      <div className="tv-choose-single-box two wow fadeInLeft" data-wow-delay=".3s">
                                          <div className="box-top-content mb-20">
                                              <div className="icon-top"><Image src="/assets/images/choose/hm1-icon01.webp" alt=""  width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }} unoptimized /></div>
                                              <h4 className="title">Secure Your DATA</h4>
                                          </div>
                                          <p>Data is targeted on mobile, endpoint, server, cloud, data center and NAS environments, so every entry point must be protected.</p>
                                          <div className="icon bg-light">
                                              <i>
                                                  <svg width="10" height="12" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                      <path d="M10.0035 3.90804L1.41153 12.5L0 11.0885L8.59097 2.49651H1.01922V0.5H12V11.4808H10.0035V3.90804Z"></path>
                                                  </svg>
                                                  <svg width="10" height="12" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                      <path d="M10.0035 3.90804L1.41153 12.5L0 11.0885L8.59097 2.49651H1.01922V0.5H12V11.4808H10.0035V3.90804Z"></path>
                                                  </svg>
                                              </i>
                                          </div>
                                          
                                          <div className="choose-box box-1"></div>
                                          <div className="choose-box box-2"></div>
                                          <div className="choose-box box-3"></div>
                                          <div className="choose-box box-4"></div>
                                      </div>
                                      <div className="tv-choose-single-box wow fadeInRight" data-wow-delay=".5s">
                                          <div className="box-top-content mb-20">
                                              <div className="icon-top"><Image src="/assets/images/choose/hm1-icon02.webp" alt=""  width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }} unoptimized /></div>
                                              <h4 className="title">360 Degree IT Solutions</h4>
                                          </div>
                                          <p>Endpoint security, firewall, backup, disaster recovery, NAS, SAN, cloud storage, virtualization, DLP, monitoring, VAPT, APT and EDR.</p>
                                          <div className="icon bg-light">
                                              <i>
                                                  <svg width="10" height="12" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                      <path d="M10.0035 3.90804L1.41153 12.5L0 11.0885L8.59097 2.49651H1.01922V0.5H12V11.4808H10.0035V3.90804Z"></path>
                                                  </svg>
                                                  <svg width="10" height="12" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                      <path d="M10.0035 3.90804L1.41153 12.5L0 11.0885L8.59097 2.49651H1.01922V0.5H12V11.4808H10.0035V3.90804Z"></path>
                                                  </svg>
                                              </i>
                                          </div>
                                          
                                          <div className="choose-box box-1"></div>
                                          <div className="choose-box box-2"></div>
                                          <div className="choose-box box-3"></div>
                                          <div className="choose-box box-4"></div>
                                      </div>
                                  </div>
                                  <Link href="/contact" className="theme-btn mt-40 panzer-static-about-btn">
                                      <span className="link-effect">
                                          <span className="effect-1">Let's Make IT Secure</span>
                                          <span className="effect-1">Let's Make IT Secure</span>
                                      </span>
                                      <span className="arrow-all">
                                          <i>
                                              <svg width="16" height="19" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                  <path d="M2 6H10M10 6L6 2M10 6L6 10" stroke="#1053f3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                              </svg>
                                              <svg width="16" height="19" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                  <path d="M2 6H10M10 6L6 2M10 6L6 10" stroke="#1053f3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                              </svg>
                                          </i>
                                      </span>
                                  </Link>
                              </div>
                          </div>
                          <div className="col-lg-12 col-xl-6">
                             <div className="tv-choose-right-box panzer-about-data-wheel">
                                  <div className="data-item-hover">
                                      <figure className="image_right">
                                          <Image src="/assets/images/choose/about-1.webp" alt="Agency Image"  width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }} unoptimized />
                                      </figure>
                                  </div>

      							<div className="text_right">
      								<div className="content">
      									
      									<h3 className="title">Secure Data <br />Access</h3>
      									<div className="arrow"><Image src="/assets/images/choose/arrow.webp" alt=""  width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }} unoptimized /></div>
      									<span className="year">Available</span>
      								</div>
      							</div>
      							<Link className="middle-btn" href="/contact"><i className="fa-solid fa-arrow-up-right"></i></Link>
      						</div>
                          </div>
                      </div>
                  </div>
                  <div className="p-bottom-left wow slideInUp"><Image src="/assets/images/choose/hm1-shape01.webp" alt=""  width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }} unoptimized /></div>
              </section>

               
              <section className="tv-feature-section bg-light space-top pb-60">
                  <div className="container">
                      <div className="row">
                          <div className="col-lg-12">
                              <div className="title-wrap text-center mb-50">
                                  <h2 className="sec-title no-title-animation">Why Choose Panzer IT</h2>
                              </div>
                          </div>
                      </div>
                      <div className="row gy-30 about-feature-row">
                          <div className="col-lg-4 col-md-6 col-sm-6">
                              <div className="tv-feature-box wow fadeInLeft" data-wow-delay=".5s">
                                  <div className="icon-top">
                                      <div className="icon">
                                          <i>
                                              <svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                              <path d="M10.0035 3.90804L1.41153 12.5L0 11.0885L8.59097 2.49651H1.01922V0.5H12V11.4808H10.0035V3.90804Z" fill="white"></path>
                                              </svg>
                                              <svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                  <path d="M10.0035 3.90804L1.41153 12.5L0 11.0885L8.59097 2.49651H1.01922V0.5H12V11.4808H10.0035V3.90804Z" fill="white"></path>
                                              </svg>
                                          </i>
                                      </div>
                                  </div>
                                  <div className="logo mb-40"><img src="/assets/images/feature/hm1-icon01.webp" alt="" /></div>
                                  <h2>150+ Man-Years <br /> of Security Experience</h2>
                                  <p>Over 150 man-years of IT security solutions experience supporting data protection, availability and cyber defense programs.</p>
                              </div>
                          </div>
                          <div className="col-lg-4 col-md-6 col-sm-6">
                              <div className="tv-feature-box wow fadeInLeft" data-wow-delay=".7s">
                                  <div className="icon-top">
                                      <div className="icon">
                                          <i>
                                              <svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                              <path d="M10.0035 3.90804L1.41153 12.5L0 11.0885L8.59097 2.49651H1.01922V0.5H12V11.4808H10.0035V3.90804Z" fill="white"></path>
                                              </svg>
                                              <svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                  <path d="M10.0035 3.90804L1.41153 12.5L0 11.0885L8.59097 2.49651H1.01922V0.5H12V11.4808H10.0035V3.90804Z" fill="white"></path>
                                              </svg>
                                          </i>
                                      </div>
                                  </div>
                                  <div className="logo mb-40"><img src="/assets/images/feature/hm1-icon01.webp" alt="" /></div>
                                  <h2>Channel Partners <br /> Across India</h2>
                                  <p>Security software and services delivered through channel partners and associates across India.</p>
                              </div>
                          </div>
                          <div className="col-lg-4 col-md-6 col-sm-6">
                              <div className="tv-feature-box bg-theme3 wow fadeInLeft" data-wow-delay=".9s">
                              <div className="icon-top">
                                  <div className="icon style2 bg-dark">
                                      <i>
                                          <svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                          <path d="M10.0035 3.90804L1.41153 12.5L0 11.0885L8.59097 2.49651H1.01922V0.5H12V11.4808H10.0035V3.90804Z" fill="white"></path>
                                          </svg>
                                          <svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                              <path d="M10.0035 3.90804L1.41153 12.5L0 11.0885L8.59097 2.49651H1.01922V0.5H12V11.4808H10.0035V3.90804Z" fill="white"></path>
                                          </svg>
                                      </i>
                                  </div>
                              </div>
                              <div className="logo mb-40"><img src="/assets/images/feature/hm1-icon02.webp" alt="" /></div>
                              <h2>Enterprise, Government, <br /> SMB and SOHO Focus</h2>
                              <p>Best security software and services for enterprises, government, SMB and SOHO organizations.</p>
                              </div>
                          </div>
                      </div>
                  </div>
              </section>

              
              <section className="panzer-horizontal-milestone space">
                  <div className="container">
                      <div className="row">
                          <div className="col-lg-12">
                              <div className="title-wrap text-center">
                                  <h2 className="sec-title no-title-animation">Milestones</h2>
                              </div>
                          </div>
                      </div>
                      <div className="panzer-timeline">
                          <div className="panzer-timeline-item">
                              <div className="panzer-timeline-card">
                                  <p>Founded to make IT secure with advanced technologies from global vendors.</p>
                              </div>
                              <span className="panzer-timeline-dot"><i className="fa-solid fa-award"></i></span>
                              <span className="panzer-timeline-year">2005</span>
                          </div>
                          <div className="panzer-timeline-item">
                              <div className="panzer-timeline-card">
                                  <p>Expanded value-added distribution for IT security, backup and data protection solutions.</p>
                              </div>
                              <span className="panzer-timeline-dot"><i className="fa-solid fa-award"></i></span>
                              <span className="panzer-timeline-year">2010</span>
                          </div>
                          <div className="panzer-timeline-item">
                              <div className="panzer-timeline-card">
                                  <p>Strengthened alliances across DLP, IAM, PAM, VAPT, EDR, backup and secure remote access.</p>
                              </div>
                              <span className="panzer-timeline-dot"><i className="fa-solid fa-award"></i></span>
                              <span className="panzer-timeline-year">2015</span>
                          </div>
                          <div className="panzer-timeline-item">
                              <div className="panzer-timeline-card">
                                  <p>Celebrating 20 years of helping organizations keep data secure, accessible and available.</p>
                              </div>
                              <span className="panzer-timeline-dot"><i className="fa-solid fa-award"></i></span>
                              <span className="panzer-timeline-year">2025</span>
                          </div>
                      </div>
                  </div>
              </section>

              
               <section className="tv-about-section style-3 space bg-light">
                  <div className="container">
                      <div className="row gy-30 align-items-center">
                          <div className="col-lg-5 col-md-12">
                              <div className="about-left">
                                  <div className="about-thumb">
                                      <Image className="br-20" src="/assets/images/about/cyber.webp" alt=""  width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }} unoptimized />
                                  </div>
                                  <div className="pt-50 pb-30 md-d-none">
                                      <div className="border"></div>
                                  </div>
                                  <div className="counter">
                                          <div className="about-counter">
                                              <div className="count-box"><span className="count-number odometer" data-count="150"></span></div>
                                              <div className="text">
                                                  <span>+</span>
                                                  <p>Man-Years of <br /> Security Experience</p>
                                              </div>
                                              
                                          </div>
                                  </div>
                              </div>
                          </div>
                          <div className="col-lg-7 col-md-12">
                              <div className="about-content-wrap">
                                  
                                  <div className="title-wrap three">
                                      <div className="sub-title-2 text-theme"><i className="fa-solid fa-circle-check"></i>Mission Statement</div>
                                      <h2 className="sec-title no-title-animation">Continuous Secure Data <br /> Accessibility & Availability</h2>
                                      <p>Panzer IT believes data should be available to an organization every moment, from anywhere, with the right protection parameters. When data is not available when required, the purpose of IT is defeated.</p>
                                  </div>
                                  
                                  <div className="skills">
                                      
                                      <div className="skill-item">
                                          <div className="skill-header">
                                              <div className="skill-title">Secure Infrastructure</div>
                                          </div>
                                          <div className="skill-bar">
                                              <div className="bar-inner">
                                                  <div className="bar progress-line" data-width="95">
                                                      <div className="skill-percentage">
                                                          <div className="count-box"><span className="count-text" data-speed="3000" data-stop="95">0</span>%
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                      
                                      <div className="skill-item">
                                          <div className="skill-header">
                                              <div className="skill-title">Data Availability and Disaster Recovery</div>
                                          </div>
                                          <div className="skill-bar">
                                              <div className="bar-inner">
                                                  <div className="bar progress-line" data-width="92">
                                                      <div className="skill-percentage">
                                                          <div className="count-box"><span className="count-text" data-speed="3000" data-stop="92">0</span>%
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                                  <Link href="/contact" className="theme-btn mt-40 br-30 panzer-static-about-btn">
                                      <span className="link-effect">
                                          <span className="effect-1">Contact Panzer IT</span>
                                          <span className="effect-1">Contact Panzer IT</span>
                                      </span>
                                      <span className="arrow-all">
                                          <i>
                                              <svg width="16" height="19" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                  <path d="M2 6H10M10 6L6 2M10 6L6 10" stroke="#1053f3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                              </svg>
                                              <svg width="16" height="19" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                  <path d="M2 6H10M10 6L6 2M10 6L6 10" stroke="#1053f3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                              </svg>
                                          </i>
                                      </span>
                                  </Link>
                              </div>
                          </div>
                      </div>
                  </div>
              </section>



                   
              


              
              



            
              
            




              
              
              <section className="panzer-core-values-section bg-light space">
<div className="container">
                      <div className="row justify-content-center">
                          <div className="col-lg-7 text-center">
                              <div className="panzer-cv-label"><i className="fa-solid fa-circle-check"></i>Core Values</div>
                              <h2 className="panzer-cv-title">Core Values That Guide <br /> Panzer IT</h2>
                           
                          </div>
                      </div>
                      <div className="panzer-cv-grid">
                          <div className="panzer-cv-card wow fadeInUp" data-wow-delay=".1s">
                              <span className="panzer-cv-number">01</span>
                              <div className="panzer-cv-icon"><i className="fa-solid fa-shield-halved"></i></div>
                              <h4 className="panzer-cv-card-title">Data First</h4>
                              <p className="panzer-cv-card-text">Every solution starts with the belief that Information Technology is all about protecting and enabling business data.</p>
                              <span className="panzer-cv-card-line"></span>
                          </div>
                          <div className="panzer-cv-card wow fadeInUp" data-wow-delay=".2s">
                              <span className="panzer-cv-number">02</span>
                              <div className="panzer-cv-icon"><i className="fa-solid fa-handshake"></i></div>
                              <h4 className="panzer-cv-card-title">Security Focus</h4>
                              <p className="panzer-cv-card-text">We focus on securing every entry point, including endpoints, network perimeter, mail, web, server, cloud and storage layers.</p>
                              <span className="panzer-cv-card-line"></span>
                          </div>
                          <div className="panzer-cv-card wow fadeInUp" data-wow-delay=".3s">
                              <span className="panzer-cv-number">03</span>
                              <div className="panzer-cv-icon"><i className="fa-solid fa-lightbulb"></i></div>
                              <h4 className="panzer-cv-card-title">Availability</h4>
                              <p className="panzer-cv-card-text">We value continuous access and availability so organizations can use their data whenever business demands it.</p>
                              <span className="panzer-cv-card-line"></span>
                          </div>
                          <div className="panzer-cv-card wow fadeInUp" data-wow-delay=".4s">
                              <span className="panzer-cv-number">04</span>
                              <div className="panzer-cv-icon"><i className="fa-solid fa-rocket"></i></div>
                              <h4 className="panzer-cv-card-title">Right Implementation</h4>
                              <p className="panzer-cv-card-text">Technology works best when it is implemented correctly, with practical planning, proper controls and efficient resource use.</p>
                              <span className="panzer-cv-card-line"></span>
                          </div>
                          <div className="panzer-cv-card wow fadeInUp" data-wow-delay=".5s">
                              <span className="panzer-cv-number">05</span>
                              <div className="panzer-cv-icon"><i className="fa-solid fa-people-group"></i></div>
                              <h4 className="panzer-cv-card-title">Partner Led</h4>
                              <p className="panzer-cv-card-text">We work through channel partners, associates and global technology vendors to deliver trusted security outcomes.</p>
                              <span className="panzer-cv-card-line"></span>
                          </div>
                          <div className="panzer-cv-card wow fadeInUp" data-wow-delay=".6s">
                              <span className="panzer-cv-number">06</span>
                              <div className="panzer-cv-icon"><i className="fa-solid fa-trophy"></i></div>
                              <h4 className="panzer-cv-card-title">Customer Segments</h4>
                              <p className="panzer-cv-card-text">We support enterprise, government, SMB and SOHO customers with security software and services suited to their needs.</p>
                              <span className="panzer-cv-card-line"></span>
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
                          <path d="M420,20c21.5-0.4,38.8-2.5,51.1-4.5c13.4-2.2,26.5-5.2,27.3-5.4C514,6.5,518,4.7,528.5,2.7c7.1-1.3,17.9-2.8,31.5-2.7c0,0,0,0,0,0v20H420z" fill="#" className="panzer-wave-path"></path>
                          <path d="M420,20c-21.5-0.4-38.8-2.5-51.1-4.5c-13.4-2.2-26.5-5.2-27.3-5.4C326,6.5,322,4.7,311.5,2.7C304.3,1.4,293.6-0.1,280,0c0,0,0,0,0,0v20H420z" fill="#"></path>
                          <path d="M140,20c21.5-0.4,38.8-2.5,51.1-4.5c13.4-2.2,26.5-5.2,27.3-5.4C234,6.5,238,4.7,248.5,2.7c7.1-1.3,17.9-2.8,31.5-2.7c0,0,0,0,0,0v20H140z" fill="#"></path>
                          <path d="M140,20c-21.5-0.4-38.8-2.5-51.1-4.5c-13.4-2.2-26.5-5.2-27.3-5.4C46,6.5,42,4.7,31.5,2.7C24.3,1.4,13.6-0.1,0,0c0,0,0,0,0,0l0,20H140z" fill="#"></path>
                      </symbol>
                  </svg>

              </div>
          </div>
    </div>
  );
}
