import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <>
<section className="tv-hero-section  style-4 panzer-cyber-hero">
                    <div className="panzer-cyber-slider-wrap">
                        <div className="panzer-cyber-slider swiper" aria-label="Hero banner slider">
                            <div className="swiper-wrapper">
                                <div className="swiper-slide">
                                    <div className="panzer-cyber-slide">
                                        <Image className="panzer-cyber-image" src="/assets/images/hero/bg1.webp" alt="Cyber security operations banner" width={612} height={367} sizes="100vw" style={{ width: "100%", height: "auto" }} />
                                        <div className="container panzer-cyber-shell">
                                            <div className="panzer-cyber-copy" data-swiper-parallax="-180">
                                                <span className="panzer-cyber-kicker">Managed Security</span>
                                                <h1 className="panzer-cyber-title"> <span>Simple security for every endpoint</span></h1>
                                                <p className="panzer-cyber-text">
                                                    Panzer IT helps protect your devices, users and business data with clear monitoring and quick support.
                                                </p>
                                                <div className="panzer-cyber-actions">
                                                    <Link href="/contact" className="panzer-cyber-btn primary">Connect with Us</Link>
                                                    <Link href="tel:+919004655099" className="panzer-cyber-btn secondary">Call +91 90046 55099</Link>
                                                </div>
                                                
                                            </div>
                                            <aside className="panzer-cyber-visual" data-swiper-parallax="-90">
                                                <div className="panzer-cyber-visual-frame">
                                                    <Image className="panzer-cyber-visual-image" src="/assets/images/hero/banner.webp" alt="Cyber security lock on circuit board" width={622} height={350} sizes="100vw" style={{ width: "100%", height: "auto" }} />
                                                </div>
                                            </aside>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="panzer-cyber-slide">
                                        <Image className="panzer-cyber-image" src="/assets/images/hero/b2.jpg" alt="Cyber threat monitoring banner" width={427} height={240} sizes="100vw" style={{ width: "100%", height: "auto" }} />
                                        <div className="container panzer-cyber-shell">
                                            <div className="panzer-cyber-copy" data-swiper-parallax="-180">
                                                <span className="panzer-cyber-kicker">Data Protection</span>
                                                <h2 className="panzer-cyber-title"><span>Find data risk before it spreads</span></h2>
                                                <p className="panzer-cyber-text">
                                                    Track activity, reduce data leaks and give your team an easier way to understand insider risk.
                                                </p>
                                                <div className="panzer-cyber-actions">
                                                    <Link href="/about" className="panzer-cyber-btn primary">Explore Panzer IT</Link>
                                                    <Link href="/contact" className="panzer-cyber-btn secondary">Request a Demo</Link>
                                                </div>
                                                
                                            </div>
                                            <aside className="panzer-cyber-visual" data-swiper-parallax="-90">
                                                <div className="panzer-cyber-visual-frame">
                                                    <Image className="panzer-cyber-visual-image" src="/assets/images/hero/banner.webp" alt="Cyber security lock on circuit board" width={622} height={350} sizes="100vw" style={{ width: "100%", height: "auto" }} />
                                                </div>
                                            </aside>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="panzer-cyber-slide">
                                        <Image className="panzer-cyber-image" src="/assets/images/hero/bg3.webp" alt="Cyber defense and data protection banner" width={612} height={245} sizes="100vw" style={{ width: "100%", height: "auto" }} />
                                        <div className="container panzer-cyber-shell">
                                            <div className="panzer-cyber-copy" data-swiper-parallax="-180">
                                                <span className="panzer-cyber-kicker">Backup And Recovery</span>
                                                <h2 className="panzer-cyber-title"> <span>Recover fast and keep work running</span></h2>
                                                <p className="panzer-cyber-text">
                                                    Protect important systems with backup, recovery and endpoint defense that keeps your business available.
                                                </p>
                                                <div className="panzer-cyber-actions">
                                                    <Link href="/contact" className="panzer-cyber-btn primary">Talk to Security Team</Link>
                                                    <Link href="/about" className="panzer-cyber-btn secondary">Learn More</Link>
                                                </div>
                                                
                                            </div>
                                            <aside className="panzer-cyber-visual" data-swiper-parallax="-90">
                                                <div className="panzer-cyber-visual-frame">
                                                    <Image className="panzer-cyber-visual-image" src="/assets/images/hero/banner.webp" alt="Cyber security lock on circuit board" width={622} height={350} sizes="100vw" style={{ width: "100%", height: "auto" }} />
                                                </div>
                                            </aside>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="panzer-cyber-controls">
                            <div className="panzer-cyber-controls-right">
                                
                                <div className="panzer-cyber-nav">
                                    <button className="panzer-cyber-prev" type="button" aria-label="Previous slide">
                                        <i className="fa-light fa-arrow-left-long"></i>
                                    </button>
                                    <button className="panzer-cyber-next" type="button" aria-label="Next slide">
                                        <i className="fa-light fa-arrow-right-long"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                
                </section>
                





             




                
                
                <section className="tv-service-section bg-light position-relative overflow-hidden style-4">
                    <div className="tv-service-inner space position-relative overflow-hidden bg-light2 mx-20 ml-mx-0">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="service-title-area d-flex justify-content-between sm-flex-column sm-mb-30">
                                        
                                        <div className="title-wrap " data-wow-duration="1.5s" data-wow-delay=".4s">
                                            <div className="sub-title-2 text-white two"><i className="fa-solid fa-circle-check"></i>Solutions</div>
                                            <h2 className="panzer-static-sec-title text-white">Panzer IT Security, Backup <br />and Data Protection
                                                Solutions
                                            </h2>
                                        </div>
                                        <div className="service-btn-wrapper">
                                            <Link href="/solution" className="theme-btn br-30 service-view-all-btn panzer-static-service-btn">
                                                <span className="link-effect">
                                                    <span className="effect-1">View All</span>
                                                    <span className="effect-1">View All</span>
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
                            <div className="row gy-30">
                                <div className="col-lg-12">
                                    <div className="service-slider swiper panzer-scroll-service">
                                        <div className="swiper-wrapper panzer-service-rows-ready">
                                            <div className="panzer-service-row service-item-wrap service-item-pin">
                                            
                                            <div className="swiper-slide">
                                                <div className="service-box-four">
                                                    <div className="inner">
                                                        <div className="image-box">
                                                            <div className="thumb overlay-anim4"><Image src="/assets/images/service/malware.webp" alt="Service 01" width={612} height={459} sizes="100vw" style={{ width: "100%", height: "auto" }} />
                                                            </div>
                                                            <div className="service-icon">
                                                                <Image width={46} height={46} src="/assets/images/service/hm4-icon01.webp" alt="Icon" />
                                                            </div>
                                                        </div>
                                                        <div className="content">
                                                            <h4 className="title"><Link href="#">Most Advance<br /> Anti-Malware</Link>
                                                            </h4>
                                                            <p className="text">Next-gen anti-malware software for ransomware and
                                                                known or unknown threats with multi-layer protection</p>
                                                           
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            
                                            <div className="swiper-slide">
                                                <div className="service-box-four current">
                                                    <div className="inner">
                                                        <div className="image-box">
                                                            <div className="thumb overlay-anim4"><Image src="/assets/images/service/recovery.webp" alt="Service 01" width={563} height={360} sizes="100vw" style={{ width: "100%", height: "auto" }} />
                                                            </div>
                                                            <div className="service-icon">
                                                                <Image width={44} height={44} src="/assets/images/service/hm4-icon02.webp" alt="Icon" />
                                                            </div>
                                                        </div>
                                                        <div className="content">
                                                            <h4 className="title"><Link href="#">Backup &<br /> Disaster Recovery</Link>
                                                            </h4>
                                                            <p className="text">Backup and DR for virtual, physical, cloud workloads
                                                                and SaaS applications with continuous data availability</p>
                                                    
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            
                                            <div className="swiper-slide">
                                                <div className="service-box-four">
                                                    <div className="inner">
                                                        <div className="image-box">
                                                            <div className="thumb overlay-anim4"><Image src="/assets/images/service/leak.webp" alt="Service 01" width={612} height={344} sizes="100vw" style={{ width: "100%", height: "auto" }} />
                                                            </div>
                                                            <div className="service-icon">
                                                                <Image width={40} height={40} src="/assets/images/service/hm4-icon03.webp" alt="Icon" />
                                                            </div>
                                                        </div>
                                                        <div className="content">
                                                            <h4 className="title"><Link href="#">Data Leak<br /> Prevention – DLP</Link>
                                                            </h4>
                                                            <p className="text">Discover, monitor and prevent sensitive data leakage
                                                                across endpoint, network and cloud environments</p>
                                                           
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            </div>

                                            <div className="panzer-service-row service-item-wrap service-item-pin">
                                            
                                            <div className="swiper-slide">
                                                <div className="service-box-four">
                                                    <div className="inner">
                                                        <div className="image-box">
                                                            <div className="thumb overlay-anim4"><Image src="/assets/images/service/1-3.webp" alt="Service 01" width={500} height={281} sizes="100vw" style={{ width: "100%", height: "auto" }} />
                                                            </div>
                                                            <div className="service-icon">
                                                                <Image width={46} height={46} src="/assets/images/service/hm4-icon01.webp" alt="Icon" />
                                                            </div>
                                                        </div>
                                                        <div className="content">
                                                            <h4 className="title"><Link href="#">Vulnerability Scanner,<br /> Assessment & VAPT</Link>
                                                            </h4>
                                                            <p className="text">Simulate how a hacker or malware can penetrate a
                                                                given IP and reveal vulnerabilities with reasons and resolution</p>
                                                   
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            
                                            <div className="swiper-slide">
                                                <div className="service-box-four current">
                                                    <div className="inner">
                                                        <div className="image-box">
                                                            <div className="thumb overlay-anim4"><Image src="/assets/images/service/i-1.webp" alt="Service 01" width={860} height={556} sizes="100vw" style={{ width: "100%", height: "auto" }} />
                                                            </div>
                                                            <div className="service-icon">
                                                                <Image width={44} height={44} src="/assets/images/service/hm4-icon02.webp" alt="Icon" />
                                                            </div>
                                                        </div>
                                                        <div className="content">
                                                            <h4 className="title"><Link href="#">Employee Monitoring<br /> Solution</Link>
                                                            </h4>
                                                            <p className="text">Monitor activity, user behaviour and data movement
                                                                with employee monitoring and productivity visibility tools</p>
                                                      
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            
                                            <div className="swiper-slide">
                                                <div className="service-box-four">
                                                    <div className="inner">
                                                        <div className="image-box">
                                                            <div className="thumb overlay-anim4"><Image src="/assets/images/service/i-2.webp" alt="Service 01" width={640} height={480} sizes="100vw" style={{ width: "100%", height: "auto" }} />
                                                            </div>
                                                            <div className="service-icon">
                                                                <Image width={40} height={40} src="/assets/images/service/hm4-icon03.webp" alt="Icon" />
                                                            </div>
                                                        </div>
                                                        <div className="content">
                                                            <h4 className="title"><Link href="#">Advance Threat Prevention<br /> | EDR | EPS</Link>
                                                            </h4>
                                                            <p className="text">Strengthen endpoint protection against APT,
                                                                zero-day, targeted attacks and unknown threats</p>
                                                         
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            </div>
                                            <div className="panzer-service-row service-item-wrap">
                                            
                                            <div className="swiper-slide">
                                                <div className="service-box-four">
                                                    <div className="inner">
                                                        <div className="image-box">
                                                            <div className="thumb overlay-anim4"><Image src="/assets/images/service/sccanner.webp" alt="Service 01" width={643} height={360} sizes="100vw" style={{ width: "100%", height: "auto" }} />
                                                            </div>
                                                            <div className="service-icon">
                                                                <Image width={46} height={46} src="/assets/images/service/hm4-icon01.webp" alt="Icon" />
                                                            </div>
                                                        </div>
                                                        <div className="content">
                                                            <h4 className="title"><Link href="#">Network Security<br /> Assessment</Link>
                                                            </h4>
                                                            <p className="text">Map exposed services, misconfigurations and weak
                                                                points before attackers can use them against your business</p>

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            
                                            <div className="swiper-slide">
                                                <div className="service-box-four current">
                                                    <div className="inner">
                                                        <div className="image-box">
                                                            <div className="thumb overlay-anim4"><Image src="/assets/images/service/pre.webp" alt="Service 01" width={860} height={401} sizes="100vw" style={{ width: "100%", height: "auto" }} />
                                                            </div>
                                                            <div className="service-icon">
                                                                <Image width={44} height={44} src="/assets/images/service/hm4-icon02.webp" alt="Icon" />
                                                            </div>
                                                        </div>
                                                        <div className="content">
                                                            <h4 className="title"><Link href="#">Privileged Access<br /> Management</Link>
                                                            </h4>
                                                            <p className="text">Control, monitor and audit administrator access
                                                                across servers, databases and critical applications</p>

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            
                                            <div className="swiper-slide">
                                                <div className="service-box-four">
                                                    <div className="inner">
                                                        <div className="image-box">
                                                            <div className="thumb overlay-anim4"><Image src="/assets/images/service/1-3.webp" alt="Service 01" width={500} height={281} sizes="100vw" style={{ width: "100%", height: "auto" }} />
                                                            </div>
                                                            <div className="service-icon">
                                                                <Image width={40} height={40} src="/assets/images/service/hm4-icon03.webp" alt="Icon" />
                                                            </div>
                                                        </div>
                                                        <div className="content">
                                                            <h4 className="title"><Link href="#">Identity Access<br /> Management</Link>
                                                            </h4>
                                                            <p className="text">Centralize user identities, access policies and
                                                                authentication workflows for safer daily operations</p>

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="panzer-service-arrows">
                                        <button type="button" className="panzer-service-arrow panzer-service-prev" aria-label="Previous service">
                                            <i className="fa-solid fa-arrow-left"></i>
                                        </button>
                                        <button type="button" className="panzer-service-arrow panzer-service-next" aria-label="Next service">
                                            <i className="fa-solid fa-arrow-right"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                   
                <section className="tv-about-section style-4 space bg-light panzer-home-about-section">
                    <div className="container">
                        <div className="row align-items-center gy-30">
                            <div className="col-lg-6">
                                <div className="about-left">
                                    <div className="main-image-box">
                                        
                                        <div className="image-group panzer-about-single-image">
                                            <div className="image1  for-sat-image" data-wow-delay="0.2s"><Image className="br-30 mw-inherit" src="/assets/images/about/cc.webp" alt="People discussing" width={612} height={344} sizes="100vw" style={{ width: "100%", height: "auto" }} /></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="about-content-wrap">
                                    
                                    <div className="title-wrap " data-wow-duration="1.5s" data-wow-delay=".4s">
                                        <div className="sub-title-2 text-theme"><i className="fa-solid fa-circle-check"></i>Who We Are
                                        </div>
                                        <h2 className="sec-title no-title-animation">Best IT Security <br />Solution Provider</h2>
                                        <p>Panzer IT helps organizations protect data across endpoints, servers, cloud,
                                            storage and networks with advanced security, backup and recovery solutions.</p>
                                    </div>
                                    <div className="about-content" data-wow-duration="2s" data-wow-delay=".2s">
                                        <div className="about-feature">
                                            <div className="feature-icon">
                                                <i className="flaticon-service"></i>
                                            </div>
                                            <div className="feature-text">
                                                <h5>360 Degree Comprehensive Security Solutions</h5>
                                            </div>
                                        </div>
                                        <div className="about-feature">
                                            <div className="feature-icon bg-dark">
                                                <i className="flaticon-people"></i>
                                            </div>
                                            <div className="feature-text">
                                                <h5>Experienced IT Security Consultants</h5>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="pt-30 pb-25" data-wow-duration="2s" data-wow-delay=".2s">
                                        <div className="border"></div>
                                    </div>
                                    <ul className="features" data-wow-duration="2s" data-wow-delay=".2s">
                                        <li>Secure data access from anywhere with the right protection parameters</li>
                                        <li>Continuous secure data accessibility and availability for business operations</li>
                                    </ul>
                                    <Link href="/about" className="theme-btn mt-40 br-30 panzer-static-about-btn">
                                        <span className="link-effect">
                                            <span className="effect-1">About Panzer IT</span>
                                            <span className="effect-1">About Panzer IT</span>
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

                  
                <section className="tv-achivement-section bg-light overflow-hidden panzer-home-achievement-section">
                    <div className="tv-achivement-inner position-relative overflow-hidden bg-light2 mx-20 ml-mx-0">
                        <div className="container">
                            <div className="row gy-30">
                                <div className="col-lg-6 col-xxl-6">
                                    <div className="achivement-content-wrapper">
                                        
                                        <div className="title-wrap three" data-wow-duration="1.5s" data-wow-delay=".4s">
                                            <div className="sub-title-2 text-theme"><i className="fa-solid fa-circle-check"></i>Panzer IT</div>
                                            <h2 className="sec-title no-title-animation">Make IT Secure Across <br />Endpoint, Backup, Cloud <br />And Data Protection</h2>
                                            <p>PCs and servers are connected more than ever, and threats are increasingly more
                                                advanced. Panzer IT helps secure every entry point including endpoint, server,
                                                cloud, network perimeter, web, mail and storage.</p>
                                        </div>
                                        <div className="inner-contact">
                                            <div className="icon">
                                                <Image src="/assets/images/callus/call-iocn.webp" alt="" width={40} height={40} sizes="100vw" style={{ width: "100%", height: "auto" }} />
                                            </div>
                                            <div className="content">
                                                <h6 className="call-text">Contact Us</h6>
                                                <Link className="call-phone" href="tel:+919004655099">+91 90046 55099</Link>
                                            </div>
                                        </div>
                                        <Link href="/contact" className="theme-btn mt-40 br-30 panzer-static-contact-btn">
                                            <span className="link-effect">
                                                <span className="effect-1">Contact Us</span>
                                                <span className="effect-1">Contact Us</span>
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
                                <div className="col-lg-3 col-xxl-3 lpm-d-none">
                                    <div className="achivement-image-wrapper">
                                        <div className="thumb-bg">
                                            <svg version="1.1" viewBox="0 0 586.23 500.74" xmlns="http://www.w3.org/2000/svg">
                                                <g transform="translate(-1.0738 -1.2546)">
                                                    <path d="m211.33 501.74c-187.01-7.406-269.07-172.39-164.01-329.74 130.19-194.98 434.71-232.19 520.53-63.614 85.759 168.44-126.35 402.46-356.52 393.35zm63.333-96.994c199.68-42.298 301.86-265.24 140.24-305.98-121.19-30.549-281.94 59.67-317 177.91-27.173 91.643 57.87 153.26 176.77 128.07z" />
                                                </g>outer-box
                                            </svg>
                                        </div>
                                        <div className="thumb img-anim-right"><Image src="/assets/images/achivement/man.png" alt="" width={587} height={704} sizes="100vw" style={{ width: "100%", height: "auto" }} /></div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-xxl-3">
                                    <div className="achivement-right-wrapper">
                                        <div className="content">
                                            
                                            <h4>Panzer IT</h4>
                                        </div>
                                        <div className="counter-box bg-light">
                                            <div className="counter-inner">
                                                <div className="icon"><Image src="/assets/images/achivement/hm2-icon01.webp" alt="" width={29} height={29} sizes="100vw" style={{ width: "100%", height: "auto" }} />
                                                </div>
                                                <div className="count"><span className="count-number odometer" data-count="11">0</span><span className="plus">+</span></div>
                                            </div>
                                            <p>Associate Brands</p>
                                        </div>
                                        <div className="counter-box bg-light">
                                            <div className="counter-inner">
                                                <div className="icon"><Image src="/assets/images/achivement/hm2-icon02.webp" alt="" width={30} height={25} sizes="100vw" style={{ width: "100%", height: "auto" }} />
                                                </div>
                                                <div className="count"><span className="count-number odometer" data-count="360">0</span><span className="plus">&deg;</span></div>
                                            </div>
                                            <p>Security Solutions</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>





        <section className="tv-hero-section style-4 panzer-cyber-hero panzer-brand-partners-section">
                <div className="panzer-cyber-brand-strip">
                        
                        <div className="tv-brands-section style-3 position-relative z-3">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="sponsors-outer brand-outher panzer-cyber-brand-panel">
                                            <div className="trusted-partners d-flex align-items-center mb-60">
                                                <div className="title text-white">BRAND PARTNERS</div>
                                            </div>
                                            <div className="brands-slider-three swiper">
                                                <div className="swiper-wrapper">
                                                    <div className="swiper-slide">
                                                        <div className="brand-item">
                                                            <Link className="image" href="#">
                                                                <Image src="/assets/images/brands/01.png" alt="Brand 01" width={190} height={40} sizes="100vw" style={{ width: "100%", height: "auto" }} />
                                                                <Image src="/assets/images/brands/01.png" alt="Brand 01" width={190} height={40} sizes="100vw" style={{ width: "100%", height: "auto" }} />
                                                            </Link>
                                                        </div>
                                                    </div>
                                                    <div className="swiper-slide">
                                                        <div className="brand-item">
                                                            <Link className="image" href="#">
                                                                <Image src="/assets/images/brands/02.png" alt="Brand 02" width={300} height={81} sizes="100vw" style={{ width: "100%", height: "auto" }} />
                                                                <Image src="/assets/images/brands/02.png" alt="Brand 02" width={300} height={81} sizes="100vw" style={{ width: "100%", height: "auto" }} />
                                                            </Link>
                                                        </div>
                                                    </div>
                                                    <div className="swiper-slide">
                                                        <div className="brand-item">
                                                            <Link className="image" href="#">
                                                                <Image src="/assets/images/brands/03.webp" alt="Brand 03" width={258} height={45} sizes="100vw" style={{ width: "100%", height: "auto" }} />
                                                                <Image src="/assets/images/brands/03.webp" alt="Brand 03" width={258} height={45} sizes="100vw" style={{ width: "100%", height: "auto" }} />
                                                            </Link>
                                                        </div>
                                                    </div>
                                                    <div className="swiper-slide">
                                                        <div className="brand-item">
                                                            <Link className="image" href="#">
                                                                <Image src="/assets/images/brands/04.webp" alt="Brand 04" width={300} height={63} sizes="100vw" style={{ width: "100%", height: "auto" }} />
                                                                <Image src="/assets/images/brands/04.webp" alt="Brand 04" width={300} height={63} sizes="100vw" style={{ width: "100%", height: "auto" }} />
                                                            </Link>
                                                        </div>
                                                    </div>
                                                    <div className="swiper-slide">
                                                        <div className="brand-item">
                                                            <Link className="image" href="#">
                                                                <Image src="/assets/images/brands/05.png" alt="Brand 05" width={200} height={35} sizes="100vw" style={{ width: "100%", height: "auto" }} />
                                                                <Image src="/assets/images/brands/05.png" alt="Brand 05" width={200} height={35} sizes="100vw" style={{ width: "100%", height: "auto" }} />
                                                            </Link>
                                                        </div>
                                                    </div>
                                                    <div className="swiper-slide">
                                                        <div className="brand-item">
                                                            <Link className="image" href="#">
                                                                <Image src="/assets/images/brands/06.png" alt="Brand 06" width={159} height={104} sizes="100vw" style={{ width: "100%", height: "auto" }} />
                                                                <Image src="/assets/images/brands/06.png" alt="Brand 06" width={159} height={104} sizes="100vw" style={{ width: "100%", height: "auto" }} />
                                                            </Link>
                                                        </div>
                                                    </div>

                                                    <div className="swiper-slide">
                                                        <div className="brand-item">
                                                            <Link className="image" href="#">
                                                                <Image src="/assets/images/brands/07.png" alt="Brand 02" width={301} height={89} sizes="100vw" style={{ width: "100%", height: "auto" }} />
                                                                <Image src="/assets/images/brands/07.png" alt="Brand 02" width={301} height={89} sizes="100vw" style={{ width: "100%", height: "auto" }} />
                                                            </Link>
                                                        </div>
                                                    </div>
                                                    <div className="swiper-slide">
                                                        <div className="brand-item">
                                                            <Link className="image" href="#">
                                                                <Image src="/assets/images/brands/08.png" alt="Brand 03" width={300} height={64} sizes="100vw" style={{ width: "100%", height: "auto" }} />
                                                                <Image src="/assets/images/brands/08.png" alt="Brand 03" width={300} height={64} sizes="100vw" style={{ width: "100%", height: "auto" }} />
                                                            </Link>
                                                        </div>
                                                    </div>
                                                    <div className="swiper-slide">
                                                        <div className="brand-item">
                                                            <Link className="image" href="#">
                                                                <Image src="/assets/images/brands/09.png" alt="Brand 03" width={190} height={36} sizes="100vw" style={{ width: "100%", height: "auto" }} />
                                                                <Image src="/assets/images/brands/09.png" alt="Brand 03" width={190} height={36} sizes="100vw" style={{ width: "100%", height: "auto" }} />
                                                            </Link>
                                                        </div>
                                                    </div>
                                                    <div className="swiper-slide">
                                                        <div className="brand-item">
                                                            <Link className="image" href="#">
                                                                <Image src="/assets/images/brands/10.png" alt="Brand 03" width={300} height={105} sizes="100vw" style={{ width: "100%", height: "auto" }} />
                                                                <Image src="/assets/images/brands/10.png" alt="Brand 03" width={300} height={105} sizes="100vw" style={{ width: "100%", height: "auto" }} />
                                                            </Link>
                                                        </div>
                                                    </div>
                                                    <div className="swiper-slide">
                                                        <div className="brand-item">
                                                            <Link className="image" href="#">
                                                                <Image src="/assets/images/brands/11.png" alt="Brand 03" width={150} height={40} sizes="100vw" style={{ width: "100%", height: "auto" }} />
                                                                <Image src="/assets/images/brands/11.png" alt="Brand 03" width={150} height={40} sizes="100vw" style={{ width: "100%", height: "auto" }} />
                                                            </Link>
                                                        </div>
                                                    </div>

                                                </div>
                                                <div className="panzer-brand-nav" aria-label="Brand partners slider controls">
                                                    <button className="panzer-brand-prev" type="button" aria-label="Previous brand">
                                                        <i className="fa-light fa-arrow-left-long"></i>
                                                    </button>
                                                    <button className="panzer-brand-next" type="button" aria-label="Next brand">
                                                        <i className="fa-light fa-arrow-right-long"></i>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
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
                                            <h2 className="sec-title no-title-animation">Feel free to touch base <br /> with Panzer IT</h2>
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
                                                            <option value="dlp">Data Leak Prevention – DLP</option>
                                                            <option value="vapt">Vulnerability Scanner, Assessment & VAPT</option>
                                                            <option value="employee-monitoring">Employee Monitoring</option>
                                                            <option value="edr">Advance Threat Prevention | EDR | EPS</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <textarea id="msg" name="msg" placeholder="Write Message" required={true}></textarea>
                                                </div>
                                                <button type="submit" className="theme-btn panzer-static-send-btn" data-loading-text="Please wait...">
                                                    <span className="btn-title mr-10">Send Message</span>
                                                    <i className="fa-solid fa-arrow-right"></i>
                                                </button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="contact-left-thumb wow img-anim-right data-item-hover overflow-hidden">
                                        <figure className="panzer-static-img" data-style="01" data-intensity="0.2" data-speedin="1" data-speedout="1">
                                            <Image src="/assets/images/contact/hm4-img011.webp" alt="" width={648} height={625} sizes="100vw" style={{ width: "100%", height: "auto" }} />
                                        </figure>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>



              
                
                <div className="tv-marquee-section bg-light position-relative">
                    <div className="tv-marquee-inner mx-20 ml-mx-0 position-relative">
                        <div className="container-fluid p-0 overflow-hidden">
                            <div className="slider__marquee clearfix br-0 marquee-wrap style-2">
                                <div className="panzer-next-marquee-track">
                                <ul className="marquee__group">
                                    <li className="item m-item"><Image width={1098} height={960} className="icon" src="/assets/images/icons/icone2.png" alt="" />
                                        Endpoint Security</li>
                                    <li className="item m-item"><Image width={1098} height={960} className="icon" src="/assets/images/icons/icone2.png" alt="" />
                                        Backup & Disaster Recovery</li>
                                    <li className="item m-item"><Image width={1098} height={960} className="icon" src="/assets/images/icons/icone2.png" alt="" />
                                        Data Loss Prevention (DLP)</li>
                                    <li className="item m-item"><Image width={1098} height={960} className="icon" src="/assets/images/icons/icone2.png" alt="" />
                                        Vulnerability Assessment & VAPT</li>
                                    <li className="item m-item"><Image width={1098} height={960} className="icon" src="/assets/images/icons/icone2.png" alt="" />
                                        IAM, PAM & Network Security</li>
                                </ul>
                                <ul className="marquee__group" aria-hidden="true">
                                    <li className="item m-item"><Image width={1098} height={960} className="icon" src="/assets/images/icons/icone2.png" alt="" />
                                        Endpoint Security</li>
                                    <li className="item m-item"><Image width={1098} height={960} className="icon" src="/assets/images/icons/icone2.png" alt="" />
                                        Backup & Disaster Recovery</li>
                                    <li className="item m-item"><Image width={1098} height={960} className="icon" src="/assets/images/icons/icone2.png" alt="" />
                                        Data Loss Prevention (DLP)</li>
                                    <li className="item m-item"><Image width={1098} height={960} className="icon" src="/assets/images/icons/icone2.png" alt="" />
                                        Vulnerability Assessment & VAPT</li>
                                    <li className="item m-item"><Image width={1098} height={960} className="icon" src="/assets/images/icons/icone2.png" alt="" />
                                        IAM, PAM & Network Security</li>
                                </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

               


                
                <section className="tv-blog-section space bg-color2">
                    <div className="container">
                        
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="title-wrap text-center">
                                    <div className="sub-title-2  text-theme"><i className="fa-solid fa-circle-check"></i>Latest
                                        Resources
                                    </div>
                                    <h2 className="sec-title no-title-animation">Write-ups, Tech Stuff & News <br /> from Panzer IT</h2>
                                </div>
                            </div>
                        </div>
                        <div className="row gy-25 latest-blog-row">
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <article className="blog-single-box">
                                    <div className="inner-box">
                                        <div className="blog-image">
                                            <Image src="/assets/images/blog/blog01.webp" alt="Blog Image" width={392} height={284} sizes="100vw" style={{ width: "100%", height: "auto" }} />
                                            <div className="category-tag"><span></span>Write-up</div>
                                        </div>
                                        <div className="blog-content">
                                            <h4 className="title"><Link href="#">Understanding Ransomware: <br /> Protecting Your Data in the Digital Age</Link></h4>
                                            <div className="pt-25 pb-30">
                                                <div className="border dark"></div>
                                            </div>
                                            <div className="blog-meta">
                                                <Link href="#" className="continue-reading">Explore More</Link>
                                                <span>Panzer IT Blog</span>
                                            </div>
                                        </div>
                                    </div>
                                </article>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <article className="blog-single-box">
                                    <div className="inner-box">
                                        <div className="blog-image">
                                            <Image src="/assets/images/blog/blog02.webp" alt="Blog Image" width={392} height={284} sizes="100vw" style={{ width: "100%", height: "auto" }} />
                                            <div className="category-tag"><span></span>Tech Stuff</div>
                                        </div>
                                        <div className="blog-content">
                                            <h4 className="title"><Link href="#">Understanding IAM, PAM, <br /> and DBAM: Enhancing Cybersecurity</Link></h4>
                                            <div className="pt-25 pb-30">
                                                <div className="border dark"></div>
                                            </div>
                                            <div className="blog-meta">
                                                <Link href="#" className="continue-reading">Explore More</Link>
                                                <span>Panzer IT Blog</span>
                                            </div>
                                        </div>
                                    </div>
                                </article>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <article className="blog-single-box">
                                    <div className="inner-box">
                                        <div className="blog-image">
                                            <Image src="/assets/images/blog/blog03.webp" alt="Blog Image" width={392} height={284} sizes="100vw" style={{ width: "100%", height: "auto" }} />
                                            <div className="category-tag"><span></span>Compliance</div>
                                        </div>
                                        <div className="blog-content">
                                            <h4 className="title"><Link href="#">Essential Cyber Security <br /> Steps for Organizations</Link></h4>
                                            <div className="pt-25 pb-30">
                                                <div className="border dark"></div>
                                            </div>
                                            <div className="blog-meta">
                                                <Link href="#" className="continue-reading">Explore More</Link>
                                                <span>Panzer IT Blog</span>
                                            </div>
                                        </div>
                                    </div>
                                </article>
                            </div>
                        </div>
                    </div>
                </section>
    </>
  );
}
