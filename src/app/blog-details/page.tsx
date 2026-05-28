import { Breadcrumb } from "@/components/Breadcrumb";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <div className="panzer-page panzer-page-blog-details">
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
              


              
              
              <Breadcrumb title="Blog List" paths={[{"name":"Blog List","url":"/"},{"name":"Blog Details"}]} />




              
              
              <section className="blog-details-section space bg-light">
                  <div className="container">
                      <div className="row gy-30 flex-column-reverse flex-lg-row">

                          <div className="col-xl-8 col-lg-8">
                              <div className="blog-details-left">
                                  <div className="blog-list-card style-2">
                                      <div className="image overlay-anim1">
                                          <Image src="/assets/images/blog/blog-thumb05.webp" alt="Meeting Image"  width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }} unoptimized />
                                      </div>
                                      <div className="card-content">
                                          <span className="category">Marketing</span>
                                          <h3 className="title">10 Free SEO Marketing Tools Growing Business</h3>
                                          <div className="author-info">
                                              <div className="author">
                                                  <Image src="/assets/images/blog/social-pr01.jpg" alt="Author Image"  width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }} unoptimized />
                                                  <span className="name"><span>By</span> Robert Aguilar</span>
                                              </div>
                                              <span className="date"><i className="icon-calender"></i> August 18, 2025</span>
                                          </div>
                                          <div className="pt-20 pb-25"><div className="border dark"></div></div>
                                          <p className="text">Conveniently extend vertical benefits and forward processes. Holisticly impact alternative e-commerce 
                                              through 24/365 paradigms. Enthusiastically enable goal-oriented maximize goal-oriented ideas whereas 
                                              interoperable platforms. Collaboratively enable integrated outsourcing whereas visionary mindshare. 
                                              Compellingly optimize market results via functionalized</p>
                                          <p>Authoritatively build turnkey products for wireless ROI. Seamlessly grow open-source imperative process
                                              leadership skills. Continually reinvent strategic leadership via resource sucking</p>
                                          <h3 className="title mt-45 mb-10"><Link href="/blog-details">Paid Marketing Campaigns</Link></h3>
                                          <p className="mb-35">Credibly myocardinate multidisciplinary supply chains for low-risk high-yield catalysts for change main
                                              leverage other's technically sound leadership vis-a-vis business deliverables. Progressively formulate
                                              models before synergistic processes. Interactively restore equity</p>
                                          <div className="blogs-quote">
                                              <p>Completely optimize standards compliant vortals for compelling portals engineer
                                                  highly efficient convergence with tactical mindshare intrinsiclye</p>
                                              <span className="name">Linda F. Collins</span>
                                          </div>
                                          <div className="image overlay-anim1">
                                              <Image src="/assets/images/blog/blog-thumb06.webp" alt="Meeting Image"  width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }} unoptimized />
                                          </div>
                                          <h3 className="title mt-30 mb-20"><Link href="/blog-details">3 Most Popular Marketing Tips</Link></h3>
                                          <p className="mb-25">Credibly myocardinate multidisciplinary supply chains for low-risk high-yield catalysts for change main
                                              leverage other's technically sound leadership vis-a-vis business deliverables. Progressively formulate
                                              models before synergistic processes. Interactively restore equity</p>
                                          <div className="featured-list-box">
                                              <div className="featured-list">
                                                  <ul className="list-style-2">
                                                      <li> Appropriately synergize real-time leadership </li>
                                                      <li> Rapidiously simplify extensive to data </li>
                                                      <li> Synergistically envisioneer go forward </li>
                                                  </ul>
                                              </div>
                                          </div>
                                          <div className="blog-details__bottom">
                                              <div className="blog-details__tags">
                                                  <span>Posted In :</span>
                                                  <ul className="blog-details__tags">
                                                      <li>BUSINESS</li>
                                                      <li>FINANCE</li>
                                                  </ul>
                                              </div>
                                              <div className="blog-details__social-list">
                                                  <span>Share:</span>
                                                  <Link href="https://www.facebook.com/"><i className="fa-brands fa-facebook-f"></i></Link>
                                                  <Link href="https://x.com/"><i className="fa-brands fa-x-twitter"></i></Link>
                                                  <Link href="https://www.pinterest.com/"><i className="fa-brands fa-pinterest-p"></i></Link>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                                  
                                  <div className="comment-one">
                                      <h3 className="comment-one__title">1 Comment</h3>
                                      <div className="comment-one__single">
                                          <div className="comment-one__image"> <Image src="/assets/images/blog/comment-1.png" alt=""  width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }} unoptimized /> </div>
                                          <div className="comment-one__content">
                                              <div className="title"><h5>James Noel</h5><span>August 18, 2025</span></div>
                                              <p>Globally supply resource maximizing total linkage whereas seamless experiences
                                                  resource sucking outsourcing before viral e-services</p>
                                              <Link href="/blog-details" className="comment-one__btn">
                                                  <i className="fa-regular fa-share"></i><span className="btn-title">Reply</span>
                                              </Link>
                                          </div>
                                      </div>
                                      <div className="comment-form">
                                          <h3 className="comment-one__title">Add a Comment</h3>
                                          <form id="comment-form" className="comment-form" action="https://formspree.io/f/mzbnjrnb" method="post">
                                              <div className="row">
                                                  <div className="mb-20">
                                                      <textarea name="form_message" className="form-control" rows={6} placeholder="Write Comments..."></textarea>
                                                  </div>
                                                  <div className="col-sm-6">
                                                      <div className="mb-20">
                                                          <input name="form_name" className="form-control" type="text" placeholder="Your Name *" required={true} />
                                                      </div>
                                                  </div>
                                                  <div className="col-sm-6">
                                                      <div className="mb-20">
                                                          <input name="form_email" className="form-control" type="email" placeholder="Enter E-Mail *" required={true} />
                                                      </div>
                                                  </div>
                                                  <div className="mb-25">
                                                      <input name="form_subject" className="form-control" type="text" placeholder="Subject *" required={true} />
                                                  </div>
                                              </div>
                                              <div className="mb-0">
                                                  <div className="form-group remember-check mb-0">
                                                      <input type="checkbox" id="remember-me" required={true} />
                                                      <label htmlFor="remember-me">Save my name & email in the Browser</label>
                                                  </div>
                                                  <button type="submit" className="theme-btn error bg-theme mt-25" data-loading-text="Please wait...">
                                                      <span className="link-effect">
                                                          <span className="btn-title">Submit Now</span>
                                                      </span><i className="fa-regular fa-arrow-right-long"></i>
                                                  </button>
                                              </div>
                                          </form>
                                      </div>
                                  </div>
                              </div>
                          </div>

                          <div className="col-xl-4 col-lg-4">
                              <div className="sidebar-widget blog-sidebar pl-15 lg-pl-0">
                                  <div className="widget-box sidebar-search">
                                      <form action="#" className="sidebar__search-form">
                                          <input type="search" name="search" placeholder="Search..." required={true} />
                                          <button type="submit"><i className="fa-solid fa-magnifying-glass"></i></button>
                                      </form>
                                  </div>
                                  <div className="sidebar-category-list">
                                      <h4 className="sidebar-title"> Category </h4>
                                      <div className="widget-box">
                                          <ul className="categories">
                                              <li><Link href="/blog-grid">Finance Consulting <span>(5)</span></Link></li>
                                              <li><Link href="/blog-grid">Business Consulting <span>(3)</span></Link></li>
                                              <li><Link href="/blog-grid">Maketing <span>(6)</span></Link></li>
                                              <li><Link href="/blog-grid">Technology <span>(4)</span></Link></li>
                                              <li><Link href="/blog-grid">IT Solutions <span>(2)</span></Link></li>
                                              <li><Link href="/blog-grid">Artificial Intelligence <span>(3)</span></Link></li>
                                          </ul>
                                      </div>
                                  </div>
                                  <div className="sidebar-latest-posts">
                                      <h4 className="sidebar-title"> Latest Posts </h4>
                                      <div className="widget-box">
                                          <div className="latest-posts">
                                              <div className="post">
                                                  <Link href="#"><Image src="/assets/images/blog/latest-details01.webp" alt="Post Image"  width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }} unoptimized /></Link>
                                                  <div className="post-content">
                                                      <Link href="#">How to Install Droip into Local WP Server?</Link>
                                                      <p>August 17, 2025</p>
                                                  </div>
                                              </div>
                                              <div className="post">
                                                  <Link href="#"><Image src="/assets/images/blog/latest-details02.webp" alt="Post Image"  width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }} unoptimized /></Link>
                                                  <div className="post-content">
                                                      <Link href="#">10 Free SEO Marketing tools Growing Business</Link>
                                                      <p>August 18, 2025</p>
                                                  </div>
                                              </div>
                                              <div className="post">
                                                  <Link href="#"><Image src="/assets/images/blog/latest-details03.webp" alt="Post Image"  width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }} unoptimized /></Link>
                                                  <div className="post-content">
                                                      <Link href="#">Most popular Promt for Sales Growth in 2025</Link>
                                                      <p>August 19, 2025</p>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                                  <div className="sidebar-tags">
                                      <h4 className="sidebar-title"> Latest Posts </h4>
                                      <div className="widget-box">
                                          <div className="tag-list">
                                              <span className="tag">BUSINESS</span>
                                              <span className="tag active">FINANCE</span>
                                              <span className="tag">DATA</span>
                                              <span className="tag">CORPORATE</span>
                                              <span className="tag">CONSULTING</span>
                                              <span className="tag">MARKETING</span>
                                              <span className="tag">TRADING</span>
                                          </div>
                                      </div>
                                  </div>
                                  <div className="sidebar-newsletter">
                                      <h4 className="sidebar-title"> Newsletter </h4>
                                      <div className="widget-box mb-0">
                                          <form className="newsletter-form" action="https://formspree.io/f/mzbnjrnb" method="post">
                                              <div className="form-group">
                                                  <input type="email" name="email" className="email mb-0" placeholder="Enter email" autoComplete="on" required={true} />
                                                  <button type="submit">
                                                      <i className="far fa-paper-plane"></i>
                                                      <span className="btn-title"></span>
                                                  </button>
                                              </div>
                                          </form>
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
