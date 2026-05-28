import { Breadcrumb } from "@/components/Breadcrumb";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <div className="panzer-page panzer-page-contact">
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
              


              
              
              <Breadcrumb title="Contact Us" paths={[{"name":"Contact Us"}]} />



              
              <section className="tv-contact-section inner space bg-light">
                  <div className="container">
                      <div className="row gy-30">
                          <div className="col-lg-5">
                              <div className="contact-content-wrap">
                                  
                                  <div className="title-wrap" data-wow-duration="1.5s" data-wow-delay=".4s">
                                      <div className="sub-title-2 text-theme"><i className="fa-solid fa-circle-check"></i>Contact Us</div>
                                      <h2 className="sec-title no-title-animation">Contact Panzer IT for <br /> cyber security, backup <br />and data  protection</h2>
                                      <p>Feel free to touchbase Panzer IT for any query, requirement, discussion or IT security consultancy.</p>
                                  </div>
                                  <div className="contact-info">
                                      <div className="contact-item">
                                          <div className="icon">
                                              <i className="fa-solid fa-location-dot"></i>
                                          </div>
                                          <div className="info">
                                              <h4 className="title">Office Locations</h4>
                                              <p>New Delhi: F-398, Sector 63, Noida (NCR) 201307</p>
                                              <p className="mb-0 mt-10">Mumbai: 203, Sai Jewel, Plot 26, Sector 35/I, Kharghar, Navi Mumbai, Maharashtra 410210</p>
                                          </div>
                                      </div>
                                      <div className="contact-item">
                                          <div className="icon">
                                              <i className="fa-light fa-circle-phone"></i>
                                          </div>
                                          <div className="info">
                                              <h4 className="title">Call Us Anytime</h4>
                                              <div className="content">
                                                  Sales & Enquiries: <Link href="tel:+919004655099">+91 90046 55099</Link><br />
                                                  Availability: Working 24x7 | World Wide Work
                                              </div>
                                          </div>
                                      </div>
                                      <div className="contact-item">
                                          <div className="icon">
                                              <i className="fa-light fa-envelope"></i>
                                          </div>
                                          <div className="info">
                                              <h4 className="title">Send E-Mail</h4>
                                              <div className="content">
                                                  <Link href="mailto:Sales@PanzerIT.com">Sales@PanzerIT.com</Link><br />
                                                  GST New Delhi: 09AARFP6594R1ZS<br />
                                                  GST Mumbai: 27AARFP6594R1ZU
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                                  <div className="social-links">
                                      <Link href="#">
                                          <span className="link-effect">
                                              <span className="effect-1">Facebook</span>
                                              <span className="effect-1">Facebook</span>
                                          </span>
                                      </Link>
                                      <Link href="#">
                                          <span className="link-effect">
                                              <span className="effect-1">Twitter/X</span>
                                              <span className="effect-1">Twitter/X</span>
                                          </span>
                                      </Link>
                                      <Link href="#">
                                          <span className="link-effect">
                                              <span className="effect-1">LinkedIn</span>
                                              <span className="effect-1">LinkedIn</span>
                                          </span>
                                      </Link>
                                      <Link href="#">
                                          <span className="link-effect">
                                              <span className="effect-1">Instagram</span>
                                              <span className="effect-1">Instagram</span>
                                          </span>
                                      </Link>
                                  </div>
                              </div>
                          </div>
                          <div className="col-lg-7">
                              <div className="contact-form">
                                  <h2 className="title mt--5 mb-35">Discuss your requirement with Panzer IT</h2>
                                  <form id="contact_form" className="contact_form" action="https://formspree.io/f/mzbnjrnb" method="post">
                                      <div className="form-grid">
                                          <div className="form-group">
                                              <span className="icon"><i className="fa-slab-press fa-regular fa-user"></i></span>
                                              <input type="text" id="fullName" name="name" placeholder="Your Name*" required={true} autoComplete="on" />
                                          </div>
                                          <div className="form-group">
                                              <span className="icon"><i className="fa-regular fa-building"></i></span>
                                              <input type="text" id="companyName" name="company" placeholder="Your Company*" required={true} autoComplete="on" />
                                          </div>
                                      </div>
                                      <div className="form-grid">
                                          <div className="form-group">
                                              <span className="icon"><i className="fa-regular fa-location-dot"></i></span>
                                              <input type="text" id="city" name="city" placeholder="Your City" autoComplete="on" />
                                          </div>
                                          <div className="form-group">
                                              <span className="icon"><i className="fa-regular fa-envelope"></i></span>
                                              <input type="email" id="userEmail" name="email" placeholder="Your Email*" required={true} autoComplete="on" />
                                          </div>
                                      </div>
                                      <div className="form-grid">
                                          <div className="form-group">
                                              <span className="icon"><i className="fa-solid fa-phone"></i></span>
                                              <input type="text" id="phone" name="phone" placeholder="Your Mobile" required={true} autoComplete="off" />
                                          </div>
                                          <div className="form-group">
                                              <span className="icon"><i className="fa-regular fa-tag"></i></span>
                                              <input type="text" id="subject" name="subject" placeholder="Subject*" required={true} autoComplete="on" />
                                          </div>
                                      </div>
                                      <div className="form-group">
                                          <textarea id="msg" name="msg" placeholder="Your Message*" required={true}></textarea>
                                      </div>
                                      <div className="form-group terms">
                                          <input type="checkbox" id="terms" required={true} />
                                          <label htmlFor="terms">I agree to be contacted regarding my enquiry.</label>
                                      </div>
                                      <button type="submit" className="theme-btn  mt-30" data-loading-text="Please wait...">
                                          <span className="link-effect">
                                              <span className="effect-1">Submit Now</span>
                                              <span className="effect-1">Submit Now</span>
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
                                      </button>
                                  </form>
                              </div>
                          </div>
                      </div>
                  </div>
              </section>




               
              <section className="tv-branch-section space bg-light">
                  <div className="container">
                      
                      <div className="title-wrap three text-center" data-wow-duration="1.5s" data-wow-delay=".4s">
                          <div className="sub-title-2 text-theme"><i className="fa-solid fa-circle-check"></i>Our Branches</div>
                          <h2 className="sec-title no-title-animation">Connect with our office locations</h2>
                          <p>Panzer IT is available for discussions, enquiries and consultancy support through its New Delhi and Mumbai offices.</p>
                      </div>
                      <div className="row gy-30">
                          <div className="col-lg-4 col-md-6 col-sm-6">
                              <div className="branch-single-box">
                                  <div className="branch-content">
                                      <div className="branch-header">
                                          <h4 className="location-name">New Delhi</h4>
                                          <p className="location-type">NOIDA (NCR) OFFICE</p>
                                      </div>
                                      <div className="divider"></div>
                                      <p className="address">F-398, Sector 63, Noida (NCR) 201307</p>
                                      <div className="phone"><Link href="tel:+919004655099">+91 90046 55099</Link></div>
                                      <div className="email"><Link href="mailto:Sales@PanzerIT.com">Sales@PanzerIT.com</Link></div>
                                  </div>
                              </div>
                          </div>
                          <div className="col-lg-4 col-md-6 col-sm-6">
                              <div className="branch-single-box">
                                  <div className="branch-content">
                                      <div className="branch-header">
                                          <h4 className="location-name">Mumbai</h4>
                                          <p className="location-type">KHARGHAR OFFICE</p>
                                      </div>
                                      <div className="divider"></div>
                                      <p className="address">203, Sai Jewel, Plot 26, Sector 35/I, Kharghar, Navi Mumbai, Maharashtra 410210</p>
                                      <div className="phone"><Link href="tel:+919004655099">+91 90046 55099</Link></div>
                                      <div className="email"><Link href="mailto:Sales@PanzerIT.com">Sales@PanzerIT.com</Link></div>
                                  </div>
                              </div>
                          </div>
                          <div className="col-lg-4 col-md-6 col-sm-6">
                              <div className="branch-single-box">
                                  <div className="branch-content">
                                      <div className="branch-header">
                                          <h4 className="location-name">Support Desk</h4>
                                          <p className="location-type">WORKING 24x7</p>
                                      </div>
                                      <div className="divider"></div>
                                      <p className="address">World Wide Work support for queries, requirements, discussions and IT security consultancy.</p>
                                      <div className="phone"><Link href="tel:+919004655099">+91 90046 55099</Link></div>
                                      <div className="email"><Link href="mailto:Sales@PanzerIT.com">Sales@PanzerIT.com</Link></div>
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
