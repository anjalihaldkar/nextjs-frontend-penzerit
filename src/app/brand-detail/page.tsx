import { Breadcrumb } from "@/components/Breadcrumb";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <div className="panzer-page panzer-page-brand-detail">
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
                                              <li>
                                                  <Link href="/">Home</Link>
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
                                              <li className="menu-item-has-children active">
                                                  <Link className="active" href="/brand">Brands</Link>
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
              





              
              
              <Breadcrumb title="Brand Details" paths={[{"name":"Brands","url":"/brand"},{"name":"Brand Details"}]} />






              
              
              <section className="services-details space bg-light">
                  <div className="container">
                      <div className="row">
                          <div className="col-xl-4 col-lg-4">
                              <div className="service-sidebar">

                                  <div className="sidebar-widget service-sidebar-single">
                                      <div className="widget-box category-list">
                                          <h4 className="sidebar-title"> Brands </h4>
                                          <div className="sidebar-service-list">
                                              <ul>
                                                  <li className="current"><Link href="#netand"> Netand IAM PAM <i className="fas fa-arrow-right"></i></Link></li>
                                                  <li><Link href="#mirobase"> Mirobase Employee Monitoring <i className="fas fa-arrow-right"></i></Link></li>
                                                  <li><Link href="#falcongaze"> FalconGaze SecureTower <i className="fas fa-arrow-right"></i></Link></li>
                                                  <li><Link href="#somansa"> Somansa Endpoint DLP <i className="fas fa-arrow-right"></i></Link></li>
                                                  <li><Link href="#secpoint"> SecPoint Penetrator <i className="fas fa-arrow-right"></i></Link></li>
                                                  <li><Link href="#netop"> Netop Secure Remote Access <i className="fas fa-arrow-right"></i></Link></li>
                                                  <li><Link href="#emsisoft"> Emsisoft Anti-Malware <i className="fas fa-arrow-right"></i></Link></li>
                                                  <li><Link href="#vembu"> Vembu BDR Suite <i className="fas fa-arrow-right"></i></Link></li>
                                                  <li><Link href="#acronis"> Acronis Backup Solution <i className="fas fa-arrow-right"></i></Link></li>
                                              </ul>
                                          </div>
                                      </div>
                                      <div className="widget-box service-details-help bg-dark">
                                          <div className="bg image"><Image src="/assets/images/service/details-bg.webp" alt=""  width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }} unoptimized /></div>
                                          <div className="service-details-content">
                                              <div className="icon"><Image src="/assets/images/icons/contact.png" alt=""  width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }} unoptimized /></div>
                                              <h2 className="help-title">Need Brand Guidance? <br /> Contact Us</h2>
                                              <p className="text">Talk to Panzer IT for the right security, backup and data protection brand fit.</p>
                                              <div className="help-contact">
                                              <Link href="/contact" className="theme-btn br-30">
                                                  <span className="link-effect">
                                                      <span className="effect-1">Contact with Us</span>
                                                      <span className="effect-1">Contact with Us</span>
                                                  </span>
                                                  <span className="arrow-all">
                                                      <i>
                                                          <svg width="16" height="19" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                              <path d="M2 6H10M10 6L6 2M10 6L6 10" stroke="#1053f3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                          </svg>
                                                          <svg width="16" height="19" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                              <path d="M2 6H10M10 6L6 2M10 6L6 10" stroke="#1053f3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                          </svg>
                                                      </i>
                                                  </span>
                                              </Link>
                                              </div>
                                          </div>
                                      </div>
                                      <div className="widget-box service-download-box mt-4">
                                          <h4 className="sidebar-title"> Downloads </h4>
                                          <div className="service-download-btn mb-10">
                                              <Link href="https://panzerit.com/brands/" target="_blank" className="theme-btn btn-style-1 d-grid">
                                                  <span className="btn-title"><Image className="mr-10" src="/assets/images/service/service-details-icon01.webp" alt=""  width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }} unoptimized />PIT_Presentation.pptx</span>
                                              </Link>
                                          </div>
                                          <div className="service-download-btn">
                                              <Link href="/contact" className="theme-btn btn-style-2 d-grid bg-dark">
                                                  <span className="btn-title"><Image className="mr-10" src="/assets/images/service/service-details-icon02.webp" alt=""  width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }} unoptimized />Request Brand Consultation</span>
                                              </Link>
                                          </div>
                                      </div>
                                  </div>

                              </div>
                          </div>

                          <div className="col-xl-8 col-lg-8">
                              <div className="services-details__content">
                                  <div className="image overlay-anim1">
                                      <Image className="br-10 w-100" src="/assets/images/about/cyber.webp" alt="Panzer IT security brands"  width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }} unoptimized />
                                  </div>
                                  <h3 className="title-two">Panzer IT Brand Portfolio</h3>
                                  <p>Panzer IT brings together specialist brands for identity and privileged access management, employee monitoring, data leak prevention, user behavior analytics, vulnerability assessment, secure remote access, anti-malware and backup protection.</p>
                                  <p className="mb-25">These brands help organizations protect sensitive data, improve cyber visibility, reduce operational risk and keep business systems available across endpoints, servers, cloud services and remote support environments.</p>
                                  <div className="row gy-30 align-items-center">
                                  <div className="row service-details-box my-40  md-my-0 md-gy-30">
                                      <div className="col-lg-6 col-md-6">
                                          <div className="service-details-block">
                                              <div className="inner-box d-flex align-items-center">
                                                  <div className="icon mr-20"><Image src="/assets/images/service/alam.webp" alt=""  width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }} unoptimized /></div>
                                                  <h5 className="title my-0">Security Brand <br />Portfolio</h5>
                                              </div>
                                          </div>
                                      </div>
                                      <div className="col-lg-6 col-md-6">
                                          <div className="service-details-block">
                                              <div className="inner-box d-flex align-items-center">
                                                  <div className="icon bg-dark mr-20"><Image src="/assets/images/service/check.webp" alt=""  width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }} unoptimized /></div>
                                                  <h5 className="title my-0">Implementation <br />& Support</h5>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                                  <h3 className="title">Brand Capabilities</h3>
                                  <p className="my-0">Panzer IT aligns each brand to the customer's risk profile, infrastructure, compliance needs and continuity goals.</p>
                                  <div className="row md-gy-30 align-items-center mt-30 md-mt-0 mb-40 md-mb-0">
                                      <div className="col-lg-6 col-md-6 col-sm-6">
                                          <div className="featured-list">
                                              <ul className="list-style-1">
                                                  <li><span><Image src="/assets/images/service/details-check.webp" alt=""  width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }} unoptimized /></span> IAM, PAM, PSM and DBAM</li>
                                                  <li><span><Image src="/assets/images/service/details-check.webp" alt=""  width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }} unoptimized /></span> Employee monitoring and UBA</li>
                                                  <li><span><Image src="/assets/images/service/details-check.webp" alt=""  width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }} unoptimized /></span> Endpoint DLP and insider threat visibility</li>
                                              </ul>
                                          </div>
                                      </div>
                                      <div className="col-lg-6 col-md-6 col-sm-6">
                                          <div className="featured-list">
                                              <ul className="list-style-1">
                                                  <li><span><Image src="/assets/images/service/details-check.webp" alt=""  width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }} unoptimized /></span> VAPT and vulnerability management</li>
                                                  <li><span><Image src="/assets/images/service/details-check.webp" alt=""  width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }} unoptimized /></span> Secure remote access and control</li>
                                                  <li><span><Image src="/assets/images/service/details-check.webp" alt=""  width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }} unoptimized /></span> Anti-malware, backup and disaster recovery</li>
                                              </ul>
                                          </div>
                                      </div>
                                  </div>                            
                                  <div className="row gy-30 align-items-stretch">
                                      <div className="col-lg-4 col-md-6" id="netand">
                                          <div className="service-details-block h-100">
                                              <div className="inner-box d-block">
                                                  <Image src="/assets/images/brands/01.png" alt="Netand IAM PAM" className="mb-20 panzer-brand-detail-logo"  width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }} unoptimized />
                                                  <h5 className="title">Netand IAM PAM</h5>
                                                  <p className="mb-0">Integrated identity management, privileged access, session management and database access control for critical systems.</p>
                                              </div>
                                          </div>
                                      </div>
                                      <div className="col-lg-4 col-md-6" id="mirobase">
                                          <div className="service-details-block h-100">
                                              <div className="inner-box d-block">
                                                  <Image src="/assets/images/brands/02.png" alt="Mirobase Employee Monitoring" className="mb-20 panzer-brand-detail-logo"  width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }} unoptimized />
                                                  <h5 className="title">Mirobase Employee Monitoring</h5>
                                                  <p className="mb-0">Employee monitoring, productivity reporting and user activity visibility for insider-risk programs.</p>
                                              </div>
                                          </div>
                                      </div>
                                      <div className="col-lg-4 col-md-6" id="falcongaze">
                                          <div className="service-details-block h-100">
                                              <div className="inner-box d-block">
                                                  <Image src="/assets/images/brands/03.webp" alt="FalconGaze SecureTower" className="mb-20 panzer-brand-detail-logo"  width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }} unoptimized />
                                                  <h5 className="title">FalconGaze SecureTower</h5>
                                                  <p className="mb-0">User behavior analytics and data security monitoring to detect policy violations and suspicious activity.</p>
                                              </div>
                                          </div>
                                      </div>
                                      <div className="col-lg-4 col-md-6" id="somansa">
                                          <div className="service-details-block h-100">
                                              <div className="inner-box d-block">
                                                  <Image src="/assets/images/brands/04.webp" alt="Somansa Endpoint DLP" className="mb-20 panzer-brand-detail-logo"  width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }} unoptimized />
                                                  <h5 className="title">Somansa Endpoint DLP</h5>
                                                  <p className="mb-0">Endpoint data loss prevention for monitoring, protecting and controlling sensitive business information.</p>
                                              </div>
                                          </div>
                                      </div>
                                      <div className="col-lg-4 col-md-6" id="secpoint">
                                          <div className="service-details-block h-100">
                                              <div className="inner-box d-block">
                                                  <Image src="/assets/images/brands/05.png" alt="SecPoint Penetrator" className="mb-20 panzer-brand-detail-logo"  width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }} unoptimized />
                                                  <h5 className="title">SecPoint Penetrator</h5>
                                                  <p className="mb-0">Vulnerability scanning, assessment and penetration testing support for network and application risk.</p>
                                              </div>
                                          </div>
                                      </div>
                                      <div className="col-lg-4 col-md-6" id="netop">
                                          <div className="service-details-block h-100">
                                              <div className="inner-box d-block">
                                                  <Image src="/assets/images/brands/06.png" alt="Netop Secure Remote Access" className="mb-20 panzer-brand-detail-logo"  width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }} unoptimized />
                                                  <h5 className="title">Netop Secure Remote Access</h5>
                                                  <p className="mb-0">Secure remote access and remote control for support, administration and distributed IT operations.</p>
                                              </div>
                                          </div>
                                      </div>
                                      <div className="col-lg-4 col-md-6" id="emsisoft">
                                          <div className="service-details-block h-100">
                                              <div className="inner-box d-block">
                                                  <Image src="/assets/images/brands/07.png" alt="Emsisoft Anti-Malware" className="mb-20 panzer-brand-detail-logo"  width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }} unoptimized />
                                                  <h5 className="title">Emsisoft Anti-Malware</h5>
                                                  <p className="mb-0">Advanced anti-malware protection for endpoints, ransomware defense and modern threat prevention.</p>
                                              </div>
                                          </div>
                                      </div>
                                      <div className="col-lg-4 col-md-6" id="vembu">
                                          <div className="service-details-block h-100">
                                              <div className="inner-box d-block">
                                                  <Image src="/assets/images/brands/08.png" alt="Vembu BDR Suite" className="mb-20 panzer-brand-detail-logo"  width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }} unoptimized />
                                                  <h5 className="title">Vembu BDR Suite</h5>
                                                  <p className="mb-0">Backup and disaster recovery for virtual, physical, cloud and SaaS workloads.</p>
                                              </div>
                                          </div>
                                      </div>
                                      <div className="col-lg-4 col-md-6" id="acronis">
                                          <div className="service-details-block h-100">
                                              <div className="inner-box d-block">
                                                  <Image src="/assets/images/brands/09.png" alt="Acronis Backup Solution" className="mb-20 panzer-brand-detail-logo"  width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }} unoptimized />
                                                  <h5 className="title">Acronis Backup Solution</h5>
                                                  <p className="mb-0">Cyber protection, backup, disaster recovery and secure data access for business environments.</p>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                                  <div className="innerpage mt-70 sm-mt-30">
                                      <h3 className="title mb-30 vxs-mb-25">Frequently Asked Questions</h3>
                                      <div className="tv-faq-section">
                                          <ul className="accordion-box">
                                              <li className="accordion active-block">
                                                  <div className="acc-btn bg-white active">01. How does Panzer IT choose the right brand?
                                                      <div className="icon"></div>
                                                  </div>
                                                  <div className="acc-content active">
                                                      <div className="content bg-white">
                                                          <div className="text">Panzer IT reviews the customer's infrastructure, data flow, users, compliance needs and security priorities before recommending the right brand or combination of brands.</div>
                                                      </div>
                                                  </div>
                                              </li>

                                              <li className="accordion">
                                                  <div className="acc-btn bg-white">02. Which security areas are covered?
                                                      <div className="icon fa fa-angle-right"></div>
                                                  </div>
                                                  <div className="acc-content">
                                                      <div className="content bg-white">
                                                          <div className="text">The portfolio covers IAM, PAM, endpoint DLP, employee monitoring, UBA, VAPT, secure remote access, anti-malware, backup and disaster recovery.</div>
                                                      </div>
                                                  </div>
                                              </li>

                                              <li className="accordion">
                                                  <div className="acc-btn bg-white">03. Can Panzer IT help after product selection?
                                                      <div className="icon fa fa-angle-right"></div>
                                                  </div>
                                                  <div className="acc-content">
                                                      <div className="content bg-white">
                                                          <div className="text">Yes. Panzer IT can support consultation, demos, implementation planning, product coordination and ongoing security solution guidance.</div>
                                                      </div>
                                                  </div>
                                              </li>
                                          </ul>                                    
                                      </div>
                                  </div>
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
