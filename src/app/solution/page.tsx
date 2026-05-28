import { Breadcrumb } from "@/components/Breadcrumb";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <>
      <div className="panzer-page panzer-page-solution">
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
                


                
                
                <Breadcrumb title="Solutions" paths={[{"name":"Solutions"}]} />



              


                
                
                <section className="tv-service-section space-bottom inner style-2 bg-light pt-100 ">
                    <div className="tv-service-inner position-relative overflow-hidden mx-30 ml-mx-0">
                        <div className="container">
                            
                            <div className="row">
                                <div className="col-lg-12 text-center">
                                    <div className="title-wrap two white" data-wow-duration="2s" data-wow-delay=".0s">
                                        <div className="sub-title-2"><i className="fa-solid fa-circle-check"></i>Solutions</div>
                                        <h2 className="sec-title text-dark no-title-animation">Security, Backup and Data Protection <br />Solutions from Panzer IT</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="row gy-30">
                                <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6">
                                    <div className="tv-service-single-box wow fadeInUp" data-wow-delay=".2s">
                                        <div className="inner-box">
                                            <div className="solution-card-image"><Image src="/assets/images/service/leak.webp" alt="Data leak prevention dashboard"  width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }} unoptimized /></div>
                                            <h4 className="title">Scopd DLP <br />with UEBA</h4>
                                            
                                            <p className="text pb-25">Protect sensitive data with user behavior analytics, policy-driven control and visibility across endpoints and business workflows.</p>
                                            <Link href="/solution-details" className="theme-btn w-100 mt-40 panzer-static-read-btn">
                                                <span className="link-effect">
                                                    <span className="effect-1">READ MORE</span>
                                                    <span className="effect-1">READ MORE</span>
                                                </span>
                                                <i className="fa-solid fa-arrow-up-right"></i>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6">
                                    <div className="tv-service-single-box wow fadeInUp" data-wow-delay=".25s">
                                        <div className="inner-box">
                                            <div className="solution-card-image"><Image src="/assets/images/service/sccanner.webp" alt="Vulnerability assessment workspace"  width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }} unoptimized /></div>
                                            <h4 className="title">Vulnerability Scanner, <br />Assessment & VAPT</h4>
                                          
                                            <p className="text pb-25">Identify exploitable weaknesses before attackers do with guided vulnerability assessment and penetration testing support.</p>
                                            <Link href="/solution-details" className="theme-btn w-100 mt-40 panzer-static-read-btn">
                                                <span className="link-effect">
                                                    <span className="effect-1">READ MORE</span>
                                                    <span className="effect-1">READ MORE</span>
                                                </span>
                                                <i className="fa-solid fa-arrow-up-right"></i>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6">
                                    <div className="tv-service-single-box wow fadeInUp" data-wow-delay=".3s">
                                        <div className="inner-box">
                                            <div className="solution-card-image"><Image src="/assets/images/service/i-1.webp" alt="Employee monitoring solution"  width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }} unoptimized /></div>
                                            <h4 className="title">Employee Monitoring <br />Solution</h4>
                                           
                                            <p className="text pb-25">Track risky behavior, improve accountability and support compliance with secure user activity monitoring for enterprise teams.</p>
                                            <Link href="/solution-details" className="theme-btn w-100 mt-40 panzer-static-read-btn">
                                                <span className="link-effect">
                                                    <span className="effect-1">READ MORE</span>
                                                    <span className="effect-1">READ MORE</span>
                                                </span>
                                                <i className="fa-solid fa-arrow-up-right"></i>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6">
                                    <div className="tv-service-single-box wow fadeInUp" data-wow-delay=".35s">
                                        <div className="inner-box">
                                            <div className="solution-card-image"><Image src="/assets/images/service/malware.webp" alt="Anti malware protection"  width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }} unoptimized /></div>
                                            <h4 className="title">Most Advanced <br />Anti-Malware</h4>
                                          
                                            <p className="text pb-25">Deploy next-generation anti-malware protection against ransomware, zero-day threats and known or unknown endpoint attacks.</p>
                                            <Link href="/solution-details" className="theme-btn w-100 mt-40 panzer-static-read-btn">
                                                <span className="link-effect">
                                                    <span className="effect-1">READ MORE</span>
                                                    <span className="effect-1">READ MORE</span>
                                                </span>
                                                <i className="fa-solid fa-arrow-up-right"></i>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6">
                                    <div className="tv-service-single-box wow fadeInUp" data-wow-delay=".4s">
                                        <div className="inner-box">
                                            <div className="solution-card-image"><Image src="/assets/images/service/backup.webp" alt="Backup and disaster recovery"  width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }} unoptimized /></div>
                                            <h4 className="title">Backup & Disaster <br />Recovery</h4>
                                           
                                            <p className="text pb-25">Keep virtual, physical, cloud and SaaS workloads recoverable with resilient backup strategy and business continuity planning.</p>
                                            <Link href="/solution-details" className="theme-btn w-100 mt-40 panzer-static-read-btn">
                                                <span className="link-effect">
                                                    <span className="effect-1">READ MORE</span>
                                                    <span className="effect-1">READ MORE</span>
                                                </span>
                                                <i className="fa-solid fa-arrow-up-right"></i>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6">
                                    <div className="tv-service-single-box wow fadeInUp" data-wow-delay=".45s">
                                        <div className="inner-box">
                                            <div className="solution-card-image"><Image src="/assets/images/service/recovery.webp" alt="Cross platform backup solution"  width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }} unoptimized /></div>
                                            <h4 className="title">Backup Solution <br />for All Platforms</h4>
                                        
                                            <p className="text pb-25">Choose scalable backup for endpoints, servers and enterprise environments with flexible licensing and strong return on investment.</p>
                                            <Link href="/solution-details" className="theme-btn w-100 mt-40 panzer-static-read-btn">
                                                <span className="link-effect">
                                                    <span className="effect-1">READ MORE</span>
                                                    <span className="effect-1">READ MORE</span>
                                                </span>
                                                <i className="fa-solid fa-arrow-up-right"></i>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6">
                                    <div className="tv-service-single-box wow fadeInUp" data-wow-delay=".5s">
                                        <div className="inner-box">
                                            <div className="solution-card-image"><Image src="/assets/images/service/pre.webp" alt="Data leak prevention solution"  width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }} unoptimized /></div>
                                            <h4 className="title">Data Leak Prevention <br />DLP</h4>
                                        
                                            <p className="text pb-25">Discover, monitor and prevent sensitive data exposure across endpoint, network and cloud channels before it leaves your control.</p>
                                            <Link href="/solution-details" className="theme-btn w-100 mt-40 panzer-static-read-btn">
                                                <span className="link-effect">
                                                    <span className="effect-1">READ MORE</span>
                                                    <span className="effect-1">READ MORE</span>
                                                </span>
                                                <i className="fa-solid fa-arrow-up-right"></i>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6">
                                    <div className="tv-service-single-box wow fadeInUp" data-wow-delay=".55s">
                                        <div className="inner-box">
                                            <div className="solution-card-image"><Image src="/assets/images/service/lock.webp" alt="Advanced threat prevention"  width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }} unoptimized /></div>
                                            <h4 className="title">Advanced Threat Prevention <br />EDR | EPS</h4>
                                            
                                            <p className="text pb-25">Improve detection and response with layered endpoint defense built for targeted attacks, APTs and modern persistent threats.</p>
                                            <Link href="/solution-details" className="theme-btn w-100 mt-40 panzer-static-read-btn">
                                                <span className="link-effect">
                                                    <span className="effect-1">READ MORE</span>
                                                    <span className="effect-1">READ MORE</span>
                                                </span>
                                                <i className="fa-solid fa-arrow-up-right"></i>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6">
                                    <div className="tv-service-single-box wow fadeInUp" data-wow-delay=".6s">
                                        <div className="inner-box">
                                            <div className="solution-card-image"><Image src="/assets/images/service/i-2.webp" alt="Identity and privileged access management"  width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }} unoptimized /></div>
                                            <h4 className="title">IAM | PAM | PSM <br />& DBAM</h4>
                                           
                                            <p className="text pb-25">Secure identities, privileged access and critical sessions with enterprise-grade access management and stronger control over sensitive systems.</p>
                                            <Link href="/solution-details" className="theme-btn w-100 mt-40 panzer-static-read-btn">
                                                <span className="link-effect">
                                                    <span className="effect-1">READ MORE</span>
                                                    <span className="effect-1">READ MORE</span>
                                                </span>
                                                <i className="fa-solid fa-arrow-up-right"></i>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>




                

            



                
                <section className="tv-process-section bg-light position-relative">
                    <div className="p-top-center z-1 wow slideInTop">
                        <Image src="/assets/images/process/hm1-shape01.png" alt=""  width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }} unoptimized />
                    </div>
                    <div className="process-inner bg-theme3  mx-30 ml-mx-0 br_bl-30 br_br-30 ml-br-0  space  overflow-hidden xxl-br-0 position-relative">
                        <div className="container position-relative">
                            
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="process-title mt--25">
                                        <h2 className="text-white text-center">HOW WE WORK</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="row gy-30">
                                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                                    <div className="tv-process-item wow fadeInRightBig" data-wow-delay=".2s">
                                        <h4 className="title-text">STEP 01</h4>
                                        <div className="process-box">
                                            <div className="icon"><Image src="/assets/images/process/hm1-icon1.webp" alt=""  width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }} unoptimized /></div>
                                            <h3 className="title">Consult & Understand</h3>
                                            <p>We study your infrastructure, data flow, risks and compliance needs before recommending any solution.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                                    <div className="tv-process-item wow fadeInRightBig" data-wow-delay=".3s">
                                        <h4 className="title-text">STEP 02</h4>
                                        <div className="process-box">
                                            <div className="icon"><Image src="/assets/images/process/hm1-icon2.webp" alt=""  width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }} unoptimized /></div>
                                            <h3 className="title">Assess & Recommend</h3>
                                            <p>Our team maps the right mix of security, backup and monitoring technologies for your environment.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                                    <div className="tv-process-item  wow fadeInRightBig" data-wow-delay=".4s">
                                        <h4 className="title-text">STEP 03</h4>
                                        <div className="process-box">
                                            <div className="icon"><Image src="/assets/images/process/hm1-icon3.webp" alt=""  width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }} unoptimized /></div>
                                            <h3 className="title">Deploy & Integrate</h3>
                                            <p>We implement the chosen controls with the right configuration, protection layers and operational alignment.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                                    <div className="tv-process-item wow fadeInRightBig" data-wow-delay=".5s">
                                        <h4 className="title-text">STEP 04</h4>
                                        <div className="process-box">
                                            <div className="icon"><Image src="/assets/images/process/hm1-icon4.webp" alt=""  width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }} unoptimized /></div>
                                            <h3 className="title">Support & Optimize</h3>
                                            <p>Continuous secure data accessibility and availability stays strong through ongoing tuning and support.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>



              



                
                
                <section className="tv-cta-section inner bg-light">
                    <div className="container border-top">
                        <div className="row gy-30 align-items-center">
                            <div className="col-lg-6">
                                <div className="cta-content-wrapper">
                                   <div className="title-wrap three" data-wow-duration="1.5s" data-wow-delay=".4s">
                                        <div className="sub-title-2 text-theme"><i className="fa-solid fa-circle-check"></i>Get In Touch</div>
                                        <h2 className="sec-title">Let&apos;s Collaborate with Us</h2>
                                        <p>Collaboratively supply bricks-and-clicks metrics for maintainable users from <br /> reinvent unique value for just in time consult.</p>
                                    </div>
                                    <Link href="/contact" className="theme-btn">
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
                            <div className="col-lg-6">
                                <div className="image-grid">
                                    <div className="lines">
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </div>
                                    <div className="lines2">
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </div>
                                    <div className="image-box">
                                        <div className="image-item"><Image src="/assets/images/service/details01.webp" alt="Person 1"  width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }} unoptimized /></div>
                                        <div className="image-item"><Image src="/assets/images/service/details02.webp" alt="Person 3"  width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }} unoptimized /></div>
                                        <div className="image-item"><Image src="/assets/images/service/details03.webp" alt="Person 4"  width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }} unoptimized /></div>
                                        <div className="image-item"><Image src="/assets/images/service/details04.webp" alt="Person 5"  width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }} unoptimized /></div>
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
    </>
  );
}
